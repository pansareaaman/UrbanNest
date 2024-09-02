import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../components/home.css";
import Sofa from "../assets/home-sofa.png";
import CardImage1 from "../assets/cardImg1.png";
import CardImage2 from "../assets/cardImg2.png";
import CardImage3 from "../assets/cardImg3.png";
import SofaImage2 from "../assets/Sofa2.png";
import SofaRange1 from "../assets/sofaRange3.png";
import SofaRange2 from "../assets/sofaRange2.png";
import ViewButton from "../assets/Button 2.png";
import Carousel from "./Carousel";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
      once: false, // Keep animations running on scroll
    });
  }, []);
  useEffect(() => {
    AOS.init({
      once: false,
      // disable: "phone",
      duration: 900,
      easing: "ease-out-cubic",
      once: false, // Keep animations running on scroll
    });
  }, []);

  const handleViewAllClick = () => {
    navigate("/products");
  };

  return (
    <>
      <div className="h-container">
        <div className="h-left" >
          <p>Sleek Comfort for Modern Living.</p>
        </div>
        <div className="h-right" data-aos="fade-left">
          <img src={Sofa} alt="Sofa" />
        </div>
      </div>

      <div className="h2-container" >
        <div className="h2-heading" data-aos="fade-up">
          <p className="h2-heading-title">Welcome to UrbanNest</p>
          <p className="h2-heading-paragraph">
            Where Comfort Meets Style. Discover Your Perfect Sofa Today!
          </p>
        </div>

        <div className="cards-container">
          <div className="card" data-aos="fade-up" data-aos-delay="100">
            <img src={CardImage1} alt="Living Room" />
            <p>LIVING</p>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="200">
            <img src={CardImage2} alt="Dining Room" />
            <p>DINING</p>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="300">
            <img src={CardImage3} alt="Bedroom" />
            <p>BEDROOM</p>
          </div>
        </div>
      </div>

      <div className="h3-container" >
        <div className="h3-wrapper">
          <div className="h3-image-container" data-aos="fade-right">
            <img src={SofaImage2} alt="Custom Sofa Range" />
          </div>
          <div className="h2-heading" data-aos="fade-left">
            <p className="h2-heading-title">Our Custom Sofa Range</p>
            <p className="h2-heading-paragraph">From 5 seaters to 10 seaters</p>
          </div>

          <div className="cards-container-2">
            <div className="card-2" id="range-1" data-aos="fade-up">
              <img src={SofaRange1} alt="Sofa Range 1" />
            </div>
            <div className="card-2" id="range-2" data-aos="fade-up" data-aos-delay="100">
              <img src={SofaRange2} alt="Sofa Range 2" />
            </div>
          </div>

          <div className="view-all-container" data-aos="fade-up">
        <img
          src={ViewButton}
          alt="View All"
          onClick={handleViewAllClick}
          style={{ cursor: "pointer" }}
        />
      </div>
        </div>
      </div>

      <div className="h4-container" >
      <div className="horizontal-row-wrapper" data-aos="fade-up">
            <div className="horizontal-row"></div>
          </div>
        <div className="h4-heading" data-aos="fade-up">
          <p className="h4-heading-title">Solo Seat Wonders</p>
          <p className="h4-heading-paragraph">
            Unmatched comfort and style in every seat.
          </p>
        </div>
        <Carousel />
        <div className="horizontal-row-wrapper2" >
          <div className="horizontal-row2"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
