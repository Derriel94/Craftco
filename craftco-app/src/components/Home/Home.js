import React from 'react';
import SlideShow from './../SlideShow/SlideShow.js';
import './../../App.css';
import { Link } from "react-router-dom";


const Home = () => {

	return (
	<div className="home">
    <h1>CraftCo Has All You Need!</h1>
		<SlideShow />
        <h1>Contact Us For a Consultation!</h1>
        <div className="consult-img-div">
          <div>
              <img src="./skystudio.jpg" alt="heroimg" />
              <p>Decks</p>
          </div>
           <div>
              <img src="./poolpergola.jpg" alt="heroimg" />
              <p>Roofing</p>
          </div>
          <div>
              <img src="./pergolalight.jpg" alt="heroimg" />
              <p>Pergolas</p>
          </div>
        </div> 
        <h1 className="title">From basic To BOLD We've Got You Coverd!</h1>
          <Link to="/consult" ><button className="button"> Schedule Today! </button></Link>  
          <p> Located in the DFW Area!</p>
          <p> "You show us the land, and well come up with the plan! Its that Simple!" -Chris Rodgers</p>
	</div>
			
		);
}

export default Home;