import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t dark:border-gray-700 py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">

        {/* Left Side: Copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Aswin Thapa. All rights reserved.
        </p>

        {/* Right Side: Socials + Email */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/AswinThApa04"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 transition"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/aswin-thapa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 transition"
          >
            <Linkedin size={24} />
          </a>
          <span className="text-sm text-gray-700 dark:text-gray-300">
            Connect with me at:{" "}
            <a
              href="mailto:aswinthapa16@gmail.com"
              className="underline hover:text-indigo-500"
            >
              aswinthapa16@gmail.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
