import React from 'react';
import SlideShow from './../SlideShow/SlideShow.js';
import './../../App.css';
import { Link } from "react-router-dom";


const Home = () => {
  
  
	return (
	<div className="home">
    <h1>CraftCo Has All You Need!</h1>
		<SlideShow />
    <h1>Newest Build!</h1>
    <h1>Pergola Hammock Setup</h1>
    <div className="new-item-container">
      <img className="new-item" alt="pergolaimg" src="./closeup1.jpg" />
      <img className="new-item" alt="pergolaimg" src="./front.jpg" />
      <img className="new-item" alt="pergolaimg" src="./closeup.jpg" />
    </div>
    <h1>Contact Us For a Consultation!</h1>
    <div className="consult-img-container">
      <div className="consult-img-div">
          <img src="./skystudio.jpg" alt="heroimg" />
          <h1>Decks</h1>
      </div>
       <div className="consult-img-div">
          <img src="./poolpergola.jpg" alt="heroimg" />
          <h1>Roofing</h1>
      </div>
      <div className="consult-img-div">
          <img src="./fullpergola.jpg" alt="heroimg" />
          <h1>Pergolas</h1>
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