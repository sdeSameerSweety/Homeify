import React, { useState } from "react";
import profile from "../../../Main/Navbar/Profile/profile";
import axios from "axios";

export default function Dummy() {
  const [products, setProducts] = useState({
    categoryName: " ",
    categoryItem: {
      itemName: " ",
      itemProducts: {
        Name: " ",
        price: " ",
        description: " ",
        imageUrl: " ",
        productId: " ",
      },
    },
  });
  var c1 = products.categoryName;
  var c2 = products.categoryItem.itemName;
  var c3 = products.categoryItem.itemProducts.Name;
  var c4 = products.categoryItem.itemProducts.price;
  var c5 = products.categoryItem.itemProducts.description;
  var c6 = products.categoryItem.itemProducts.imageUrl;
  var c7 = products.categoryItem.itemProducts.productId;
  function handleChange(value, type) {
    if (type === "c1") c1 = value;
    else if (type === "c2") c2 = value;
    else if (type === "c3") c3 = value;
    else if (type === "c4") c4 = value;
    else if (type === "c5") c5 = value;
    else if (type === "c6") c6 = value;
    else if (type === "c7") c7 = value;
    setProducts({
      categoryName: c1,
      categoryItem: {
        itemName: c2,
        itemProducts: {
          Name: c3,
          price: c4,
          description: c5,
          imageUrl: c6,
          productId: c7,
        },
      },
    });
  }
  const handleSubmit = async (e) => {
    console.log(products);
    try {
      if (
        products.categoryName &&
        products.categoryItem.itemName &&
        products.categoryItem.itemProducts.Name &&
        products.categoryItem.itemProducts.price &&
        products.categoryItem.itemProducts.description &&
        products.categoryItem.itemProducts.imageUrl &&
        products.categoryItem.itemProducts.productId
      ) {
        const data = await axios.post("/productsFill", { products });
        console.log("success");
      } else {
        alert("Please fill all the fields");
      }
    } catch (err) {
      console.log("Data not Posted");
    }
  };
  return (
    <>
      <input
        style={{ border: "2px solid black", padding: "4px 4px" }}
        type="text"
        placeholder="Category Name"
        onChange={(e) => {
          handleChange(e.target.value, "c1");
        }}
      />
      <input
        style={{ border: "2px solid black", padding: "4px 4px" }}
        type="text"
        placeholder="Item Name"
        onChange={(e) => {
          handleChange(e.target.value, "c2");
        }}
      />
      <input
        style={{ border: "2px solid black", padding: "4px 4px" }}
        type="text"
        placeholder="Product Name"
        onChange={(e) => {
          handleChange(e.target.value, "c3");
        }}
      />
      <input
        style={{ border: "2px solid black", padding: "4px 4px" }}
        type="number"
        placeholder="Product Price"
        onChange={(e) => {
          handleChange(e.target.value, "c4");
        }}
      />
      <input
        style={{ border: "2px solid black", padding: "4px 4px" }}
        type="text"
        placeholder="Product description"
        onChange={(e) => {
          handleChange(e.target.value, "c5");
        }}
      />
      <input
        style={{ border: "2px solid black", padding: "4px 4px" }}
        type="text"
        placeholder="Product Image Url"
        onChange={(e) => {
          handleChange(e.target.value, "c6");
        }}
      />
      <input
        style={{ border: "2px solid black", padding: "4px 4px" }}
        type="number"
        placeholder="Product ID"
        onChange={(e) => {
          handleChange(e.target.value, "c7");
        }}
      />
      <button
        style={{ textAlign: "center", background: "red", color: "black" }}
        onClick={handleSubmit}
      >
        SUBMIT
      </button>
    </>
  );
}
