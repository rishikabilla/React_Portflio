import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Python', 'JavaScript', 'React', 'HTML', 'CSS', 'TailwindCSS',
  'Flask', 'Git', 'GitHub', 'SQL', 'FAISS', 'LangChain',
];

const Skills = () => {
  return (
    <section id="Skills" className="bg-black text-white py-12 px-4 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold text-green-400 mb-8 text-center"
      >
        Skills
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
      >
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-gray-800 text-white py-3 px-4 rounded-md shadow hover:shadow-green-400 transition"
          >
            {skill}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
