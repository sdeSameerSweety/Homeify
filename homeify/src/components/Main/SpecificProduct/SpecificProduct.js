import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { UserContext } from "../../../UserContext";
import { Button, Loading } from "@nextui-org/react";
import { Card, Text } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import { RiExchangeFill } from "react-icons/ri";
import { GrCodeSandbox } from "react-icons/gr";
import { useLocation } from "react-router-dom";
import "../ProfileActions/CSS/ProfilePage.css";
import "./SpecificProduct.css";
const SpecificProduct = () => {
  const location = useLocation();
  const { userData } = useContext(UserContext);
  // const id = location.state;
  const productDataLocal = JSON.parse(localStorage.getItem("data"));
  const [productName, setProductName] = useState(productDataLocal.name);
  const [productDescription, setProductDescription] = useState(
    productDataLocal.description
  );
  const [productPrice, setProductPrice] = useState(productDataLocal.price);
  const [productimageURL, setProductimageURL] = useState(
    productDataLocal.imageURL
  );
  // const getProductDetails = async () => {
  //   const { data } = await axios.post("/specificproduct", { id });
  //   //console.log(data[0]);

  //   localStorage.setItem("data", JSON.stringify(data[0]));
  // };

  useEffect(() => {
    // getProductDetails();
    setProductName(productDataLocal.name);
    setProductimageURL(productDataLocal.imageURL);
    setProductPrice(productDataLocal.price);
    setProductDescription(productDataLocal.description);
  }, []);

  // console.log(productName)
  return (
    <>
      <Navbar />
      <div>
        {productDataLocal !== null && (
          <>
            <div className="main-div-here flex justify-center gap-5">
              <div className="flex justify-center">
                <img
                  src={productimageURL}
                  alt="error"
                  className="image h-[60vh] w-[30vw]"
                />
              </div>
              <div className="details-div-1 flex flex-row justify-center gap-20 items-center">
                <div className="details-div-here flex flex-col justify-center gap-7 w-[40vw]">
                  <div>
                    <Card
                      className="card-css"
                      isPressable
                      variant="bordered"
                      css={{
                        width: "auto",
                        height: "auto",
                        borderRadius: "0px",
                      }}
                    >
                      <Card.Body>
                        <Text>
                          <div className="flex flex-col gap-5">
                            <div className="font-ubuntu font-[10px]">
                              Product Details
                            </div>
                            <div className="flex flex-col gap-3">
                              <div className="namediv flex justify-between">
                                <span className="font-ubuntu text-2xl">
                                  {productName}
                                </span>
                              </div>
                              <div className="namediv flex justify-between">
                                <span className="font-ubuntu text-xl text-green-600">
                                  ₹ {productPrice}
                                </span>
                              </div>
                              <div className="namediv flex justify-between">
                                <span>
                                  Product Description - {productDescription}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div>
                    <Card
                      isPressable
                      variant="bordered"
                      css={{
                        width: "auto",
                        height: "auto",
                        borderRadius: "0px",
                      }}
                    >
                      <Card.Body>
                        <Text>
                          <div className="flex flex-col gap-5">
                            <div className="font-ubuntu">
                              Enjoy Seemless services from Pepperfry
                            </div>
                            <div className=" flex flex-col gap-3">
                              <div className="delivery-services flex justify-between">
                                <div className="font-ubuntu flex justify-center items-center">
                                  <div>
                                    <TbTruckDelivery className="icon-here h-[5vh] w-[5vw]" />
                                  </div>
                                  <div>Fast Delivery</div>
                                </div>
                                <div className="font-ubuntu flex justify-center items-center">
                                  <div>
                                    <RiExchangeFill className="icon-here h-[5vh] w-[5vw]" />
                                  </div>
                                  <div>7 days Exchange policy</div>
                                </div>
                                <div className="font-ubuntu flex justify-center items-center">
                                  <div>
                                    <GrCodeSandbox className="icon-here h-[5vh] w-[5vw]" />
                                  </div>
                                  <div>Cash on Delivery</div>
                                </div>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-ubuntu"></span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-ubuntu"></span>
                              </div>
                            </div>
                          </div>
                          <div className="add-view-div button-div-here flex justify-end gap-2">
                            <div>
                              <Link to="#">
                                <Button
                                  shadow
                                  auto
                                  css={{
                                    backgroundColor: "#FF7035",
                                    color: "white",
                                    boxShadow: "none",
                                    border: "2px solid #FF7035",
                                    borderRadius: "0px",
                                  }}
                                >
                                  Buy Now
                                </Button>
                              </Link>
                            </div>
                            <div>
                              <Link to="#">
                                <Button
                                  shadow
                                  auto
                                  css={{
                                    backgroundColor: "white",
                                    color: "#FF7035",
                                    boxShadow: "none",
                                    border: "2px solid #FF7035",
                                    borderRadius: "0px",
                                  }}
                                >
                                  Add to Cart
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {productDataLocal === null && (
          <>
            <div className="w-[100vw] h-[100vh] flex justify-center items-center">
              <Button
                disabled
                auto
                bordered
                size={45}
                css={{ px: "$13", border: "none" }}
              >
                <Loading size="xl" />
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SpecificProduct;
