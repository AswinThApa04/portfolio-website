import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-white text-gray-800 flex items-center justify-center px-4">
      <div className="max-w-xl w-full">
        <h1 className="text-4xl font-bold text-center mb-6 text-purple-600">Contact Me</h1>
        <form className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              placeholder="Your message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>
        <div className="text-center mt-6 text-sm text-gray-600">
          Or reach me via{" "}
          <a href="https://github.com/AswinThApa04" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">
            GitHub
          </a>{" "}
          or{" "}
          <a href="https://www.linkedin.com/in/your-link" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;