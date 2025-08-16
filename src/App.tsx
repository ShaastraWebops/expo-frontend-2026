import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import WhyExhibit from "./components/WhyExhibit";
import PrevExhibits from "./components/PrevExhibits";

function App() {
  return (
    <>
      <div className="min-h-screen bg-primary-black overflow-hidden">
        <Header />
        <Hero />
        <WhyExhibit/>
        <PrevExhibits/>
      </div>
    </>
  );
}

export default App;
