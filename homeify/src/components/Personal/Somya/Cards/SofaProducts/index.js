import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Sort from "./Sort ";
import "./index.css";
import Checkbox from "./Checkbox";
import ColorSelectModal from "./ColorSelectModal";
import Navbar from "../../../../Main/Navbar/Navbar";
const sofas = [
  {
    Position: 1,
    imgUrl_product_sofas:
      "https://ii2.pepperfry.com/media/catalog/product/a/n/494x544/andres-fabric-2-seater-sofa-in-beige-colour-andres-fabric-2-seater-sofa-in-beige-colour-fl9rrf.jpg",
    name_sofas: "Andres Fabric 2 Seater Sofa In Beige Colour",
    desc_sofas: "Woodsworth from Pepperfry",
    price_sofas: "₹32,999",
  },
  {
    Position: 2,
    imgUrl_product_sofas:
      "https://ii1.pepperfry.com/media/catalog/product/e/l/494x544/elena-fabric-1-seater-sofa-in-wenge-colour-elena-fabric-1-seater-sofa-in-wenge-colour-utju2l.jpg",
    name_sofas: "Elena Fabric 1 Seater Sofa In Wenge Colour",
    desc_sofas: "@home",
    price_sofas: "₹12,400",
  },
  {
    Position: 3,
    imgUrl_product_sofas:
      "https://ii3.pepperfry.com/media/catalog/product/d/a/494x544/daroo-velvet-2-seater-sofa-in-pine-green-colour-daroo-velvet-2-seater-sofa-in-pine-green-colour-iahxqt.jpg",
    name_sofas: "Daroo Velvet 2 Seater Sofa in Pine Green Colour",
    desc_sofas: "Febonic",
    price_sofas: "₹19,593",
  },
  {
    Position: 4,
    imgUrl_product_sofas:
      "https://ii2.pepperfry.com/media/catalog/product/d/a/494x544/daroo-velvet-2-seater-sofa-in-turmeric-yellow-colour-daroo-velvet-2-seater-sofa-in-turmeric-yellow-c-z0txee.jpg",
    name_sofas: "Daroo Velvet 2 Seater Sofa in Turmeric Yellow Colour",
    desc_sofas: "Febonic",
    price_sofas: "₹19,593",
  },
  {
    Position: 5,
    imgUrl_product_sofas:
      "https://ii3.pepperfry.com/media/catalog/product/a/n/494x544/andres-fabric-2-seater-sofa-in-chestnut-brown-colour-andres-fabric-2-seater-sofa-in-chestnut-brown-c-drssh3.jpg",
    name_sofas: "Andres Fabric 2 Seater Sofa In Chestnut Brown Colour",
    desc_sofas: "Woodsworth from Pepperfry",
    price_sofas: "₹32,999",
  },
  {
    Position: 6,
    imgUrl_product_sofas:
      "https://ii3.pepperfry.com/media/catalog/product/m/a/494x544/madison-leatherette-1-seater-sofa-in-black-colour-madison-leatherette-1-seater-sofa-in-black-colour-5ms37j.jpg",
    name_sofas: "Madison Leatherette 1 Seater Sofa in Black Colour",
    desc_sofas: "Trevi Furniture",
    price_sofas: "₹13,499",
  },
  {
    Position: 7,
    imgUrl_product_sofas:
      "https://ii3.pepperfry.com/media/catalog/product/d/i/494x544/diego-fabric-2-seater-sofa-in-garnet-red-colour-diego-fabric-2-seater-sofa-in-garnet-red-colour-zp3txb.jpg",
    name_sofas: "Diego Fabric 2 Seater Sofa In Garnet Red Colour",
    desc_sofas: "Woodsworth from Pepperfry",
    price_sofas: "₹36,999",
  },
  {
    Position: 8,
    imgUrl_product_sofas:
      "https://ii2.pepperfry.com/media/catalog/product/a/n/494x544/andres-fabric-2-seater-sofa-in-ash-grey-colour-andres-fabric-2-seater-sofa-in-ash-grey-colour-mqfga5.jpg",
    name_sofas: "Andres Fabric 2 Seater Sofa In Ash Grey Colour",
    desc_sofas: "Woodsworth from Pepperfry",
    price_sofas: "₹32,999",
  },
  {
    Position: 9,
    imgUrl_product_sofas:
      "https://ii1.pepperfry.com/media/catalog/product/m/i/494x544/miranda-fabric-1-seater-sofa-in-ice-blue-colour-miranda-fabric-1-seater-sofa-in-ice-blue-colour-3fpuun.jpg",
    name_sofas: "Miranda Fabric 1 Seater Sofa In Ice Blue Colour",
    desc_sofas: "Woodsworth from Pepperfry",
    price_sofas: "₹21,999",
  },
  {
    Position: 10,
    imgUrl_product_sofas:
      "https://ii2.pepperfry.com/media/catalog/product/a/n/494x544/andres-fabric-2-seater-sofa-in-sandy-brown-colour-andres-fabric-2-seater-sofa-in-sandy-brown-colour-ffjn62.jpg",
    name_sofas: "Andres Fabric 2 Seater Sofa In Sandy Brown Colour",
    desc_sofas: "Woodsworth from Pepperfry",
    price_sofas: "₹32,999",
  },
  {
    Position: 11,
    imgUrl_product_sofas:
      "https://ii2.pepperfry.com/media/catalog/product/b/u/494x544/bunbury-leather-1-seater-sofa-in-antique-tan-colour-bunbury-leather-1-seater-sofa-in-antique-tan-col-7rkjw8.jpg",
    name_sofas: "Bunbury Leather 1 Seater Sofa In Antique Tan Colour",
    desc_sofas: "Amberville from Pepperfry",
    price_sofas: "₹42,999",
  },
  {
    Position: 12,
    imgUrl_product_sofas:
      "https://ii2.pepperfry.com/media/catalog/product/m/u/494x544/murdock-fabric-2-seater-sofa-in-grey-colour-murdock-fabric-2-seater-sofa-in-grey-colour-fc1crq.jpg",
    name_sofas: "Murdock Fabric 2 Seater Sofa in Grey Colour",
    desc_sofas: "Adorn India",
    price_sofas: "₹16,999",
  },
  {
    Position: 13,
    imgUrl_product_sofas:
      "https://ii1.pepperfry.com/media/catalog/product/m/i/494x544/miranda-fabric-2-seater-sofa-in-camel-yellow-colour-miranda-fabric-2-seater-sofa-in-camel-yellow-col-t7sp3o.jpg",
    name_sofas: "Miranda Fabric 2 Seater Sofa In Camel Yellow Colour",
    desc_sofas: "Woodsworth from Pepperfry",
    price_sofas: "₹31,999",
  },
  {
    Position: 14,
    imgUrl_product_sofas:
      "https://ii2.pepperfry.com/media/catalog/product/v/i/494x544/vito-velvet-2-seater-sofa-in-blush-pink-colour-vito-velvet-2-seater-sofa-in-blush-pink-colour-zetiip.jpg",
    name_sofas: "Vito Velvet 2 Seater Sofa In Blush Pink Colour",
    desc_sofas: "Casacraft from Pepperfry",
    price_sofas: "₹26,999",
  },
  {
    Position: 15,
    imgUrl_product_sofas:
      "https://ii3.pepperfry.com/media/catalog/product/d/a/494x544/daroo-velvet-2-seater-sofa-in-concrete-grey-colour-daroo-velvet-2-seater-sofa-in-concrete-grey-colou-ls5q60.jpg",
    name_sofas: "Daroo Velvet 2 Seater Sofa in Concrete Grey Colour",
    desc_sofas: "Febonic",
    price_sofas: "₹19,593",
  },
  {
    Position: 16,
    imgUrl_product_sofas:
      "https://ii1.pepperfry.com/media/catalog/product/l/a/494x544/ladybug-fabric-1-seater-sofa-in-charcoal-grey-colour-ladybug-fabric-1-seater-sofa-in-charcoal-grey-c-ucem2p.jpg",
    name_sofas: "Ladybug Fabric 1 Seater Sofa in Charcoal Grey Colour",
    desc_sofas: "Febonic",
    price_sofas: "₹18,099",
  },
  {
    Position: 17,
    imgUrl_product_sofas:
      "https://ii1.pepperfry.com/media/catalog/product/m/e/494x544/melaan-fabric-2-seater-sofa-in-coffee-brown-colour-melaan-fabric-2-seater-sofa-in-coffee-brown-colou-rhlebc.jpg",
    name_sofas: "Melaan Fabric 2 Seater Sofa in Coffee Brown Colour",
    desc_sofas: "Febonic",
    price_sofas: "₹19,199",
  },
  {
    Position: 18,
    imgUrl_product_sofas:
      "https://ii1.pepperfry.com/media/catalog/product/b/o/494x544/bonito-velvet-2-seater-sofa-in-royal-blue-colour-bonito-velvet-2-seater-sofa-in-royal-blue-colour-popsfc.jpg",
    name_sofas: "Bonito Velvet 2 Seater Sofa In Royal Blue Colour",
    desc_sofas: "Casacraft from Pepperfry",
    price_sofas: "₹25,999",
  },
  {
    Position: 19,
    imgUrl_product_sofas:
      "https://ii2.pepperfry.com/media/catalog/product/r/i/494x544/ricardo-velvet-2-seater-sofa-in-rust-colour-ricardo-velvet-2-seater-sofa-in-rust-colour-cxwyvu.jpg",
    name_sofas: "Ricardo Velvet 2 Seater Sofa In Rust Colour",
    desc_sofas: "Casacraft from Pepperfry",
    price_sofas: "₹37,999",
  },
  {
    Position: 20,
    imgUrl_product_sofas:
      "https://ii3.pepperfry.com/media/catalog/product/m/a/494x544/marq-fabric-2-seater-sofa-in-sea-green-colour-marq-fabric-2-seater-sofa-in-sea-green-colour-nitkeh.jpg",
    name_sofas: "Marq Fabric 2 Seater Sofa in Sea Green Colour",
    desc_sofas: "Febonic",
    price_sofas: "₹19,199",
  },
];
function Sofas() {
  const [products, setProducts] = useState(sofas);

  const [sortOrder, setSortOrder] = useState(1);

  const [colors, setColors] = useState({});

  const [selectedColor, setSelectedColor] = useState();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (!selectedColor) {
      setProducts(sofas);
      console.log("hiiii");
    } else {
      const filteredSofas = sofas.filter((item) => {
        return getColor(item.name_sofas) === selectedColor;
      });
      setProducts(filteredSofas);
      setProducts(sortProducts(filteredSofas));
    }
  }, [selectedColor]);

  useEffect(() => {
    const options = {};
    sofas.map((item) => {
      let color = getColor(item.name_sofas);
      if (color in options) {
        options[color]++;
      } else {
        options[color] = 1;
      }
    });
    setColors(options);
  }, []);

  function getColor(name) {
    const words = name.split(" ");
    return words[words.length - 2];
  }

  function getIntPrice(item) {
    let price = item.price_sofas;
    price = price.slice(1);
    price = price.replace(",", "");
    return +price;
  }

  function sortProducts(items) {
    let data;
    if (parseInt(sortOrder) == 1) {
      data = [...items.sort((a, b) => getIntPrice(a) - getIntPrice(b))];
    } else {
      data = [...items.sort((a, b) => getIntPrice(b) - getIntPrice(a))];
    }
    return data;
  }

  useEffect(() => {
    if (!selectedColor) {
      setProducts(sortProducts(sofas));
    } else {
      setProducts(sortProducts(products));
    }
  }, [sortOrder]);
  console.log(sofas);
  return (
    <div>
      <Navbar />
      <div>
        <Checkbox />
      </div>
      <div className="sort_filter">
        <Sort
          handleOpen={handleOpen}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
      </div>
      <div className="main_product">
        <ProductList products={products} />
      </div>
      <div>
        <ColorSelectModal
          isOpen={open}
          handleClose={handleClose}
          options={colors}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
    </div>
  );
}

export default Sofas;
