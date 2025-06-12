import React from 'react';
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: 'Spotify Clone',
      description: 'A frontend clone of Spotify using React, Tailwind CSS, and Vite.',
      image: '/images/spotify-clone.png',
      githubLink: 'https://github.com/AswinThApa04/spotify',
      demoLink: '',
    },
    {
      title: 'Weather App',
      description: 'Check current weather in any city using OpenWeatherMap API.',
      image: '/images/weather-app.png',
      githubLink: 'https://github.com/AswinThApa04/weather-app',
      demoLink: '',
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
