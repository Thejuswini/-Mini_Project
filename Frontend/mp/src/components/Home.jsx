import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Styles/home.css";
import { useNavigate } from "react-router-dom";

// ✅ Import Images Correctly
import dog1 from "../assets/dog1.png";
import dog2 from "../assets/dog2.png";
import dog3 from "../assets/dog3.png";
import classification from "../assets/classification.png";
import analysis from "../assets/analysis.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* ✅ Carousel Section */}
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="carousel">
        <div><img src={dog1} alt="Slide 1" /></div>
        <div><img src={dog2} alt="Slide 2" /></div>
        <div><img src={dog3} alt="Slide 3" /></div>
      </Carousel>

      {/* ✅ Feature Tiles Section */}
      <div className="features">
        <div className="feature-card" onClick={() => navigate("/image-classification")}>
          <img src={classification} alt="Image Classification" />
          <h3>Image Classification</h3>
          <p></p>
        </div>

        <div className="feature-card" onClick={() => navigate("/symptoms-classification")}>
          <img src={analysis} alt="Symptoms Classification" />
          <h3>Symptoms Classification</h3>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Home;
