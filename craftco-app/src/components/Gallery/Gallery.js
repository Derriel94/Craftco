import React from 'react';
import  { galleryImagesList as ImgList }  from './Images.js';
import { Link } from "react-router-dom";

const Gallery = () => {

	//This needs to be improved, created an object and loop thoroguh this muck.
	const buildImgList = () => {
			if (!ImgList) {
				return 	(<div>
	            		    <img alt="galleryImage" src="./pone.jpg" />
	                		<p>Pergola 1!</p>
	            		</div>
	            );
			} else {
				return(
						ImgList.map(img => {
							return(<div>
	            		    	<img alt={img.imageName} src={img.imgUrl} />
	                			<p>{img.imageName}</p>
	            			</div>);
						})
					);
			}
	};
	 
	return (
		<div>
			<h1>Roofing and Custom Design</h1>
			<div className="gallery">
				{buildImgList()}
	        </div>
	        <Link to="/consult" ><button className="button"> Consultation </button></Link>
        </div>
		);
}

export default Gallery;