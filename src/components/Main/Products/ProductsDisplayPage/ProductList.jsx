import React from "react";
import {
  Card,
  Image,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.css";
function ProductList({ products }) {
  async function getProductDetails(id) {
    await axios.post("/specificproduct", { id }).then((res) => {
      localStorage.setItem("data", JSON.stringify(res.data[0]));
      navigate("/productdetails");
    });
    //console.log(data[0]);
  }
  const navigate = useNavigate();
  // console.log(products);
  return products.map((item) => {
    return (
      <Card
        className="product_card"
        maxW="60vh"
        maxH="70vh"
        key={item.Position}
      >
        <CardBody>
          <Image
            src={item.imageURL}
            alt="Green double couch with wooden legs"
            // borderRadius="lg"
          />
          <Stack mt="4" spacing="1%" id="stack">
            <Heading id="h" size="md">
              {item.name}
            </Heading>
            <Text id="d">{item.description}</Text>
            <Text id="deal">Today's Deal</Text>
            <div className="view-more">
              <Text color="blue.600" fontSize="xl" id="price">
                ₹{item.price}
              </Text>
              <button
                id="details"
                role="button"
                onClick={() => {
                  localStorage.removeItem("data");
                  getProductDetails(item._id);
                }}
              >
                More Details
              </button>
            </div>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
    );
  });
}
export default ProductList;
