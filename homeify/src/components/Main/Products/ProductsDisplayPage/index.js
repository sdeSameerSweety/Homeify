import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Sort from "./Sort ";
import "./index.css";
import Checkbox from "./Checkbox";
import ColorSelectModal from "./ColorSelectModal";
import Navbar from "../../Navbar/Navbar";
import { useLocation } from "react-router-dom";
import axios from "axios";
function ProductsPage() {
  const [state, setState] = useState(false);
  const location = useLocation();
  // console.log(location);
  const [ProductsData, setProductsData] = useState([]);

  async function getProductsData(sendData) {
    // console.log(sendData);
    await axios
      .get(`/products/${sendData.categoryName}/${sendData.itemName}`)
      .then((res) => {
        // console.log(res.data);
        setProductsData(res.data);
        setProducts(res.data);
        if (ProductsData.length !== 0) setState(true);
        console.log("Successfull got data");
      })
      .catch((err) => {
        console.log("Error in Retriving Data");
        console.log(err);
      });
  }

  useEffect(() => {
    const urlData = location.state;
    getProductsData(urlData);
  }, [state]);

  const [products, setProducts] = useState(ProductsData);

  const [sortOrder, setSortOrder] = useState(1);

  const [colors, setColors] = useState({});

  const [selectedColor, setSelectedColor] = useState();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (!selectedColor) {
      setProducts(ProductsData);
      // console.log("hiiii");
    } else {
      const filteredProductsData = ProductsData.filter((item) => {
        return getColor(item.name) === selectedColor;
      });
      setProducts(filteredProductsData);
      setProducts(sortProducts(filteredProductsData));
    }
  }, [selectedColor]);

  useEffect(() => {
    const options = {};
    ProductsData.map((item) => {
      let color = getColor(item.name);
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
    let price = item.price;
    price = price.slice(1);
    price = price.replace(",", "");
    return +price;
  }

  function sortProducts(items) {
    let data;
    if (parseInt(sortOrder) == 1) {
      data = [...items.sort((a, b) => a - b)];
    } else {
      data = [...items.sort((a, b) => b - a)];
    }
    return data;
  }

  useEffect(() => {
    if (!selectedColor) {
      setProducts(sortProducts(ProductsData));
    } else {
      setProducts(sortProducts(products));
    }
  }, [sortOrder]);
  // console.log(ProductsData);
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

export default ProductsPage;
