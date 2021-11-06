import React from 'react';
import './Header.css';


function Header() {

    return (
        <div className='header'>
           
           <a href="/#"><img className="header__logo" src="/logo.png"/></a>
           
            {/* Logo */}
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne"><a href="https://opensea.io/" target="_blank">OpeanSea</a></span>
                </div>
                <div className="header__option">
                <span className="header__optionLineOne"><a href="https://rinkeby.etherscan.io/address/0xe3ab1cd245dcca8f9a54b0ecf86276271adfd993" target="_blank">Contract</a></span>
                </div>
                <div className="header__option">
                <span className="header__optionLineOne"><a href="https://twitter.com/" target="_blank">Twitter</a></span>
                </div>
            </div>
        </div>
    )
}

export default Header;