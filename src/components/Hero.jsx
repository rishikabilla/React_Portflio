import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

const Hero = () => {
  const links = [
    {
      icon: <FaLinkedin/>,
      url: 'https://www.linkedin.com/in/rishikabilla/',
      name: 'LinkedIn',
    },
    {
      icon: <FaGithub/>,
      url: 'https://github.com/rishikabilla',
      name: 'GitHub',
    },
    {
      icon: <SiLeetcode/>,
      url: 'https://leetcode.com/u/rishikabilla/',
      name: 'LeetCode',
    },
    {
      icon: <SiHackerrank/>,
      url: 'https://www.hackerrank.com/profile/rishika_billa04',
      name: 'HackerRank',
    },
  ];

  return (
    <section
      id="About"
      className="h-screen bg-gray-950 flex flex-col md:flex-row items-center justify-center text-white px-6 md:px-20"
    >
      <motion.img
      className='hidden md:block lg:block h-75 w-70 rounded-full border-6 border-green-400 mb-10'
      src="public/Rishika_img.jpeg"
      alt="Rishika"
      initial={{opacity:0,scale:0.8}}
      animate={{opacity:1,scale:1}}
      transition={{duration:1.3, delay:0.1}}/>
      <motion.div
      initial={{opacity:0,x:50}}
      animate={{opacity:1,x:0}}
      transition={{duration:1.3,delay:0.1}}
      className='md:ml-40'>
        <h1 className='text-3xl md:text-4xl font-bold mb-2'>Hi, I'm <span className='text-green-400'>Rishika</span></h1>
        <p className='text-md md:text-lg text-gray-400 max-w-3xl mb-2'>Aspiring frontend developer with a strong foundation in Python and a passion for clean, responsive web design.</p>
        <div className='flex flex-row space-x-2 mb-4'>
            {links.map(({icon,url,name})=>
            <a key={name} href={url} target='_blank' rel='noopener noreferrer' className='hover:text-green-400 size={15}'>
            <span className='text-xl md:text-2xl' >{icon}</span>
            </a>)}
        </div>
        <a
        href="Rishika_Resume.pdf"
        download
        className='inline-block text-sm md:text-md font-bold tracking-wide border-2 border-green-400 text-green-400 rounded py-2 px-3 hover:bg-green-400 hover:text-black transition duration-300 '>
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
