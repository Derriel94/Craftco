import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {

  const handleHamburgerMenuClick = (e) => {
    const button = document.getElementById("minibutton");
    const nav = document.getElementById("mynav");
    nav.classList.toggle('show');
  }
  
	return (      
		<div className="nav"> 
        <div className="nav-left">
          <div className="logo"><Link to="/" alt="home"style={{ textDecoration: 'none', color: 'black' }}><img src="./logo1.png"/></Link></div> 
        </div>
        <div className="nav-right"> 
          <div><Link to="/gallery" style={{ textDecoration: 'none', color: 'rgba( 255, 22, 22, 1)' }}>Gallery</Link></div>
          <div><Link to="/consult" style={{ textDecoration: 'none', color: 'rgba( 255, 22, 22, 1)' }}>Contact Us</Link></div>
          {/*<button onClick={handleHamburgerMenuClick}id="minibutton" className="minimenu">
            </button>*/}
        </div>      
      </div>
			
		);
}

export default Nav;