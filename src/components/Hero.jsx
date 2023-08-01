import React from "react";

function Hero({ active }) {
  return (
    <div
      className={`flex w-80 flex-col rounded-xl bg-stone-100/75 shadow-2xl shadow-green-700 sm:w-96 lg:w-[540px] ${
        active ? "" : "hidden"
      }`}
    >
      <h1 className="m-16 text-center text-2xl font-semibold sm:m-20 sm:text-3xl lg:text-4xl">
        Nick B. Schatzki
        <hr className="mt-3 border border-stone-900 sm:mt-4 lg:mt-5" />
        <span className="text-lg font-normal sm:text-xl lg:text-2xl">
          Voice Artist
        </span>
      </h1>
      <img
        src="https://picsum.photos/200"
        alt="Hero Image"
        className="mx-4 mb-8 rounded-xl sm:mx-5 sm:mb-10 lg:mx-7"
      />
    </div>
  );
}

export default Hero;
