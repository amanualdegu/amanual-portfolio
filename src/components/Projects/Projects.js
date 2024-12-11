import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'School Management System',
    description: 'A comprehensive school management system built with Node.js and React. Features include student management, course scheduling, and grade tracking.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    image: '/project1.jpg',
    github: 'https://github.com/yourusername/school-management',
    demo: 'https://school-management-demo.com'
  },
  {
    id: 2,
    title: 'Arduino Web Integration',
    description: 'Final year project integrating web applications with automation systems using Arduino. Controls hardware components through a web interface.',
    technologies: ['Arduino', 'JavaScript', 'WebSockets', 'C++'],
    image: '/project2.jpg',
    github: 'https://github.com/yourusername/arduino-web',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Modern portfolio website built with React, Three.js, and Framer Motion. Features 3D animations and interactive elements.',
    technologies: ['React', 'Three.js', 'Framer Motion', 'CSS3'],
    image: '/project3.jpg',
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://your-portfolio.com'
  }
];

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onClick={() => onClick(project)}
      whileHover={{ scale: 1.05 }}
    >
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
      <div className="project-links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <i className="pi pi-github"></i>
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <i className="pi pi-external-link"></i>
          </a>
        )}
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div 
      className="project-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="project-modal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={e => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>
          <i className="pi pi-times"></i>
        </button>
        <div className="modal-content">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="project-tech">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
          <div className="project-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="pi pi-github"></i>
                View Source
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="pi pi-external-link"></i>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
