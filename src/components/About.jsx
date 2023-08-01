import React from "react";

function About({ active }) {
  return (
    <div
      className={`flex w-80 flex-col rounded-xl bg-stone-100/75 shadow-2xl shadow-green-700 sm:w-96 lg:w-[540px] ${
        active ? "" : "hidden"
      }`}
    >
      <h2 className="m-8 text-center text-xl font-semibold sm:m-10 sm:text-2xl lg:m-14 lg:text-3xl">
        Soulful Symphony
      </h2>
      <p className="text-md mx-8 mb-8 mt-0 sm:mx-10 sm:mb-10 sm:text-lg lg:mx-14 lg:text-xl">
        I'm Nick B. Schatzki, a versatile voice actor and voiceover artist. With
        captivating character portrayals and compelling narrations, I weave
        soulful symphonies that transcend genres effortlessly. My emotive voice
        deeply connects with audiences, captivating hearts and minds. Join me on
        an enchanting auditory journey, exploring imaginative possibilities
        through the mesmerizing power of sound. Experience the art of
        storytelling through my voice.
      </p>
    </div>
  );
}

export default About;
