import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Ayurbot',
    description: 'A personalized Ayurvedic remedy assistant using RAG and LLMs.',
    tech: ['Python', 'Flask', 'FAISS', 'LangChain'],
    github: 'https://github.com/rishikabilla/Ayurbot',
    demo: '',
  },

  {
    title: 'Quiz App',
    description: 'A frontend quiz application built with HTML, CSS, JS.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/rishikabilla/quizify',
    demo: 'https://lnkd.in/g9SYbUeD',
  },
];

const Projects = () => {
  return (
    <section id="Projects" className='bg-gray-900 px-4 py-10 text-white flex flex-col justify-center items-center'>
      <motion.h1 className='text-3xl font-bold text-center text-green-400 mb-10'
      initial={{opacity:0,y:-40}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.6}}>Projects</motion.h1>
        <div className='grid md:grid-cols-2 gap-8'>
        {
          projects.map((project,idx)=>
             <motion.div
             key={idx}
             initial={{opacity:0,y:40}}
             whileInView={{opacity:1,y:0}}
             viewport={{once:true,amount:0.3}}
             transition={{duration:0.6,delay:idx*0.1}}
             className='bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-green-400 transition hover:scale-105'>
             <h3 className='text-xl font-semibold text-green-400 mb-2'>{project.title}</h3>
             <p className='text-sm text-gray-300'>{project.description}</p>
             <div className='text-xs text-gray-400 mb-3'>{project.tech.join(' . ')}</div>
             <div className='flex space-x-2'>
              {project.github&&(
                <a href={project.github} target="_blank" rel="noopener noreferrer" className='hover:text-green-400'><FaGithub size={20}/></a>
              )}
              {project.demo&&(
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className='hover:text-green-400'><FaExternalLinkAlt size={18}></FaExternalLinkAlt></a>
              )}
             </div>
             </motion.div>
          )
        }
        </div>

    </section>
  );
};

export default Projects;
