import React, { useState } from 'react';


const Consult = () => {
	//Need to replace this with full form
	const [textArea, setTextArea] = useState("");
	const [firstName , setFirstName] = useState("");
	const [lastName , setLastName] = useState("");
	const [phoneNumber , setPhoneNumber] = useState("");
	const [address , setAddress] = useState("");

	const data = {			
				firstName: firstName,
				lastName: lastName,
				phoneNumber: phoneNumber,
				address: address,
				textArea: textArea,
			};

	const handleSubmit = (e) => {
		fetch('https://craftco-server.herokuapp.com/consult',{
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				data: data,
			})
		})
		.then(response => {
			response.json();
			
		})
		alert('Your Message has been sent!');
	};

	const handleTextAreaChange = (e) => {
		setTextArea(e.target.value);

	}
	const handleFirstNameChange = (e) => {
		setFirstName(e.target.value);
		}

	const handleLastNameChange = (e) => {
		setLastName(e.target.value);
	}

	const handlePhoneNumberChange = (e) => {
		setPhoneNumber(e.target.value);
	}

	const handleAddressChange = (e) => {
		setAddress(e.target.value);
	}




	return (
	<div>
	<div className="about-us">
        <h1>Contact Us For a Consultation!</h1>
        <form onSubmit={handleSubmit}>
        	
        		<div className="">
        			<label className="title">First Name: </label>
        			<input onChange={handleFirstNameChange} className="textbox" type="textbox" placeholder="First Name" value={firstName} />
        			<label className="title"> Last Name: </label>
        			<input onChange={handleLastNameChange} className="textbox" type="textbox" placeholder="Last Name" value={lastName} />
        		</div>
	        	<div className="">
	        		<label className="title"> Phone Number: </label>
	        		<input onChange={handlePhoneNumberChange} className="textbox" type="textbox" placeholder="Phone Number" value={phoneNumber} />
	        	</div>
	        	<div className="">
	        		<label className="title"> Address: </label>
	        		<textarea onChange={handleAddressChange} className="textbox" type="textarea" rows="1" cols="20" placeholder="Address" value={address} />
	        	</div>
	        	<div>
	        	<p className="title" >Please enter In Your Contact Info and
	        	 a brief description of your desired Construction/Design And The Times Your Are You would like us to meet,
	        	 due to high demand our schedule is busy but we will Quickly Respond to you on when we are avaible to meet.</p>
	        		<textarea value={textArea} onChange={handleTextAreaChange} rows="10" cols="60"/>
	        	</div>
	        	<div><input className="button" type="submit" value="Shoot Us a Text!" /></div>	
        </form>
        <div className="contact-card">        	
          <h1 className="title">Owner & Operator: Chris Rodgers</h1>
          <p> *~* Here at CraftCo Ex. we specialize in happiness and SATISFACTION.
          	Therefore We At the moment we are only scheduling Build Appointments for Monday and Tuesday
          	and Consultation from Friday - Saturday. - CHRIS RODGERS
					</p>
          <address> Located in the DFW Area!</address>
        </div>
      </div>
	</div>
			
		);
}

export default Consult;