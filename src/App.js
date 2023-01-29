import './App.css';
import Header from './Components/Header';
import CarouselSlider from "./Components/CarouselSlider";
import Mycards from './Components/Mycards';
import Market from './Components/Market';

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselSlider />
      <Mycards/>
    <Market/>
    </div>
  );
}

export default App;
