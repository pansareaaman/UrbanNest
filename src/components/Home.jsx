import React from "react";
import "../components/home.css";
import Sofa from '../assets/home-sofa.png'
import CardImage1 from '../assets/cardImg1.png'; // Replace with your image path
import CardImage2 from '../assets/cardImg2.png'; // Replace with your image path
import CardImage3 from '../assets/cardImg3.png'; // Replace with your image path
import SofaImage2 from '../assets/Sofa2.png'; // Replace with your image path
import SofaRange1 from '../assets/sofaRange1.png'; // Replace with your image path
import SofaRange2 from '../assets/sofaRange2.png'; // Replace with your image path
import ViewButton from '../assets/Button 2.png'; // Replace with your image path
const Home = () => {
  return (
    <>
    <div className="h-container">
      <div className="h-left"><p>Sleek Comfort for Modern Living.</p></div>
      <div className="h-right"><img src={Sofa} alt="" /></div>
    </div>


    <div className="h2-container">
      <div className="h2-heading">
        <p className="h2-heading-title">Welcome to UrbanNest</p>
        <p className="h2-heading-paragraph">Where Comfort Meets Style. Discover Your Perfect Sofa Today!</p>
      </div>

      <div className="cards-container">
        <div className="card">
          <img src={CardImage1} alt="Card Image 1" />
          <p>LIVING</p>
        </div>
        <div className="card">
          <img src={CardImage2} alt="Card Image 2" />
          <p>DINING</p>
        </div>
        <div className="card">
          <img src={CardImage3} alt="Card Image 3" />
          <p>BEDROOM</p>
        </div>
      </div>

    </div>

    <div className="h3-container">
      <div className="h3-wrapper">
        <div className="h3-image-container">
        <img src={SofaImage2} alt="" />
        </div>
        <div className="h2-heading">
        <p className="h2-heading-title">Our Custom Sofa Range </p>
        <p className="h2-heading-paragraph">From 5 seaters to 10 seaters</p>
      </div>
        

      <div className="cards-container-2">
            <div className="card-2">
              <img src={SofaRange1} alt="Card Image 1" />
            </div>
            <div className="card-2">
              <img src={SofaRange2} alt="Card Image 2" />
            </div>
          </div>

          <div className="view-all-container">
          <img src={ViewButton} alt="Card Image 3" />
          </div>
        </div>

    </div>



    </>
  );
};

export default Home;
