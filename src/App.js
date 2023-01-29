import './App.css';
import Header from './Components/Header';
import CarouselSlider from "./Components/CarouselSlider";
import Mycards from './Components/Mycards';

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselSlider />
      <Mycards/>
    </div>
  );
}

export default App;
