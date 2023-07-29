import "./dnl.css";
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
import { useState } from "react";

// const arrObj = [
//   {
//     src: "./assets/images/dnl1.png",
//     head: "Chippa Collection by Mudramark",
//     details: "Explore, Starting ₹7,249",
//     // price: "₹4,999",
//     // but1: "Buy Now",
//     // but2: "Add to Cart",
//     id: 1,
//   },
//   {
//     src: "./assets/images/dnl2.png",
//     head: "3 Door Wardrobes",
//     details: "120+ Options, Starting ₹12,900",
//     price: "₹4800",
//     but1: "Buy Now",
//     but2: "Add to Cart",
//     id: 2,
//   },
//   {
//     src: "./assets/images/dnl3.png",
//     head: "Writing Tables",
//     details: "140+ Options, Starting ₹2,489",
//     price: "₹2500",
//     but1: "Buy Now",
//     but2: "Add to Cart",
//     id: 3,
//   },
//   {
//     src: "./assets/images/dnl4.png",
//     head: "Ergonomic Chairs",
//     details: "330+ Options, Starting ₹3,790",
//     // price: "₹3800",
//     // but1: "Buy Now",
//     // but2: "Add to Cart",
//     id: 4,
//   },
// ];

export default function DiscoverNew({ arrObj }) {
  // const [loading, setLoading] = useState(false);
  // const { toggleColorMode } = useColorMode();

  //  const c = useColorModeValue("red", "white");

  return (
    <div className="flex flex-col gap-2">
      <h1 id="head">Discover New Launches</h1>

      {/* <header>
        <Button variant="ghost" onClick={toggleColorMode}>
          <StarIcon />
        </Button>
      </header> */}
      <Grid
        m="10"
        spacing={4}
        templateColumns={{
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(4,1fr)",
        }}
        // {[
        //   "repeat(1,1fr)",
        //   "repeat(2,1fr)",
        //   "repeat(3,1fr)",
        //   "repeat(4,1fr)",
        //   "repeat(5,1fr)"
        // ]}
      >
        {arrObj.map((el) => {
          return (
            <Card maxW="xl" ml="4" mr="4" mb="4" mt="0">
              <CardBody>
                <Image src={el.src} alt={el.id} borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size={["sm", "md", "lg", "md"]}>{el.head}</Heading>
                  <Text color="grey">{el.details}</Text>
                  <Text color="blue.600" fontSize="xl">
                    {el.price}
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
}

// npm i
