import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { ChakraProvider, useToast } from "@chakra-ui/react";
import { UserContext } from "../../../UserContext";
import { Button, Loading } from "@nextui-org/react";
import { Card, Text } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import { RiExchangeFill } from "react-icons/ri";
import { GrCodeSandbox } from "react-icons/gr";
import { useLocation } from "react-router-dom";
import BlurryLogin from "../Authentication/BlurryLogin/BlurryLogin";
import "../ProfileActions/CSS/ProfilePage.css";
import "./SpecificProduct.css";
import Login from "../Authentication/Login/Login";
import axios from "axios";
const SpecificProduct = () => {
  const location = useLocation();
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
  const [userId, setUserId] = useState("");
  const [productId, setProductId] = useState("");
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  const [redirect, setRedirect] = useState(true);
  // const getProductDetails = async () => {
  //   const { data } = await axios.post("/specificproduct", { id });
  //   //console.log(data[0]);

  //   localStorage.setItem("data", JSON.stringify(data[0]));
  // };
  const toast = useToast();
  useEffect(() => {
    async function getProfileData() {
      const data = await axios.get("/profiledata").then((res) => {
        if (res.data !== null) {
          const resdata = res.data;
          setUserId(resdata.userId);
          console.log(userId);
        }
      });
    }
    getProfileData();
    setProductName(productDataLocal.name);
    setProductimageURL(productDataLocal.imageURL);
    setProductPrice(productDataLocal.price);
    setProductDescription(productDataLocal.description);
    setProductId(productDataLocal._id);
  }, []);
  async function handleCart() {
    console.log("inside function");
    if (userId.length === 0) {
      setCheck(true);
    } else {
      if (userId) {
        console.log("added");
        setRedirect(false);
        const cartdata = await axios
          .post("/addtocart", { userId, productId })
          .then((res) => {
            console.log("success");
          });
        toast({
          title: "Item Added.",
          description: "We have kept your item safe in our cart !.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        const cartData2 = await axios
          .post("/cartpage", { userId })
          .then((res) => {
            console.log(res.data);
            localStorage.setItem("cartArray", JSON.stringify(res.data));
          });
      } else {
        console.log("login first");
        setRedirect(true);
      }
    }
  }

  async function handleBuy() {
    if (userId.length === 0) {
      setCheck(true);
    } else {
      const data = await axios
        .post("/buyNow", {
          userId: userId,
          productId: productId,
          productQuantity: 1,
        })
        .then((res) => {
          console.log(res.data);
        });
      navigate("/checkout");
    }
  }
  return (
    <>
      <ChakraProvider>
        <Navbar />
        {check ? <BlurryLogin pid={productId} /> : <div></div>}
        <div
          onMouseOver={() => {
            setCheck(false);
          }}
        >
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
                                  onPress={() => {
                                    handleBuy();
                                  }}
                                >
                                  Buy Now
                                </Button>
                              </div>
                              <div>
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
                                  onClick={handleCart}
                                >
                                  Add to Cart
                                </Button>
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
      </ChakraProvider>
    </>
  );
};

export default SpecificProduct;
