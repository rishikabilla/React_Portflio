import React,{useState} from 'react'
import {FiX,FiMenu} from 'react-icons/fi'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [menu,setMenu]=useState(false);
    const onMenu=()=>setMenu(!menu)
    const closeMenu=()=>setMenu(false)
    const sections=["About","Projects","Skills","Contact"];

  return (
    <nav className='fixed top-0 w-full bg-black bg-opacity-80 z-40 backdrop-blur-40 shadow-md text-white'>
        <div className='flex max-w-7xl py-4 px-10 justify-between mx-auto'>
            <ul className='hidden md:flex space-x-8 items-center justify-center text-lg'>
                {
                    sections.map((section)=>(
                        <li key={section}><Link
                        to={section}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        spy={true}
                        activeClass='text-green-400'
                        className='cursor-pointer hover:text-green-400'
                        >{section}</Link></li>
                    ))
                }
            </ul>
            <div className='md:hidden'>
               {menu?(<FiX size={22} onClick={closeMenu} role='button' tabIndex={0} className='cursor-pointer hover:text-green-400'/>):(<FiMenu size={22} onClick={onMenu} role='button' tabIndex={0} className='cursor-pointer hover:text-green-400'/>)}
            </div>
        </div>
        {menu && (
            <div className='flex top-0 left-0 fixed flex-col h-screen w-full bg-black bg-opacity-70 px-6 py-4 space-y-4'>
                <div><FiX size={22} onClick={closeMenu} role='button' tabIndex={0} className='cursor-pointer hover:text-green-400'/></div>
                <ul className='space-y-4 text-lg '>
                {
                    sections.map((section)=>(
                        <li key={section}><Link
                        to={section}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        spy={true}
                        onClick={closeMenu}
                        activeClass='text-green-400'
                        className='cursor-pointer hover:text-green-400'
                        >{section}</Link></li>
                    ))
                }
            </ul>
            </div>
         
        )}

    </nav>
  )
}

export default Navbar