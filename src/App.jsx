import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-merriweather flex min-h-screen flex-col items-center justify-center text-stone-900">
      <Hero />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
