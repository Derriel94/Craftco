import React from 'react';
import './../../App.css';

const SlideShow = () => {

	return (
		<div className="slide-show-container">
			<div className="side-image">
		        <img src="./hammer.png" alt="" className="" />
		    </div>
			<div className="hero-image">
		        <img src="./flowerbed.jpg" alt="" className="" />
		    </div>
			<div className="side-image">
		        <img src="./phillips.png" alt="" className="" />
		    </div>
		</div>
		);
}

export default SlideShow;