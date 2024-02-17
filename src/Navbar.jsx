
import React from "react";
import {  NavLink } from "react-router-dom";
import logo from "./assets/g6pd-shepherd-logo-black-trans.png";

const Navbar = () => {

    return ( 
    
        <div className="flex justify-between items-center h-24  mx-auto px-4">
            <h1 className="text-3xl font-bold text-white"><img className="main-logo" src={logo} alt="Logo" /></h1>
            <ul className="hidden md:flex text-md text-md">
                <NavLink to="/">
                    <li className="p-4">Home</li>
                </NavLink>
                <NavLink to="/about">
                    <li className="p-4">About G6PD</li>
                </NavLink>
            </ul>
        </div>



     );
}
 
export default Navbar;