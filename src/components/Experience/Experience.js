import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experienceData = {
  education: [
    {
      id: 1,
      title: 'Bachelor of Science in Computer Science',
      institution: 'Wolkite University',
      period: '2020 - 2024',
      description: 'Graduated with a strong foundation in computer science fundamentals, programming languages, and software development.'
    }
  ],
  certifications: [
    {
      id: 1,
      title: 'Oracle Academy Database Foundations',
      issuer: 'Oracle',
      date: '2023',
      credential: 'View Credential'
    },
    {
      id: 2,
      title: 'Web Security & Bug Bounty',
      issuer: 'Udemy',
      date: '2023',
      credential: 'View Credential'
    },
    {
      id: 3,
      title: 'React - The Complete Guide 2023',
      issuer: 'Udemy',
      date: '2023',
      credential: 'View Credential'
    },
    {
      id: 4,
      title: 'Complete Data Science & Machine Learning',
      issuer: 'Udemy',
      date: '2023',
      credential: 'View Credential'
    }
  ],
  activities: [
    {
      id: 1,
      title: 'School Management System Project',
      role: 'Lead Developer',
      period: '2021',
      description: 'Led the development of a comprehensive school management system using Node.js and React.'
    },
    {
      id: 2,
      title: 'International Competitive Programming Colleagues (ICPC)',
      role: 'Member',
      period: '2022-2023',
      description: 'Participated in competitive programming challenges and improved problem-solving skills.'
    },
    {
      id: 3,
      title: 'University Incubation Center',
      role: 'Active Member',
      period: '2021-2023',
      description: 'Collaborated on various projects and learned web development and teamwork skills.'
    }
  ]
};

const TimelineItem = ({ data, index }) => {
  return (
    <motion.div 
      className="timeline-item"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="timeline-content">
        <h3>{data.title}</h3>
        <h4>{data.institution || data.issuer || data.role}</h4>
        <p className="timeline-period">{data.period || data.date}</p>
        {data.description && <p className="timeline-description">{data.description}</p>}
        {data.credential && (
          <a href="#" className="credential-link">
            <i className="pi pi-external-link"></i>
            {data.credential}
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Experience & Education</h2>

        <div className="timeline-section">
          <h3 className="subsection-title">Education</h3>
          <div className="timeline">
            {experienceData.education.map((item, index) => (
              <TimelineItem key={item.id} data={item} index={index} />
            ))}
          </div>
        </div>

        <div className="timeline-section">
          <h3 className="subsection-title">Activities & Projects</h3>
          <div className="timeline">
            {experienceData.activities.map((item, index) => (
              <TimelineItem key={item.id} data={item} index={index} />
            ))}
          </div>
        </div>

        <div className="certifications-section">
          <h3 className="subsection-title">Certifications</h3>
          <div className="certifications-grid">
            {experienceData.certifications.map((cert) => (
              <motion.div 
                key={cert.id}
                className="certification-card"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h4>{cert.title}</h4>
                <p>{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
                <a href="#" className="cert-link">
                  <i className="pi pi-external-link"></i>
                  View Credential
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
