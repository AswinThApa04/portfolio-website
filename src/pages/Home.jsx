// src/pages/Home.jsx
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import devAnimation from "../assets/anim.json"; 
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white relative overflow-hidden">
      
      {/* Left Content: Text */}
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
      </div>

      {/* Right Content: Lottie Animation */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <Lottie animationData={devAnimation} loop={true} className="w-full max-w-sm md:max-w-md" />
      </div>

      {/* Optional background circle */}
      <div className="absolute w-96 h-96 bg-purple-300 opacity-30 rounded-full top-[-100px] left-[-100px] blur-3xl z-0"></div>
    </section>
  );
};

export default Home;