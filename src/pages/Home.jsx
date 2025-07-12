import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import devAnimation from "../assets/anim.json"; 
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="relative min-h-[100vh] pb-20 flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 bg-gradient-to-b from-blue-500 via-purple-600 to-gray-900 text-white overflow-hidden">

      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6 z-10">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm <span className="text-yellow-300">Aswin 👋</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Typewriter
            words={[
              "a passionate front-end developer.",
              "a React & Tailwind enthusiast.",
              "always learning and building."
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1200}
          />
        </motion.p>

        {/* Short Intro */}
        <p className="text-sm sm:text-base text-white/80 max-w-md mx-auto md:mx-0">
          I love crafting fast and modern web interfaces. Currently looking for front-end roles where I can contribute and grow.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start mt-4">
          <Link
            to="/projects"
            className="bg-white text-purple-600 px-6 py-2 rounded-full font-medium shadow-md hover:bg-purple-100 transition duration-300"
          >
            View My Work
          </Link>

          <a
            href="/aswinthapa_resume.pdf"
            download
            className="border border-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-purple-600 transition duration-300"
          >
            Resume
          </a>
        </div>

        {/* Tech Icons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
          <img src={`${import.meta.env.BASE_URL}icons/react.svg`} alt="React" className="w-8 h-8" title="React" />
          <img src={`${import.meta.env.BASE_URL}icons/tailwind.svg`} alt="Tailwind" className="w-8 h-8" title="Tailwind CSS" />
          <img src={`${import.meta.env.BASE_URL}icons/js.svg`} alt="JavaScript" className="w-8 h-8" title="JavaScript" />
          <img src={`${import.meta.env.BASE_URL}icons/github.svg`} alt="GitHub" className="w-8 h-8" title="GitHub" />
          <img src={`${import.meta.env.BASE_URL}icons/c.svg`} alt="C++" className="w-8 h-8" title="C++" />
        </div>
        
        {/* Current Focus Badge */}
        <span className="inline-block bg-white text-purple-600 px-3 py-1 rounded-full text-xs font-semibold mt-4 shadow-md">
          🔥 Currently working on: Personal Finance Dashboard
        </span>
      </div>

      {/* Right Content - Lottie */}
      <div className="md:w-1/2 mb-10 md:mb-0 z-10">
        <Lottie animationData={devAnimation} loop={true} className="w-full max-w-sm md:max-w-md" />
      </div>

      {/* Background Blobs */}
      <div className="absolute w-96 h-96 bg-purple-300 opacity-20 rounded-full top-[-100px] left-[-100px] blur-3xl z-0"></div>
      <div className="absolute w-64 h-64 bg-blue-300 opacity-10 rounded-full bottom-[-80px] right-[-80px] blur-2xl z-0"></div>
    </section>
  );
};

export default Home;
