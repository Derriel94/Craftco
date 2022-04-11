import React from 'react';
import SlideShow from './../SlideShow/SlideShow.js';
import { Link } from "react-router-dom";


const Home = () => {

	return (
	<div>
		<SlideShow />
		<div className="about-us">
        <h1 className="glow neonText background">Contact Us For a Consultation!</h1>
        <div className="contact-card">
          <img src="./p2.jpg" alt="heroimg" /> 
          <Link to="/consult" style={{ textDecoration: 'none', color: 'black' }}><button className="button"> Schedule Today! </button></Link>
          <h1 className="f4">Owner & Operator: Chris Rodgers</h1>
          <p className="">Phone Number: 4698918404</p>
          <p className="">Email Address: ChrisRodgers@idkgmail.com</p>  
          <p> Located in the DFW Area!</p>
        </div>
      </div>
	</div>
			
		);
}

export default Home;