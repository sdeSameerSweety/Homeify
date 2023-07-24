import React from "react";
import "./all.css";

export default function Arrival() {
  const cardsData = [
    {
      id: 1,
      title: "Jewel Tones Sofas",
      content: "200+ Options, Explore Starting ₹339",
      imgUrl:
        "https://ii3.pepperfry.com/assets/f5f69201-6b26-41f8-b454-74fd0b692b24.jpg",
    },
    {
      id: 2,
      title: "Easy Biophilic Indoor Plants",
      content: "15+ Options, Explore Starting ₹24,000",
      imgUrl:
        "https://ii2.pepperfry.com/assets/d825e5f1-14b5-4d6a-aded-f16add76f1bb.jpg",
    },
    {
      id: 3,
      title: "Calm Nature Cane Furniture",
      content: "200+ Options, Explore Starting ₹339",
      imgUrl:
        "https://ii3.pepperfry.com/assets/2f5ac443-434a-4ad3-85d2-2822dfabf06a.jpg",
    },
    {
      id: 4,
      title: "Comfort Core Sofa Throws",
      content: "200+ Options, Explore Starting ₹339",
      imgUrl:
        "https://ii2.pepperfry.com/assets/386fb01d-d74d-48c0-b9ab-6de6b06f4fd6.jpg",
    },
    {
      id: 5,
      title: "Bold Patterned Bone Inlay",
      content: "15+ Options, Explore Starting ₹24,000",
      imgUrl:
        "https://ii2.pepperfry.com/assets/9f4c2e9c-536d-4d55-8afb-b286c084efbb.jpg",
    },
    {
      id: 6,
      title: "Dramatic Cluster Hanging Lights",
      content: "500+ Options, Explore Starting ₹820",
      imgUrl:
        "https://ii1.pepperfry.com/assets/a3cbd889-31e7-4ff9-ad1a-05e78480f8cf.jpg",
    },
  ];

  return (
    <div className="simp-grd">
      {cardsData.map((item) => {
        return (
          <div className="internal-flx">
            <img src={item.imgUrl} alt="error" />
            <h3>{item.title}</h3>
            <h5>
              {item.content} <span className="arrow">&rarr;</span>
            </h5>
          </div>
        );
      })}
    </div>
  );
}
