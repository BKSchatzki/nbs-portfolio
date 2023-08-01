import React from "react";

function Contact() {
  return (
    <div className="flex w-80 flex-col rounded-xl bg-stone-100/50">
      <h3 className="m-8 text-center text-2xl font-semibold">Contact Me:</h3>
      <form
        action=""
        className="mx-4 mb-8 flex flex-col items-center justify-center"
      >
        <input
          className="w-full rounded-lg bg-stone-100/50 px-4 py-2 outline-none"
          type="text"
          placeholder="Name"
        />
        <input
          className="my-2 w-full rounded-lg bg-stone-100/50 px-4 py-2 outline-none"
          type="email"
          placeholder="Email"
        />
        <textarea
          className="w-full rounded-lg bg-stone-100/50 px-4 py-2 outline-none"
          placeholder="Message"
        />
      </form>
    </div>
  );
}

export default Contact;
