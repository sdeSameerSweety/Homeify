import React from "react";
import "./all.css";

export default function Collection() {
  const data = [
    {
      id: 1,
      title: "The Dona Collection",
      content: "24+ Options, Explore Starting ₹17,999",
      imgUrl:
        "https://ii2.pepperfry.com/assets/2dda977a-23c0-4715-958f-a715c5a22986.jpg",
    },
    {
      id: 1,
      title: "The Consuel Collection",
      content: "20+ Options, Explore Starting ₹17,100",
      imgUrl:
        "https://ii3.pepperfry.com/assets/cec77cdc-edb9-41c3-88dc-038098a47446.jpg",
    },
    {
      id: 3,
      title: "The Kosmo Artisan by Spacewood",
      content: "17+ Options, Explore Starting ₹32,249",
      imgUrl:
        "https://ii3.pepperfry.com/assets/b744e9cc-5365-40be-bb07-6c51720915a9.jpg",
    },
  ];
  return (
    <div className="collection-grid">
      {data.map((item) => {
        return (
          <div className="int-flx">
            <img src={item.imgUrl} alt="error" />
            <h3>{item.title}</h3>
            <h5> {item.content}</h5>
          </div>
        );
      })}
    </div>
  );
}
