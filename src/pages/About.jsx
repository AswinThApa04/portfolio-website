import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const base = import.meta.env.BASE_URL; // Add this line

  return (
    <motion.section
      id="about"
      className="relative font-sans min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Decorative Background Blobs */}
      <div className="absolute w-80 h-80 bg-purple-300 opacity-20 rounded-full top-[-60px] left-[-60px] blur-3xl z-0"></div>
      <div className="absolute w-64 h-64 bg-pink-300 opacity-20 rounded-full bottom-[-80px] right-[-80px] blur-2xl z-0"></div>

      {/* Main Content */}
      <div className="relative bg-white shadow-2xl rounded-3xl p-10 max-w-3xl text-center space-y-6 z-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-purple-600">About Me</h1>

        <p className="text-lg sm:text-xl text-gray-700 leading-8">
          I’m <span className="font-bold text-indigo-600">Aswin</span>, a passionate{" "}
          <span className="font-semibold text-purple-500">front-end developer</span> with a focus on
          building sleek, responsive, and intuitive user interfaces using{" "}
          <span className="font-medium text-indigo-500">React</span> and{" "}
          <span className="font-medium text-indigo-500">Tailwind CSS</span>.
        </p>

        <p className="text-lg sm:text-xl text-gray-700 leading-8">
          My journey started with a love for design and evolved into crafting modern web experiences
          that are both functional and beautiful.
        </p>

        <p className="text-lg sm:text-xl text-gray-700 leading-8">
          Outside of coding, I enjoy music, keeping up with tech trends, and tackling{" "}
          <span className="text-pink-500 font-medium">LeetCode</span> challenges to keep sharpening my
          problem-solving skills.
        </p>

        {/* Tech Icons Row */}
        <div className="flex justify-center gap-5 pt-4">
          <img src={`${base}icons/react.svg`} className="w-8" title="React" />
          <img src={`${base}icons/tailwind.svg`} className="w-8" title="Tailwind CSS" />
          <img src={`${base}icons/js.svg`} className="w-8" title="JavaScript" />
          <img src={`${base}icons/github.svg`} className="w-8" title="GitHub" />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
