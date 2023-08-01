import React from "react";

function Hero() {
  return (
    <div className="relative">
      <div className="relative flex flex-col bg-stone-100">
        <h1 className="p-16 text-center text-3xl font-bold">
          Nick B. Schatzki
          <br />
          <span className="text-xl font-normal">Voice Artist</span>
        </h1>
        <img src="https://picsum.photos/200" alt="Image" />
      </div>
    </div>
  );
}

export default Hero;
