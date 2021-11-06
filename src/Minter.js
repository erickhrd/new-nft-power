import { useEffect, useState } from "react";
import { connectWallet, getCurrentWalletConnected, mintPower, contract} from "./utils/interact.js";
import './Minter.css'
const Minter = (props) => {

  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [maxMint, setMaxMint] = useState("");
  const [maxSupply, setMaxSupply] = useState("");
  const [totalMinted, setTotalMinted] = useState("");
  const [nftQuantity, setNftQuantity] = useState(0);
  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Sale is live above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" rel="noreferrer" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

useEffect(() => {
  async function fetchData() {
    const {address, status} = await getCurrentWalletConnected();
    setWallet(address)
    setStatus(status);

    addWalletListener();

    const maxMint = await contract.methods.MAX_PUBLIC_MINT().call();
      setMaxMint(maxMint);
    const maxSupply =  await contract.methods.MAX_SUPPLY().call();
    setMaxSupply(maxSupply);
    const totalMinted = await contract.methods.totalSupply().call();
    setTotalMinted(totalMinted);
  }
  fetchData();
}, []);

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => {
    const { status } = await mintPower(nftQuantity);
    setStatus(status);
};



  return (
    <div className="Minter">
      <button id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>

      <br></br>
      <h1 id="title">Mint a CupCake</h1>
      <div className="display__inside">
        <div>
          <img className="cupcake__image" src="/cupcake.jpg"/>
        </div>
        <div>
            <h2>🧁 {totalMinted}/{maxSupply}</h2>
            <p>
              Simply add the number of CupCakes you want to mint, then press "Mint."
            </p>
            <form>
              <h2>({maxMint}-MAX): </h2>
              <input
                type="number"
                placeholder="0"
                onChange={(event) => setNftQuantity(event.target.value)}
              />
            </form> 
            <button id="mintButton" onClick={onMintPressed}>
              Mint NFT
            </button>
          </div>
        </div>
      <p id="status">
        {status}
      </p>
    </div>
  );
};

export default Minter;
