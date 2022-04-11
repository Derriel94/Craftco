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
          <p className="">Phone Number: 4698918404</p>
          <p className="">Email Address: ChrisRodgers@idkgmail.com</p>  
          <p> Located in the DFW Area!</p>
        </div>
      </div>
	</div>
			
		);
}

export default Consult;