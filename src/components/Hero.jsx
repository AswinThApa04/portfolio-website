import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section class="flex flex-col md:flex-row items-center justify-between min-h-screen px-8 md:px-20 bg-gradient-to-b from-blue-500 to-purple-700 text-white">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
        Hi, I'm <span className="text-yellow-400">Aswin</span> 
      </h1>

      <TypeAnimation
        sequence={[
          "a React & Tailwind Enthusiast",
          1500,
          "a Full-Stack Learner",
          1500,
          "always learning ",
          1500,
        ]}
        wrapper="span"
        speed={50}
        className="text-lg sm:text-xl mb-6"
        repeat={Infinity}
      />

      <p className="text-md sm:text-lg mb-6">
        I build responsive, modern web apps with a focus on clean UI.
      </p>

      <a
        href="#projects"
        className="px-6 py-2 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition-all"
      >
        View My Work
      </a>

      <div className="mt-6 flex gap-6 text-white text-xl">
        <a href="https://github.com/AswinThApa04" target="_blank" rel="noreferrer">
          <Github className="hover:text-gray-300" />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
          <Linkedin className="hover:text-gray-300" />
        </a>
        <a href="mailto:youremail@example.com">
          <Mail className="hover:text-gray-300" />
        </a>
      </div>

      <ChevronDown className="mt-10 animate-bounce w-6 h-6" />
    </section>
  );
}
