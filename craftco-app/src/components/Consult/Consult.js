import React, { useState } from 'react';


const Consult = () => {
	//Need to replace this with full form
	const [textArea, setTextArea] = useState("");

	const handleSubmit = (e) => {
		alert('Your Message has been sent!')
		e.preventDefault();
	}

	const handleChange = (e) => {
		setTextArea(e.target.value);
	}

	return (
	<div>
	<div className="about-us">
        <h1 className="glow neonText background">Contact Us For a Consultation!</h1>
        <form onSubmit={handleSubmit}>
        	<label>Enter In Your Contact Info and a brief description of your desired Pergola.</label>
        	<div className="textarea"><textarea value={textArea} onChange={handleChange} /></div>
        	<div><input className="button" type="submit" value="Shoot Us a Text!" /></div>	
        </form>
        <div className="contact-card">        	
          <h1 className="f4">Owner & Operator: Chris Rodgers</h1>
          <p> *~* Here at CraftCo Ex. we specialize in happiness and SATISFACTION.
          	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					    proident, sunt in culpa qui officia deserunt mollit anim id est laborum. - CHRIS RODGERS
					</p>
          <p> Located in the DFW Area!</p>
        </div>
      </div>
	</div>
			
		);
}

export default Consult;