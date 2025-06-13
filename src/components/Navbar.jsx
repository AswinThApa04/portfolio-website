import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FileText, Sun, Moon } from "lucide-react"; // using Lucide icons for consistency

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Aswin <span className="text-indigo-500">Portfolio</span>
        </h1>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center gap-4">
          <ul className="flex flex-wrap gap-6 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-500"
                        : "text-gray-700 dark:text-gray-300 hover:text-indigo-500"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Resume Button */}
          <a
            href="/aswinthapa_resume.pdf"
            download
            className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition-all shadow-md"
          >
            <FileText size={16} /> Resume
          </a>

          {/* Icon-only Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 hover:scale-105 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
