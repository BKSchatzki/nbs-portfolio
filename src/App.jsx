import React, { useState } from "react";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HomeModern from "./icons/HomeModern";
import AtSymbol from "./icons/AtSymbol";

function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-start pt-4 text-stone-900">
      <nav className="mb-4 flex gap-4">
        <button
          className="rounded-lg outline-stone-100 transition duration-150 hover:text-yellow-950 focus:outline-1 active:scale-90"
          onClick={() => setActiveTab(0)}
        >
          <HomeModern />
        </button>
        <button
          className="rounded-lg outline-stone-100 transition duration-150 hover:text-yellow-950 focus:outline-1 active:scale-90"
          onClick={() => setActiveTab(1)}
        >
          <AtSymbol />
        </button>
      </nav>
      <Hero active={activeTab === 0} />
      <Contact active={activeTab === 1} />
      <Footer />
    </div>
  );
}

export default App;
