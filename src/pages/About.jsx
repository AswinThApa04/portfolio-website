import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex items-center justify-center px-4 py-16">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-purple-600">About Me</h1>

        <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-8">
          I’m <span className="font-bold text-indigo-600">Aswin</span>, a passionate{" "}
          <span className="font-semibold text-purple-500">front-end developer</span> with a focus on
          building sleek, responsive, and intuitive user interfaces using{" "}
          <span className="font-medium text-indigo-500">React</span> and{" "}
          <span className="font-medium text-indigo-500">Tailwind CSS</span>.
        </p>

        <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-8">
          My journey started with a love for design and evolved into crafting modern web experiences
          that are both functional and beautiful.
        </p>

        <p className="text-lg sm:text-xl text-gray-700 leading-8">
          Outside of coding, I enjoy 🎵 music, keeping up with 👨‍💻 tech trends, and tackling
          🧠 LeetCode challenges to keep sharpening my problem-solving skills.
        </p>
      </div>
    </section>
  );
};

export default About;