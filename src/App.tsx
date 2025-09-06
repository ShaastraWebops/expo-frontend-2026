
import "./App.css";
import Hero from "./components/Hero";

import WhyExhibit from "./components/WhyExhibit";
import PrevExhibits from "./components/PrevExhibits";
import ContactPage from './components/ContacUs.tsx'
import FAQsPage from "./components/Faqs.tsx";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen bg-primary-black overflow-hidden">
    
        <Hero />
        <WhyExhibit />
        <PrevExhibits />
        <FAQsPage />
        <ContactPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
