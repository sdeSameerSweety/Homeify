import React from "react";
import "./all.css";

export default function Arrival() {
  const cardsData = [
    {
      id: 1,
      title: "The Aakrit Collection",
      content: "Explore Starting ₹13,999",
      imgUrl:
        "https://ii2.pepperfry.com/assets/71178fa9-82fd-4ca2-a2fa-4334c6b6dee9.jpg",
    },
    {
      id: 2,
      title: "Feng Shui Decor",
      content: "Explore Starting ₹83",
      imgUrl:
        "https://ii1.pepperfry.com/assets/005dd2e6-142a-47c0-88f1-c42b59860f57.jpg",
    },
    {
      id: 3,
      title: "The Teakwood Collection",
      content: "Explore Starting ₹12,199",
      imgUrl:
        "https://ii1.pepperfry.com/assets/03436ba5-76fa-46bf-92ad-c50eb908e25e.jpg",
    },
    {
      id: 4,
      title: "Aromatic Diffusers",
      content: "Explore Starting ₹119",
      imgUrl:
        "https://ii2.pepperfry.com/assets/78cdef29-af9f-4900-8d18-fcd00a740b58.jpg",
    },
  ];

  return (
    <div className="arrival-grd">
      {cardsData.map((item) => {
        return (
          <div className="int-arr-flx">
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
