import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles/transitions.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HomeIcon from "./icons/HomeIcon";
import AboutIcon from "./icons/AboutIcon";
import AtSymbolIcon from "./icons/AtSymbolIcon";

function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-start pt-4 text-stone-900 sm:pt-5">
      <nav className="mb-4 flex gap-4 lg:mb-5 lg:gap-5">
        <button
          className="rounded-lg outline-stone-100 transition duration-150 hover:text-amber-950 focus:outline-1 active:scale-90"
          onClick={() => setActiveTab(0)}
        >
          <HomeIcon />
        </button>
        <button
          className="rounded-lg outline-stone-100 transition duration-150 hover:text-amber-950 focus:outline-1 active:scale-90"
          onClick={() => setActiveTab(1)}
        >
          <AboutIcon />
        </button>
        <button
          className="rounded-lg outline-stone-100 transition duration-150 hover:text-amber-950 focus:outline-1 active:scale-90"
          onClick={() => setActiveTab(2)}
        >
          <AtSymbolIcon />
        </button>
      </nav>
      <CSSTransition
        in={activeTab === 0}
        timeout={500}
        classNames="tab"
        unmountOnExit
      >
        <Hero active={activeTab === 0} />
      </CSSTransition>
      <CSSTransition
        in={activeTab === 1}
        timeout={500}
        classNames="tab"
        unmountOnExit
      >
        <About active={activeTab === 1} />
      </CSSTransition>
      <CSSTransition
        in={activeTab === 2}
        timeout={500}
        classNames="tab"
        unmountOnExit
      >
        <Contact active={activeTab === 2} />
      </CSSTransition>
      <Footer />
    </div>
  );
}

export default App;
