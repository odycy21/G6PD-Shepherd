
import React, {useState} from "react";
import {  NavLink } from "react-router-dom";
import blackLogo from "./assets/g6pd-shepherd-logo-black-trans.png";
import whiteLogo from "./assets/g6pd-shepherd-logo-white-trans.png";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return ( 
    
        <div className='flex justify-between items-center h-24 mx-auto px-4 navbar'>
               <NavLink to="/">
                    <div className = {nav ? 'invisible' : 'w-full text-2xl text-[#FFFFFF]'}> <img className="main-logo" src={blackLogo} alt="Logo" /></div>
                </NavLink>
            <ul className="hidden md:flex">
                <NavLink to="/">
                    <li className="p-4">Home</li>
                </NavLink>
                <NavLink to="/about">
                    <li className="p-4">About G6PD</li>
                </NavLink>
            </ul>

            <div onClick={handleNav} className="block md:hidden cursor-pointer">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
           
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        
                <ul className="p-4 text-white">
                <NavLink to="/">
                    <div className = {!nav ? 'invisible' : 'w-full'}> <img className="main-logo" src={whiteLogo} alt="Logo" /></div>
                </NavLink>
                    <NavLink to="/">
                        <li className="p-4 border-b border-[#9fc5e8]">Home</li>
                    </NavLink>
                    <NavLink to="/about">
                        <li className="p-4 border-b border-[#9fc5e8]">About G6PD</li>
                    </NavLink>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;