import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              As a 2024 Computer Science graduate, my journey in technology began with
              a childhood fascination with electronics. This early interest evolved into
              a deep passion for programming when I created my first calculator using
              HTML, CSS, and JavaScript.
            </p>
            <p>
              At Wolkite University, I leveraged the 24/7 internet access to extensively
              use platforms like Udemy and Coursera, embracing video-based learning and
              hands-on exercises. My university experience was enriched by participation
              in the incubation center and International Competitive Programming
              Colleagues (ICPC).
            </p>
            <p>
              A significant milestone was working on a school management system project
              in 2021, using Node.js and React. My final-year project involved
              integrating web applications with automation systems using Arduino,
              showcasing my ability to bridge web development and electronics.
            </p>
          </div>
          <motion.div 
            className="about-stats"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="stat-item">
              <h3>4+</h3>
              <p>Years of Coding</p>
            </div>
            <div className="stat-item">
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>8+</h3>
              <p>Technologies</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
