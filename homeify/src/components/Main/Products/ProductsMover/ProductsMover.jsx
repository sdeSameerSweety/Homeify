import React, { useEffect, useState } from "react";
import ShopCategories from "../Addons/ShopCategories/shopCategories";
import Shopbestseller from "../Addons/shopbestseller/shopbestseller";
import { ChakraProvider } from "@chakra-ui/react";
import CareFor from "../Addons/care_for/Care_for";
import Trends from "../ProductsInterface";
import DiscoverNew from "../Addons/new_launches/dnl";
import Navbar from "../../Navbar/Navbar";
import Furniture from "./DatasDisplay/furniture.json";
import Appliances from "./DatasDisplay/appliances.json";
import Furnishing from "./DatasDisplay/furnishing.json";
import Home_Decor from "./DatasDisplay/home_decor.json";
import Home_Utilities from "./DatasDisplay/home.json";
import Kitchen from "./DatasDisplay/kitchen.json";
import Lamps from "./DatasDisplay/lamps.json";
import Sofas_Seat from "./DatasDisplay/sofa_seating.json";
import "./productsmover.css";
import { json, useLocation } from "react-router-dom";

const Topimg = {
  furniture: "/assets/images/Top/furniture.avif",
  appliances: "/assets/images/Top/appliances.webp",
  furnishing: "/assets/images/Top/furnishing.webp",
  home: "/assets/images/Top/home.jpg",
  home_decor: "/assets/images/Top/home_decor.webp",
  kitchen: "/assets/images/Top/kitchen.webp",
  lamps: "/assets/images/Top/lamps.avif",
  sofas_seating: "/assets/images/Top/sofas_seating.webp",
};

export default function ProductsMover() {
  const location = useLocation();
  console.log(location);
  const [DataDisplay, setData] = useState({
    json: Furniture,
    top_img: Topimg.furniture,
  });

  // const arrAvail = {
  //   funiture: ["sofas", "chairs", "wardrobes"],
  //   sofa_and_seating: ["recliners", "office_chairs"],
  //   home_decor: ["vases"],
  // };

  const getRef = location.state;
  console.log(getRef);
  useEffect(() => {
    if (getRef !== null) {
      if (getRef === "furniture") {
        setData({ json: Furniture, top_img: Topimg.furniture });
      } else if (getRef === "appliances") {
        setData({ json: Appliances, top_img: Topimg.appliances });
      } else if (getRef === "furnishing") {
        setData({ json: Furnishing, top_img: Topimg.furnishing });
      } else if (getRef === "home") {
        setData({ json: Home_Utilities, top_img: Topimg.home });
      } else if (getRef === "home_decor") {
        setData({ json: Home_Decor, top_img: Topimg.home_decor });
      } else if (getRef === "lamps") {
        setData({ json: Lamps, top_img: Topimg.lamps });
      } else if (getRef === "sofa_seating") {
        setData({ json: Sofas_Seat, top_img: Topimg.sofas_seating });
      } else if (getRef === "kitchen") {
        setData({ json: Kitchen, top_img: Topimg.kitchen });
      } else {
        setData({ json: Furniture, top_img: Topimg.furniture });
      }
    } else {
      setData({ json: Furniture, top_img: Topimg.furniture });
    }
  }, [getRef]);

  return (
    <>
      <Navbar />
      <div className="top_img">
        <img src={DataDisplay.top_img} alt="error" />
      </div>
      <ChakraProvider>
        {getRef === "furniture" ||
        getRef === "sofas_seating" ||
        getRef === "home_decor" ? (
          <>
            <div className="category-div1">
              <ShopCategories
                arrObj={DataDisplay.json.categories}
                cat={getRef}
                upd={location}
              />
            </div>

            <div className="category-div2">
              <CareFor />
            </div>

            <div className="category-div3">
              <Shopbestseller arrObj={DataDisplay.json.div3} />
            </div>

            <div className="category-div3">
              <DiscoverNew arrObj={DataDisplay.json.div4} />
            </div>

            <div className="category-div3">
              <Trends
                data={DataDisplay.json.div5}
                data2={DataDisplay.json.div6}
              />
            </div>
          </>
        ) : (
          <>
            <div className="category-div1">
              <ShopCategories arrObj={DataDisplay.json.categories} />
            </div>

            <div className="category-div2">
              <CareFor />
            </div>

            <div className="category-div3">
              <Shopbestseller arrObj={DataDisplay.json.div3} />
            </div>

            <div className="category-div3">
              <DiscoverNew arrObj={DataDisplay.json.div4} />
            </div>

            <div className="category-div3">
              <Trends
                data={DataDisplay.json.div5}
                data2={DataDisplay.json.div6}
              />
            </div>
          </>
        )}
      </ChakraProvider>
    </>
  );
}
