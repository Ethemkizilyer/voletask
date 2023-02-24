import './App.css';
import Header from './Components/Header';
import CarouselSlider from "./Components/CarouselSlider";
import Mycards from './Components/Mycards';
import Market from './Components/Market';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer position="top-right" style={{top:"15%"}} />
      <Header />
      <CarouselSlider />
      <Mycards />
      <Market />
    </div>
  );
}

export default App;
