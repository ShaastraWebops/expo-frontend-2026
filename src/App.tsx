
import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import WhyExhibit from "./components/WhyExhibit";
import PrevExhibits from "./components/PrevExhibits";
import ContactPage from './components/ContacUs.tsx'
import FAQsPage from "./components/Faqs.tsx";

function App() {
  return (
    <>
      <div className="min-h-screen bg-primary-black text-white">
        <Header />
        <Hero />
        <WhyExhibit />
        <PrevExhibits />
        <FAQsPage />
        <div id="contact"><ContactPage /></div>
      </div>
    </>
  );
}

export default App;
