import React, {useEffect, useState, Nan, Fragment} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { Routes, Route, NavLink } from "react-router-dom";

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }


    return ( 
        <div className='flex justify-between items-center h-24 max-w-[2xl] mx-auto px-4 text-white'>
        <NavLink to="/">
            <div className = {nav ? 'invisible' : 'w-full text-2xl text-[#FFFFFF]'}> <img className="main-logo" src={""} alt="Logo" /></div>
        </NavLink>
        <ul className="hidden md:flex text-md text-sm">
        <NavLink to="/"> 
            <li className="p-4">Home</li> 
        </NavLink>
      
            <li className=" px-4 py-1 ml-3 my-3 w-[100%] h-[28px] border border-b-4 border-white rounded-sm font-normal text-white text-center text-xs  hover:bg-[#733f1db3]">
                 <a target="_blank" size= {1} href="https://drive.google.com/file/d/1K726PeSVKPndvcidrOhE1nniPR4JDFmx/view?usp=sharing">Resume</a>
            </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <div className = {nav ? 'fixed left-0 top-0 w-[88%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-700 z-50': 'fixed left-[-100%]'}>
        <NavLink to="/">    
        <div className="pt-5"> <img className="main-logo" src={""} alt="Logo" /></div>
        </NavLink>
        
            <ul className="uppercase p-4">
                <NavLink to="/" onClick={handleNav}> 
                    <li className="p-4 border-b border-gray-600">Home</li>
                </NavLink>
                

                <div className="border-b border-gray-600">
                    <li className=" px-4 py-1 ml-3 my-3 w-[28%] h-[28px] border border-b-4 border-white rounded-sm font-normal text-white text-center text-xs  hover:bg-[#733f1db3">
                        <a target="_blank" size= {1} href="https://drive.google.com/file/d/1K726PeSVKPndvcidrOhE1nniPR4JDFmx/view?usp=sharing">Resume</a>
                    </li>
                </div>
            </ul>
        </div>
        </div>

     );
}
 
export default Navbar;