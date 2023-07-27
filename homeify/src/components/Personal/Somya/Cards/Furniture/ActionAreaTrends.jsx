import * as React from "react";

export default function ActionAreaTrends({ item }) {
  return (
    <div className="item-card">
      <div>
        <img height="140" src={item.imgUrl} />
        <div id="trend_font">
          <span style={{ fontWeight: "bold" }}>{item.name}</span>
          <span>{item.desc}</span>
        </div>
      </div>
    </div>
  );
}
