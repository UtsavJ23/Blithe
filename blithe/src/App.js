import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar';
import IntroBG from './components/IntroBG';
import Offers from './components/Offers';
import WeAreBLITHE from './components/WeAreBruhh';
import Grid from './components/Grid';
function App() {
  return (
    <div className="App">
      <Navbar />
      <IntroBG />
      <Grid />
      <Offers />
      <WeAreBLITHE />
    </div>
  );
}

export default App;
