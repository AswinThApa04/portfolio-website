import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Spotify Clone",
      description: "A frontend clone of Spotify using React, Tailwind CSS, and Vite.",
      image: "/spotify-clone.png",
      githubLink: "https://github.com/AswinThApa04/spotify",
    },
    {
      title: "Weather App",
      description: "Check current weather in any city using OpenWeatherMap API.",
      image: "/weather-app.png",
      githubLink: "https://github.com/AswinThApa04/weather-app",
    },
    {
      title: 'Bank Account System',
      description: 'C++ OOP-based mini project simulating a banking system with account features.',
      image: '/c_bank.png',
      githubLink: 'https://github.com/AswinThApa04/Bank-Account-System',
    },
    {
      title: 'IPL 2022 Data Visualizer',
      description: 'Python project that visualizes IPL 2022 data using pandas and matplotlib.',
      image: '/match_winner.png',
      githubLink: 'https://github.com/AswinThApa04/IPL-2022-Data-Visualizer',
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-16 bg-gradient-to-b from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
          My Projects
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
