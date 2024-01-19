import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners/Partners";
import Residencies from "./components/Residencies/Residencies";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div>
      <div className="white-gradient"></div>
        <Header />
        <Hero />
      </div>
      <Partners />
      <Residencies />
    </div>
  );
}

export default App;
