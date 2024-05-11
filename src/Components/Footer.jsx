import React from 'react';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className='footercontainer'>
          
                <nav>
                <footer>&#169; 2024 #VANLIFE</footer>
                <Link to="https://github.com/zahrabola/my-scrimba-vanlife-zahra" >  <small className='footersmall'>Zahra Olanrewaju</small></Link>
         
        </nav>
        
              
        </div>
    );
}

export default Footer;
