import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  { id: 1, role: 'Principal Architect', company: 'Aishwarya Architecture Studio', desc: 'Leading sustainable architectural and interior projects globally.' },
  { id: 2, role: 'Senior Architect', company: 'Global Arch Firm', desc: 'Specialized in high-end residential spaces and urban planning.' },
  { id: 3, role: 'Junior Architect', company: 'Creative Build Co.', desc: 'Assisted in commercial real estate development and modern interiors.' },
];

const Experience = () => {
  return (
    <motion.div 
      style={{ paddingTop: '50px', paddingBottom: '100px', minHeight: '80vh' }}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Experience
        </motion.h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '3rem' }}>
          {experienceData.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="glass-box" 
              style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderLeft: '3px solid var(--accent-color)' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 300 }}>{item.role}</h3>
              </div>
              <h4 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 400 }}>{item.company}</h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
