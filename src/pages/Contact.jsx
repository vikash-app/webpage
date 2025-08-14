import React from "react";
export default function Contact() {
  return (
    <div className="max-w-lg mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-primary">Contact</h1>
      <p className="mb-8 text-lg">
        Have a question, suggestion, or just want to say hello? Fill out the form below!
      </p>
      <form className="bg-white dark:bg-darkSurface rounded-xl shadow-lg p-8 flex flex-col gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
          required
        />
        <textarea
          placeholder="Your Message"
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
          rows={5}
          required
        />
        <button
          type="submit"
          className="bg-primary text-white py-3 px-6 rounded-lg font-bold hover:bg-accent transition"
          disabled
          title="Demo only"
        >
          Send Message
        </button>
        <span className="text-sm text-gray-500 text-center mt-2">
          This form is for demo purposes only.
        </span>
      </form>
    </div>
  );
}