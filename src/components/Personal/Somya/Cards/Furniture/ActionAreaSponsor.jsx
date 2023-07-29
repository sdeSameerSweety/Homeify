import * as React from "react";

export default function ActionAreaSponsor({ item }) {
  return (
    <div sx={{ maxWidth: 345 }} className="item-card" id="sponsor_card">
      <div>
        <img height="140" src={item.imgUrl} />
        <div id="sponsor_font">
          <span style={{ fontWeight: "bold" }}>{item.name}</span>
        </div>
      </div>
    </div>
  );
}
