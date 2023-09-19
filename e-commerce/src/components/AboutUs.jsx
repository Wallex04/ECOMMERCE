import React from "react";
import aboutImage1 from "../assets/image/aboutImages-removebg-preview (1).png";
import aboutImage2 from "../assets/image/aboutPhones-removebg-preview.png";
const AboutUs = () => {
  return (
    <div className="aboutWrap">
      <h1
        className="aboutHead"
        style={{ textAlign: "center", paddingTop: "1rem" }}
      >
        About Us
      </h1>
      <div className="about">
        <div className="aboutText">
          <h1>
            Welcome to Wallex <br />
            Telecomm, Where Quality
            <br /> Meets Convenience!
          </h1>
          <p>
            At Our company, we're dedicated to bringing you the
            <br /> finest products and an exceptional shopping experience. Our{" "}
            <br />
            mission is simple: to provide you with top-notch items that
            <br /> enhance your lifestyle, delivered right to your doorstep.
          </p>
        </div>

        <div className="aboutImage">
          <img className="aboutImage1" src={aboutImage1} alt="" />
          <img className="aboutImage2" src={aboutImage2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
