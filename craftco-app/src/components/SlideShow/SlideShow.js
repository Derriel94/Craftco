import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const SlideShow = () => {

	return (
	<div className="slide-show">
        <Carousel>
                <div>
                    <img alt="slide" src="./pergola1.jpg" />
                </div>
                <div>
                    <img alt="slide" src="./pergola2.jpg"  />
                </div>
                <div>
                    <img alt="slide" src="./roof1.jpg"  />
                </div>
                <div>
                    <img alt="slide" src="./roof2.jpg"  />
                </div>
                <div>
                    <img alt="slide" src="./fullpergola.jpg"  />
                </div>
        </Carousel>
     </div>
		);
}

export default SlideShow;