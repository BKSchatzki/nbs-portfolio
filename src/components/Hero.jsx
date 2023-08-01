import React from "react";

function Hero() {
  return (
    <div className="flex w-80 flex-col rounded-xl bg-stone-100/50">
      <h1 className="m-16 text-center text-2xl font-semibold">
        Nick B. Schatzki
        <hr className="mt-3 border border-stone-900" />
        <span className="text-lg font-normal">Voice Artist</span>
      </h1>
      <img
        src="https://picsum.photos/200"
        alt="Hero Image"
        className="m-4 rounded-xl"
      />
    </div>
  );
}

export default Hero;
