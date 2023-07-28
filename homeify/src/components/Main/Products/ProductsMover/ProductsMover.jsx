import React from "react";
import ShopCategories from "../Addons/ShopCategories/shopCategories";
import Shopbestseller from "../Addons/shopbestseller/shopbestseller";
import { ChakraProvider } from "@chakra-ui/react";
import CareFor from "../Addons/care_for/Care_for";
import Trends from "../ProductsInterface";
import DiscoverNew from "../Addons/new_launches/dnl";
import Navbar from "../../Navbar/Navbar";

export default function ProductsMover() {
  return (
    <>
      <Navbar />
      <ChakraProvider>
        <div className="category-div1">
          <ShopCategories />
        </div>

        <div className="category-div2">
          <CareFor />
        </div>

        <div className="category-div3">
          <Shopbestseller />
        </div>

        <div className="category-div3">
          <DiscoverNew />
        </div>

        <div className="category-div3">
          <Trends />
        </div>
      </ChakraProvider>
    </>
  );
}
