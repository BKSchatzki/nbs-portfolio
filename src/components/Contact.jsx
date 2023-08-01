import React from "react";

function Contact({ active }) {
  return (
    <div
      className={`flex w-80 flex-col rounded-xl bg-stone-100/75 shadow-2xl shadow-green-700 ${
        active ? "" : "hidden"
      }`}
    >
      <h3 className="m-8 text-center text-xl font-semibold">Contact Me:</h3>
      <form
        action=""
        className="m-4 mt-0 flex flex-col items-center justify-center gap-4"
      >
        <label hidden htmlFor="name">
          Name:
        </label>
        <input
          className="w-full rounded-lg bg-stone-100/50 px-4 py-2 outline-stone-900 transition duration-150 placeholder:text-stone-900/50 hover:bg-slate-100/70 focus:bg-slate-100/80 focus:outline-1"
          type="text"
          placeholder="Name"
          id="name"
        />
        <label hidden htmlFor="email">
          Email:
        </label>
        <input
          className="w-full rounded-lg bg-stone-100/50 px-4 py-2 outline-stone-900 transition duration-150 placeholder:text-stone-900/50 hover:bg-slate-100/70 focus:bg-slate-100/80 focus:outline-1"
          type="email"
          placeholder="Email"
          id="email"
        />
        <label hidden htmlFor="message">
          Message:
        </label>
        <textarea
          className="h-48 w-full rounded-lg bg-stone-100/50 px-4 py-2 outline-stone-900 transition duration-150 placeholder:text-stone-900/50 hover:bg-slate-100/70 focus:bg-slate-100/80 focus:outline-1"
          placeholder="Message"
          id="message"
        />
        <button className="w-5/6 rounded-lg bg-stone-900 px-4 py-2 font-semibold text-stone-100 outline-stone-100 transition duration-150 hover:bg-yellow-950 focus:outline-1 active:scale-95">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
