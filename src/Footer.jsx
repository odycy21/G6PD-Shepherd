
import React from "react";
import {  NavLink } from "react-router-dom";

const Footer = () => {

    let currentDate =  new Date().getFullYear();

    return ( 

        <div className="leading-7">
            <div className="footer bottom-0 text-center my-auto text-xs pl-8 pr-8 pb-8 font-semi-bold">
             ©{currentDate} All Rights Reserved - G6PD Shepherd <br />Develop by <NavLink className = "linkColor2" to={"https://bryan-dev.vercel.app/"}>Bryan Osal</NavLink> 
            </div>
        </div>
     );
}
 
export default Footer;