import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
    <div className="App">
      <div className="nav"> 
          <div className="section">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
          </div>
        <div className="nav-left">
          <div className="logo"> CRAFTCO </div> 
        </div>
        <div className="nav-right"> 
          <div>Gallery</div>
          <div>Consultation</div>
        </div>      
      </div>
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
      <div className="about-us">
        <h1 className="glow neonText background">Contact Us For a Consultation!</h1>
        <div className="contact-card">
          <img src="./p2.jpg" className="br-100 h4 w4 dib " alt="heroimg" /> 
          <button className="button"> Schedule Today! </button>
          <h1 className="f4">Owner & Operator: Chris Rodgers</h1>
          <p className="">Phone Number: 4698918404</p>
          <p className="">Email Address: ChrisRodgers@idkgmail.com</p>  
          <p> Located in the DFW Area!</p>
        </div>
      </div>
      <div className="footer">
        <div>
          <div>Contact Us Via Social Media!</div>
          <div>Facebook</div>
          <div>Instagram</div>
          <div>More Coming Soon!</div>
        </div>
        <div className="bottom-section">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>      
      </div>

    </div>
  );
}

export default App;
