
import "./shopbest.css";
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
  useColorModeValue
} from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";
import { useState } from "react";

const arrObj = [
  {
    src:
      "./assets/images/sbs1.png",
    head: "Box storage Bed",
    details:
      "1000 + Options, Starting ₹4,439",
    // price: "₹4,999",
    // but1: "Buy Now",
    // but2: "Add to Cart",
    id: 1
  },
  {
    src:
      "./assets/images/sbs2.png",
    head: "3 Door Wardrobes",
    details:
      "120+ Options, Starting ₹12,900",
    // price: "₹4800",
    // but1: "Buy Now",
    // but2: "Add to Cart",
    id: 2
  },
  {
    src:
      "./assets/images/sbs3.png",
    head: "Writing Tables",
    details:
      "140+ Options, Starting ₹2,489",
    // price: "₹2500",
    // but1: "Buy Now",
    // but2: "Add to Cart",
    id: 3
  },
  {
    src:
      "./assets/images/sbs4.png",
    head: "Ergonomic Chairs",
    details:
      "330+ Options, Starting ₹3,790",
    // price: "₹3800",
    // but1: "Buy Now",
    // but2: "Add to Cart",
    id: 4
  },
  {
    src:
      "/assets/images/sbs5.png",
    head: "Book Shelves",
    details:
      "100+ Options, Starting ₹1,520",
    // price: "₹1600",
    // but1: "Buy Now",
    // but2: "Add to Cart",
    id: 5
  },
  {
    src:
      "/assets/images/sbs6.png",
    head: "Shoe Cabinets",
    details:
      "Shoe Cabinets",
    // price: "₹2700",
    // but1: "Buy Now",
    // but2: "Add to Cart",
    id: 6
  }
];

export default function Shopbestseller() {
  const [loading, setLoading] = useState(false);
  const { toggleColorMode } = useColorMode();

  // const c = useColorModeValue("red", "white");

  return (
    <div Classname="flex flex-col gap-2" >
    <h1 id="head">Shop best Seller</h1>
  
      {/* <header>
        <Button variant="ghost" onClick={toggleColorMode}>
          <StarIcon />
        </Button>
      </header> */}
      <Grid
        m="10"
        spacing={4}
        templateColumns={{
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
          xl: "repeat(6,1fr)"
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
            
            <Card maxW="sm" m="2">
              <CardBody>
                <Image src={el.src} alt={el.id} borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size={["sm", "md", "lg", "md"]}>{el.head}</Heading>
                  <Text color={"grey"}>{el.details}</Text>
                  <Text color="blue.600" fontSize="xl">
                    {el.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                {/* <ButtonGroup spacing="2"> */}
                  {/* <Button variant="solid" colorScheme="blue">
                    {el.but1}
                  </Button>
                  <Button variant="ghost" colorScheme="blue">
                    {el.but2}
                  </Button> */}
                {/* </ButtonGroup> */}
              </CardFooter>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
}

// npm i

