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
function ProductList({ products }) {
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
            src={item.imgUrl_product_sofas}
            alt="Green double couch with wooden legs"
            // borderRadius="lg"
          />
          <Stack mt="4" spacing="1%" id="stack">
            <Heading id="h" size="md">
              {item.name_sofas}
            </Heading>
            <Text id="d">{item.desc_sofas}</Text>
            <Text id="deal">Today's Deal</Text>
            <Text color="blue.600" fontSize="xl" id="price">
              {item.price_sofas}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
    );
  });
}
export default ProductList;
