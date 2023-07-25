import React from "react";

export default function SliderCard() {
  const cardsData = [
    {
      id: 1,
      title: "3 Seater Lawson Sofas",
      content: "Plush, Comfortable & Relaxing",
      imgUrl:
        "https://ii2.pepperfry.com/assets/5e346abe-42f1-4523-ab17-6b3808343260.jpg",
    },
    {
      id: 2,
      title: "Box Storage Queen Size Beds",
      content: "Spacious,Versatile & Comfortable",
      imgUrl:
        "https://ii1.pepperfry.com/assets/3dfabfb6-595a-4548-a574-ab16db61beb4.jpg",
    },
    {
      id: 3,
      title: "6 Seater Dining Sets",
      content: "Stylish, Functional & Sociable",
      imgUrl:
        "https://ii1.pepperfry.com/assets/de811227-71f8-49e7-89de-fe70633acf87.jpg",
    },
    {
      id: 4,
      title: "Wall Lamps",
      content: "Contempory, Ambient & Modern",
      imgUrl:
        "https://ii3.pepperfry.com/assets/9a01f1ad-5fca-468c-8e99-751c4f703138.jpg",
    },
    {
      id: 5,
      title: "Relaxing Carpets",
      content: "Soft, Cosy & Easy Maintenance",
      imgUrl:
        "https://ii3.pepperfry.com/assets/890bd3ae-7773-4fba-b9c2-38fbdc46d808.jpg",
    },
    {
      id: 6,
      title: "Modern TV Units",
      content: "Sleek, Space Saving & Practical",
      imgUrl:
        "https://ii2.pepperfry.com/assets/791b1563-9672-4e33-969a-95b5b7e8c297.jpg",
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
              {item.content} <span className="arrow1234">&rarr;</span>
            </h5>
          </div>
        );
      })}
    </div>
  );
}
