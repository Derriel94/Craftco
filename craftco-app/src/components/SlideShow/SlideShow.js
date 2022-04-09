import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const SlideShow = () => {

	return (
	<div className="slide-show">
        <Carousel>
                <div>
                    <img alt="slide" src="./pone.jpg" />
                    <p className="legend">Pergola 1!</p>
                </div>
                <div>
                    <img alt="slide" src="./p2.jpg"  />
                    <p className="legend">Outside Pergola!</p>
                </div>
                <div>
                    <img alt="slide" src="./p3.jpg"  />
                    <p className="legend">Anywhere youd like!</p>
                </div>
                <div>
                    <img alt="slide" src="./p4.jpg"  />
                    <p className="legend">We love our Job!</p>
                </div>
                <div>
                    <img alt="slide" src="./p5.jpg"  />
                    <p className="legend">Pergolatory!</p>
                </div>
        </Carousel>
     </div>
		);
}

export default SlideShow;