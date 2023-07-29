// import  {useState,useEffect} from 'react'
import React from "react";
import "./sbc.css";
import {
  Grid,
  Heading,
  Text,
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Divider,
  ButtonGroup,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// const arrObj = [
//   {
//     id: 1,
//     src: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_1.jpg",
//     head: "Sofas",
//   },
//   {
//     id: 2,
//     src: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_2.jpg",
//     head: "Sectional Sofas",
//   },
//   {
//     id: 3,
//     src: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_3.jpg",
//     head: "Sofa Cum Beds",
//   },
//   {
//     id: 4,
//     src: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_4.jpg",
//     head: "Futons",
//   },
//   {
//     id: 5,
//     src: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_5.jpg",
//     head: "Futons",
//   },
//   {
//     id: 6,
//     src: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_6.jpg",
//     head: "Bean Bags",
//   },
//   {
//     id: 7,
//     src: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_7.jpg",
//     head: "Recliners",
//   },
//   {
//     id: 8,
//     src: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_8.jpg",
//     head: "Sofa Chairs",
//   },
//   {
//     id: 9,
//     src: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_9.jpg",
//     head: "Settees & Benches",
//   },
//   {
//     id: 10,
//     src: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_10.jpg",
//     head: "Ottomans",
//   },
//   {
//     id: 11,
//     src: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_11.jpg",
//     head: "Chairs",
//   },
//   {
//     id: 12,
//     src: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_12.jpg",
//     head: "Gaming Chairs",
//   },
//   {
//     id: 13,
//     src: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_13.jpg",
//     head: "Stools & Pouffes",
//   },
//   {
//     id: 14,
//     src: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_14.jpg",
//     head: "Shoe Racks",
//   },
//   {
//     id: 15,
//     src: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_15.jpg",
//     head: "Centre Tables",
//   },
//   {
//     id: 16,
//     src: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_16.jpg",
//     head: "Side Tables",
//   },
//   {
//     id: 17,
//     src: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_17.jpg",
//     head: "TV & Media Units",
//   },
//   {
//     id: 18,
//     src: "https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_18.jpg",
//     head: "Cabinets & Sideboards",
//   },
// ];

export default function ShopCategories({ arrObj, cat, upd }) {
  const navigate = useNavigate();
  //   const [items,setItems]=useState([]);
  //   const [visible,setVisible]=useState(12);
  //   const showMoreItems=()=>{

  //   }
  //   useEffect(()=>{
  //     fetch("http://localhost:8081")
  //     .then((res)=> res.json())
  //     .then((data)=>setItems(data));

  //  },[]);
  // const arrObj = arr.categories;
  const handleItemClick = (e) => {
    if (cat !== null) {
      if (cat === "furniture") {
        navigate("/products", {
          state: {
            categoryName: "furniture",
            itemName: "sofas",
          },
        });
      } else if (cat === "sofas_seating") {
        navigate("/products", {
          state: {
            categoryName: "sofas_and_seating",
            itemName: "recliner",
          },
        });
      } else if (cat === "home_decor") {
        navigate("/products", {
          state: {
            categoryName: "home_decor",
            itemName: "vases",
          },
        });
      }
    } else {
      e.preventDefault();
    }
  };
  const [cate, setCate] = useState(true);
  useState(() => {
    setCate(true);
  }, [upd]);
  return (
    <div className="flex flex-col gap-2">
      <h1 id="head">Shop By Categories</h1>
      {cate ? (
        <>
          <Grid
            m="3"
            mt="1"
            spacing={4}
            templateColumns={{
              sm: "repeat(2,1fr)",
              md: "repeat(4,1fr)",
              lg: "repeat(5,1fr)",
              xl: "repeat(6,1fr)",
            }}
          >
            {arrObj.slice(0, 9).map((el) => {
              return (
                <Card maxW="xl" m="4" onClick={(e) => handleItemClick(e)}>
                  <CardBody>
                    <Image
                      src={el.src}
                      alt={el.id}
                      borderRadius="lg"
                      width="100%"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading
                        size={{ sm: "10px", md: "8px", lg: "5px", xl: "3px" }}
                        color={"grey"}
                      >
                        {el.head}
                      </Heading>
                    </Stack>
                  </CardBody>
                </Card>
              );
            })}
            <Heading
              size={{ sm: "15px", md: "12px", lg: "10px", xl: "8px" }}
              color={"red"}
              sx={{
                display: "flex",
                flexDirection: "column-reverse",
                paddingBottom: "55%",
                paddingLeft: "50%",
              }}
              role="button"
              onClick={() => setCate(false)}
            >
              View All Categories &rarr;
            </Heading>
          </Grid>
        </>
      ) : (
        <>
          <Grid
            m="3"
            mt="1"
            spacing={4}
            templateColumns={{
              sm: "repeat(2,1fr)",
              md: "repeat(4,1fr)",
              lg: "repeat(5,1fr)",
              xl: "repeat(6,1fr)",
            }}
          >
            {arrObj.map((el) => {
              return (
                <Card maxW="xl" m="4" onClick={(e) => handleItemClick(e)}>
                  <CardBody>
                    <Image
                      src={el.src}
                      alt={el.id}
                      borderRadius="lg"
                      width="100%"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading
                        size={{ sm: "10px", md: "8px", lg: "5px", xl: "3px" }}
                        color={"grey"}
                      >
                        {el.head}
                      </Heading>
                    </Stack>
                  </CardBody>
                </Card>
              );
            })}
          </Grid>
        </>
      )}
    </div>
  );
}
//  export default sbc

// npm i
