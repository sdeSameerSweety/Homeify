import * as React from "react";

export default function ActionAreaCollection({ item }) {
  return (
    <div sx={{ maxWidth: 345 }} className="item-card">
      <div className="image-gapper">
        <img height="140" src={item.imgUrl} />
        <div id="collection_font">
          <span style={{ fontWeight: "bold" }}>{item.name}</span>
          <span>{item.desc}</span>
        </div>
      </div>
    </div>
  );
}
