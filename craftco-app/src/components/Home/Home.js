import React from 'react';
import SlideShow from './../SlideShow/SlideShow.js';
import { Link } from "react-router-dom";


const Home = () => {

	return (
	<div className="home">
		<SlideShow />
        <h1>Contact Us For a Consultation!</h1>
        <div className="consult-img-div">
          <img src="./p5.jpg" alt="heroimg" />
           <img src="./pone.jpg" alt="heroimg" />
            <img src="./p4.jpg" alt="heroimg" />
        </div> 
        <h1>Your Dream Pergola, Is Just a Click Away!</h1>
          <Link to="/consult" style={{ textDecoration: 'none', color: 'black' }}><button className="button"> Schedule Today! </button></Link>  
          <p> Located in the DFW Area!</p>
          <p> "You show us the land, and well come up with the plan! Its that Simple!" -Chris Rodgers</p>
	</div>
			
		);
}

export default Home;