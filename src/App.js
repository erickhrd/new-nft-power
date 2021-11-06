import './App.css';
import Minter from './Minter';
import Header from './Header';
import Description from './Description';
import AboutUs from './AboutUs';

function App() {
  return (
    <div className="App">
      <Header/>
      <Minter></Minter>
      <Description/>
      <AboutUs/>
    </div>
  );
}

export default App;
