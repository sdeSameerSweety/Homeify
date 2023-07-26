import React, { useState } from "react";
// import profile from "../../../Main/Navbar/Profile/profile";
import axios from "axios";

export default function Dummy() {
  const [products, setProducts] = useState({
    categoryName: " ",
    itemName: " ",
    pname: " ",
    pprice: " ",
    pdesc: " ",
    pimg: " ",
    pid: " ",
  });
  const handleSubmit = async (e) => {
    try {
      if (
        products.categoryName.length !== 0 &&
        products.itemName.length !== 0 &&
        products.pname.length !== 0 &&
        products.pprice.length !== 0 &&
        products.pid.length !== 0 &&
        products.pimg.length !== 0 &&
        products.pdesc.length !== 0
      ) {
        const data = await axios.post("/productsFill", products);
        console.log(products);
        console.log("success");
      } else {
        alert("Please fill all the fields");
      }
    } catch (err) {
      console.log("Data not Posted");
    }
  };
  return (
    <div
      style={{
        paddingTop: "10%",
        display: "grid",
        justifyContent: "center",
        gap: "3%",
      }}
    >
      <input
        style={{ border: "2px solid black", padding: "4px 4px" }}
        type="text"
        placeholder="Category Name"
        onChange={(e) => {
          setProducts((prev) => ({ ...prev, categoryName: e.target.value }));
        }}
      />
      <input
        style={{ border: "2px solid black", padding: "4px 4px" }}
        type="text"
        placeholder="Item Name"
        onChange={(e) => {
          setProducts((prev) => ({ ...prev, itemName: e.target.value }));
        }}
      />
      <input
        style={{ border: "2px solid black", padding: "4px 4px" }}
        type="text"
        placeholder="Product Name"
        onChange={(e) => {
          setProducts((prev) => ({ ...prev, pname: e.target.value }));
        }}
      />
      <input
        style={{ border: "2px solid black", padding: "4px 4px" }}
        type="number"
        placeholder="Product Price"
        onChange={(e) => {
          setProducts((prev) => ({ ...prev, pprice: e.target.value }));
        }}
      />
      <input
        style={{ border: "2px solid black", padding: "4px 4px" }}
        type="text"
        placeholder="Product description"
        onChange={(e) => {
          setProducts((prev) => ({ ...prev, pdesc: e.target.value }));
        }}
      />
      <input
        style={{ border: "2px solid black", padding: "4px 4px" }}
        type="text"
        placeholder="Product Image Url"
        onChange={(e) => {
          setProducts((prev) => ({ ...prev, pimg: e.target.value }));
        }}
      />
      <input
        style={{ border: "2px solid black", padding: "4px 4px" }}
        type="number"
        placeholder="Product ID"
        onChange={(e) => {
          setProducts((prev) => ({ ...prev, pid: e.target.value }));
        }}
      />
      <button
        style={{ textAlign: "center", background: "red", color: "black" }}
        onClick={handleSubmit}
      >
        SUBMIT
      </button>
    </div>
  );
}
