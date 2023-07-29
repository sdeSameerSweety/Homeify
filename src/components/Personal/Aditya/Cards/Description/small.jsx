import React from "react";
import "./all.css";

export default function SmallCard() {
  const data = [
    {
      Position: 1,
      imgUrl:
        "https://ii2.pepperfry.com/media/catalog/product/p/r/494x544/premium-macrame-light-brown--set-of-2--cotton-coaster-by-kaahira-premium-macrame-light-brown--set-of-g84caa.jpg",
      title: "Spiral Brown Macrame (Set of 2) Table Coaster",
      price: "₹79",
    },
    {
      Position: 2,
      imgUrl:
        "https://ii2.pepperfry.com/media/catalog/product/m/u/494x544/multicolour-plastic-heavy-duty-cloth-pegs--set-of-12--by-regalo-multicolour-plastic-heavy-duty-cloth-prttxz.jpg",
      title: "Multicolour Plastic Heavy Duty Cloth Pegs (Set of 12) by Regalo",
      price: "₹89",
    },
    {
      Position: 3,
      imgUrl:
        "https://ii1.pepperfry.com/media/catalog/product/s/i/494x544/silver-steel-white-picture-light-by-decorativeray-silver-steel-white-picture-light-by-decorativeray-dyxk4o.jpg",
      title: "Droplet Silver Metal LED Wall Lights by DecorativeRay",
      price: "₹299",
    },
    {
      Position: 4,
      imgUrl:
        "https://ii3.pepperfry.com/media/catalog/product/b/r/494x544/broken-heart-natural-plant-with-white-self-watering-pot-broken-heart-natural-plant-with-white-self-w-ezwxgm.jpg",
      title: "Broken Heart Natural Plant With White Self Watering Pot",
      price: "₹139",
    },
    {
      Position: 5,
      imgUrl:
        "https://ii1.pepperfry.com/media/catalog/product/m/u/494x544/multicolor-chenille-abstract-5-x-7-feet-machine-made-carpet-by-braids-multicolor-chenille-abstract-5-w1prgd.jpg",
      title: "Blue Chenille Abstract 5 x 7 Feet Machine Made Carpet by Braids",
      price: "₹329",
    },
    {
      Position: 6,
      imgUrl:
        "https://ii3.pepperfry.com/media/catalog/product/g/r/494x544/grey-nylon-22-x-55-inches-machine-made-floor-runner-by-status-grey-nylon-22-x-55-inches-machine-made-6nexii.jpg",
      title: "Grey Nylon 22 x 55 Inches Machine Made Floor Runner by Status",
      price: "₹289",
    },
  ];

  return (
    <div className="container">
      <ul className="cards">
        {data.map((item) => {
          return (
            <li className="card">
              <div>
                <h3 className="card-title">
                  <img src={item.imgUrl} alt="error" />
                </h3>
                <div className="card-content">{item.title}</div>
              </div>
              <div className="card-link-wrapper">
                <div className="card-link">{item.price}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
