import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-100 text-gray-800 flex items-center justify-center px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-6 text-purple-600">About Me</h1>
        <p className="text-lg leading-7 mb-4">
          I'm <span className="font-semibold">Aswin</span>, a passionate front-end developer with a
          strong interest in building sleek and responsive web applications.
          I primarily work with <span className="font-medium">React</span>, <span className="font-medium">Tailwind CSS</span>, and modern JavaScript.
        </p>
        <p className="text-lg leading-7 mb-4">
          My journey started with an interest in UI/UX and evolved into a love for developing fast, accessible, and interactive web experiences.
        </p>
        <p className="text-lg leading-7">
          I'm always learning and love contributing to real-world projects.
          Outside coding, I enjoy music, exploring tech trends, and solving LeetCode problems!
        </p>
      </div>
    </section>
  );
};

export default About;
