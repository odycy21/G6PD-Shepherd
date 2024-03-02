import React from "react";


const Footer = () => {

    let currentDate =  new Date().getFullYear();

    return ( 
            <div className="footer text-center my-auto text-xs pl-8 pr-8 pb-8 font-semi-bold">
             ©{currentDate} - Develop by Bryan Osal
            </div>
     );
}
 
export default Footer;