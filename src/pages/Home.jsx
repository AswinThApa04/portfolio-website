import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 text-center relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-purple-300 opacity-30 rounded-full top-[-100px] left-[-100px] blur-3xl z-0"></div>
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm <span className="text-yellow-300">Aswin 👋</span>
      </motion.h1>

      <motion.p
        className="max-w-2xl text-lg sm:text-xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
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

      <motion.a
        href="#projects"
        className="bg-white text-purple-600 px-6 py-2 rounded-full font-medium shadow-md hover:bg-purple-100 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Work
      </motion.a>

      {/* Scroll Down Arrow */}
      <motion.div
        className="absolute bottom-10 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a href="#about" className="text-white text-2xl">&#8595;</a>
      </motion.div>
    </section>
  );
};

export default Home;
