import React, { useEffect, useState } from "react";
import "./homepage.css";
import CountDown from "../../Personal/Aditya/Cards/countDown/CountDown";
import SmallCard from "../../Personal/Aditya/Cards/Description/small";
import SliderCard from "../../Personal/Aditya/Cards/Description/Slidercard";
import OneMoreProduct from "../../Personal/Aditya/Cards/Description/OnemoreProduct";
import Collection from "../../Personal/Aditya/Cards/Description/Collections";
import Arrival from "../../Personal/Aditya/Cards/Description/Arrivals";


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

        <div className="cbigger">
          <h3 id="topic">Explore Most Wanted</h3>
          <SliderCard />
        </div>

        <div className="carousel">
          <h3 id="topic">Share Your Love</h3>
          <div className="car-sz">
            
          </div>
        </div>

        <div className="arrival">
          <h3 id="topic">Discover our Newest Arrivals</h3>
          <Arrival />
        </div>

        <div className="cbigger">
          <h3 id="topic">Follow Home Interior Trends</h3>
          <OneMoreProduct />
        </div>

        <div className="collect-n">
          <h3 id="topic">Check out Curated Collections</h3>
          <Collection />
        </div>
      </div>
    </>
  );
};

export default Homepage;
