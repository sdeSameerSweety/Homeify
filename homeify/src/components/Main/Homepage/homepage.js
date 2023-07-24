import React, { useEffect, useState } from "react";
import "./homepage.css";
import CountDown from "../../Personal/Aditya/Cards/countDown/CountDown";
import SmallCard from "../../Personal/Aditya/Cards/Description/small";

const Homepage = () => {
  return (
    <>
      <div className="main-homepage-div">
        <div className="banner">
          <img src="/assets/images/top_img.jpg" alt="error" />
        </div>

        <div className="div2">
          <img src="/assets/images/show_img1.webp" alt="error" />
          <img src="/assets/images/show_img2.jpg" alt="error" />
          <img src="/assets/images/show_img3.webp" alt="error" />
        </div>

        <div className="ad">
          <img
            id="ad1"
            src="https://ii1.pepperfry.com/assets/7ddfc525-4d18-46cb-bf47-ee3a949b21ea.jpg"
            alt="error"
          />
          <img id="ad2" src="/assets/images/ad_img.webp" alt="error" />
        </div>

        <div className="small-cards">
          <h3>Explore New Deals</h3>
          <div className="count">
            <img
              src="https://ii1.pepperfry.com/assets/w22-timer-icon.svg"
              alt="error"
            />
            <CountDown text="Ending in " />
          </div>
          <SmallCard />
        </div>
      </div>
    </>
  );
};

export default Homepage;
