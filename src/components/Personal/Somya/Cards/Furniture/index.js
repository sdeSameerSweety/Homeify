import React from "react";
import ActionAreaTrends from "./ActionAreaTrends";
import ActionAreaCollection from "./ActionAreaCollection";
import ActionAreaSponsor from "./ActionAreaSponsor";
import "./index.css";
import Navbar from "../../../../Main/Navbar/Navbar";

const data = [
  {
    Position: 1,
    imgUrl:
      "https://ii2.pepperfry.com/assets/a4fb6d50-fd34-47b7-b8a0-3adf4eae6e1f.jpg",
    name: "Jewel Toned 3 Seater Sofas",
    desc: "1000+ Options, Starting ₹12,999",
  },
  {
    Position: 2,
    imgUrl:
      "https://ii2.pepperfry.com/assets/5d6befe2-3e6a-467c-875f-800e2e16f376.jpg",
    name: "Modern TV Consoles",
    desc: "100+ Options, Starting ₹1,360",
  },
  {
    Position: 3,
    imgUrl:
      "https://ii3.pepperfry.com/assets/dd16d27e-b5a7-471f-ab9e-b0a85dd57138.jpg",
    name: "Marble & Glass top Dining Sets",
    desc: "400+ Options, Starting ₹13,999",
  },
  {
    Position: 4,
    imgUrl:
      "https://ii2.pepperfry.com/assets/e84a5983-ae92-4d7f-8f91-e035754e693a.jpg",
    name: "Comfortcore Manual Recliners",
    desc: "170+ Options, Starting ₹13,299",
  },
  {
    Position: 5,
    imgUrl:
      "https://ii3.pepperfry.com/assets/98a0cc75-41d3-48c3-ba73-53e34601c08e.jpg",
    name: "Indoor Wooden Swings",
    desc: "30+ Options, Starting ₹15,999",
  },
  {
    Position: 6,
    imgUrl:
      "https://ii2.pepperfry.com/assets/66b69609-e67d-4f61-a8a5-ce50f3d021ea.jpg",
    name: "Glass Coffee Tables",
    desc: "90+ Options, Starting ₹3,300",
  },
];

const data2 = [
  {
    Position: 1,
    imgUrl:
      "https://ii3.pepperfry.com/assets/f478ee4b-b874-4242-bfd4-394440b7a4ec.jpg",
    name: "Noyes Collection by Amberville",
    desc: "20+ Options, Starting ₹7,749",
  },
  {
    Position: 2,
    imgUrl:
      "https://ii1.pepperfry.com/assets/3b6a4f55-9759-4e69-8c9c-de67e4b80fe9.jpg",
    name: "Flair Collection by Woodsworth",
    desc: "10+ Options, Starting ₹9,749",
  },
  {
    Position: 3,
    imgUrl:
      "https://ii3.pepperfry.com/assets/1c8d8616-2028-49fa-b7d7-e8137c4e9d59.jpg",
    name: "Beds by Durian",
    desc: "50+ Options, Starting ₹20,020",
  },
];
const data3 = [
  {
    Position: 1,
    imgUrl:
      "https://ii3.pepperfry.com/assets/aeba08_1677143286567_Mattress_360_popularbrands_15feb_1.jpg",
    name: "Popular for Beds",
  },
  {
    Position: 2,
    imgUrl:
      "https://ii3.pepperfry.com/assets/539b54_1677143293397_Mattress_360_popularbrands_15feb_2.jpg",
    name: "Popular for Chairs",
  },
  {
    Position: 3,
    imgUrl:
      "https://ii1.pepperfry.com/assets/d4277f_1677143300726_Mattress_360_popularbrands_15feb_3.jpg",
    name: "Popular for Wardrobes",
  },
  {
    Position: 4,
    imgUrl:
      "https://ii1.pepperfry.com/assets/7f9cae_1677155402846_Mattress_360_popularbrands_15feb_4.jpg",
    name: "Popular for Dining",
  },
  {
    Position: 5,
    imgUrl:
      "https://ii3.pepperfry.com/assets/1d99f7_1677143325763_Mattress_360_popularbrands_15feb_5.jpg",
    name: "Popular for Dressing Tables",
  },
];

export default function Trends() {
  return (
    <>
      <Navbar />
      <div className="trend_collection_sponsor">
        <div className="div1fur">
          <h1>Follow Trends In Furniture</h1>
          <div id="trend_div">
            {data.length ? (
              data.map((item) => (
                <ActionAreaTrends key={item.Position} item={item} />
              ))
            ) : (
              <p>Nothing to show</p>
            )}
          </div>
        </div>
        <div className="div2fur">
          <h1>Check Out These Curated Collections</h1>
          <div className="div2fur-grid"><div id="collection-div">
            {data2.length ? (
              data2.map((item) => (
                <ActionAreaCollection key={item.Position} item={item} />
              ))
            ) : (
              <p>Nothing to show</p>
            )}
          </div></div>
        </div>
        <div className="div3fur">
          <h1>Explore Popular Brands</h1>
          <div className="flex justify-center mb-[5%]">
          <div id="sponsor_div" className="flex gap-3">
            {data3.length ? (
              data3.map((item) => (
                <ActionAreaSponsor key={item.Position} item={item} />
              ))
            ) : (
              <p>Nothing to show</p>
            )}
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
