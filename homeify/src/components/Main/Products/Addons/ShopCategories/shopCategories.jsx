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

const arrObj = [
  {
    src: "./assets/images/soc1.png",
    head: "Chippa Collection by Mudramark",
    id: 1,
  },
  {
    src: "./assets/images/soc2.png",
    head: "Chippa Collection by Mudramark",
    id: 2,
  },
  {
    src: "./assets/images/soc3.png",
    head: "Chippa Collection by Mudramark",
    id: 3,
  },
  {
    src: "./assets/images/soc4.png",
    head: "Chippa Collection by Mudramark",
    id: 4,
  },
  {
    src: "./assets/images/soc5.png",
    head: "Chippa Collection by Mudramark",
    id: 5,
  },
  {
    src: "./assets/images/soc6.png",
    head: "Chippa Collection by Mudramark",
    id: 6,
  },
  {
    src: "./assets/images/soc7.png",
    head: "Chippa Collection by Mudramark",
    id: 7,
  },
  {
    src: "./assets/images/soc8.png",
    head: "Chippa Collection by Mudramark",
    id: 8,
  },
  {
    src: "./assets/images/soc9.png",
    head: "Chippa Collection by Mudramark",
    id: 9,
  },
  {
    src: "./assets/images/soc10.png",
    head: "Chippa Collection by Mudramark",
    id: 10,
  },
  {
    src: "./assets/images/soc11.png",
    head: "Chippa Collection by Mudramark",
    id: 11,
  },
  {
    src: "./assets/images/soc12.png",
    head: "Chippa Collection by Mudramark",
    id: 12,
  },
  {
    src: "./assets/images/soc13.png",
    head: "3 Door Wardrobes",
    id: 13,
  },
  {
    src: "./assets/images/soc14.png",
    head: "Writing Tables",
    id: 14,
  },
  {
    src: "./assets/images/soc15.png",
    head: "Ergonomic Chairs",
    id: 15,
  },
  {
    src: "./assets/images/soc16.png",
    head: "Chippa Collection by Mudramark",
    id: 16,
  },
  {
    src: "./assets/images/soc17.png",
    head: "Ergonomic Chairs",
    id: 17,
  },
  {
    src: "./assets/images/soc18.png",
    head: "Ergonomic Chairs",
    id: 18,
  },
];

export default function ShopCategories() {
  //   const [items,setItems]=useState([]);
  //   const [visible,setVisible]=useState(12);
  //   const showMoreItems=()=>{

  //   }
  //   useEffect(()=>{
  //     fetch("http://localhost:8081")
  //     .then((res)=> res.json())
  //     .then((data)=>setItems(data));

  //  },[]);

  return (
    <div className="flex flex-col gap-2">
      <h1 id="head">Shop By Categories</h1>
      <Grid
        m="10"
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
            <Card maxW="xl" m="4">
              <CardBody>
                <Image src={el.src} alt={el.id} borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size={["sm", "md", "lg", "md"]} color={"grey"}>
                    {el.head}
                  </Heading>
                  <Text color="grey">{el.details}</Text>
                  <Text color="blue.600" fontSize="xl">
                    {/* {el.price} */}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter></CardFooter>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
}
//  export default sbc

// npm i
