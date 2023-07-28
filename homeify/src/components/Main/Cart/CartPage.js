import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Card, Text } from "@nextui-org/react";
import { height } from "@mui/system";
import { Button, Loading } from "@nextui-org/react";
import { LuEdit } from "react-icons/lu";
import "../ProfileActions/CSS/ProfilePage.css";
import { UserContext } from "../../../UserContext";
import { BiError } from "react-icons/bi";
import axios from "axios";
import { Link, Navigate, redirect } from "react-router-dom";
import {BsCartCheckFill} from "react-icons/bs";
import "./CartPage.css";
const CartPage = (props) => {
  const productDataLocal = JSON.parse(localStorage.getItem("cartArray"));
  console.log(productDataLocal);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState(
    ''
  );
  const [productPrice, setProductPrice] = useState('');
  const [productimageURL, setProductimageURL] = useState(
    ''
  );
  const { userData, setUserData } = useContext(UserContext);
  const [addressAdded, setAddressAdded] = useState(false);
  const [paymentAdded, setPaymentAdded] = useState(false);
  const [score, setScore] = useState(50);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState([]);
  const [payment, setPayment] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [lengthAddress, setLengthAddress] = useState(0);
  const [paymentLength, setPaymentLength] = useState(0);
  const [latestUserData, setLatestUserData] = useState();
  const [productsArray, setProductsArray] = useState([]);
  const [cartData, setCartData] = useState("");
  const [userId, setUserId] = useState("");
  const [state, setState] = useState(false);
  async function getCartData() {
    console.log(userId);
    if (userId) {
      const cart = await axios.post("/cartpage", { userId }).then((res) => {
        setCartData(res.data);
        localStorage.setItem("cartArray", JSON.stringify(res.data));
      });
    }
  }

  useEffect(() => {
    async function getUserData() {
      const data = await axios.get("/profiledata").then(({ data }) => {
        setState(true);
        setLatestUserData(data);
        setRedirect(false);
        console.log(redirect);
        if (data) {
          setName(data.name);
          setEmail(data.email);
          setPhone(data.phone);
          setAddress(data.address);
          setPayment(data.paymentInfo);
          setUserId(data.userId);
          getCartData();
          try {
            if (address !== undefined) {
              if (address !== null && address.length !== 0) {
                setAddressAdded(true);
                setLengthAddress(address.length);
              }
            }
            if (payment !== undefined) {
              if (payment !== null && payment.length !== 0) {
                setPaymentAdded(true);
                setPaymentLength(payment.length);
              }
            }
          } catch (error) {
            console.log(error);
          }
        } else {
          setRedirect(true);
        }
      });
    }
    getUserData();
  }, [state]);

  const [buffer, setBuffer] = useState(true);
  const buffering = () => {
    setTimeout(() => {
      setBuffer(false);
    }, 1000);
  };
  useEffect(() => {
    buffering();
    const scoreGenrator = () => {
      if (paymentAdded && addressAdded) {
        if (score <= 100) {
          setScore(score + 50);
          //console.log("both if")
        }
      } else if (paymentAdded || addressAdded) {
        if (score <= 100) {
          setScore(score + 25);
          //console.log("either if")
        }
      }
    };
    scoreGenrator();
  }, [addressAdded, paymentAdded]);
  const ProductDataLocalMap=productDataLocal.ProductsFinalArray;
  const productMap=productDataLocal.products;
  return (
    <>
      <Navbar />
      {userData !== null && (
        <div className="main-div-here flex flex-row justify-evenly">
          {buffer ? (
            <>
              <div className="w-[80vw] flex justify-center">
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
          ) : (
            <>
              <div className="details-div1-here flex flex-row justify-center gap-20 items-center">
                <div className="flex flex-col justify-center gap-7 mt-[10px] w-[67vw]">
                  <div className="flex justify-center items-center">
                    <BsCartCheckFill fill="#FF7035" className="h-[5vh] w-[4vw]"/>
                    <div className="font-ubuntu text-xl">Cart</div>
                  </div>
                  <div>
                    {productDataLocal && (
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
                            {ProductDataLocalMap.map((product,index) => {
                              return (
                                <>
                                  <div className="container-product flex justify-between m-[2vw] items-center">
                                    <div>
                                      <img
                                        src={product.imageURL}
                                        alt="err"
                                        className="img-div h-[20vh] w-[10vw]"
                                      />
                                    </div>
                                    <div className="font-ubuntu flex flex-col justify-end items-end gap-5">
                                      <div>{product.name}</div>
                                      <div className="text-xl text-green-600">
                                        ₹ {product.price}
                                      </div>
                                      <div className="font-ubuntu">
                                        Quantity = {productMap[index].productQuantity}
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
                                        >
                                          Remove
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              );
                            })}
                          </Text>
                        </Card.Body>
                      </Card>
                    )}
                    {!productDataLocal && (
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
                            <div className=" flex flex-col gap-5">
                              <div className="font-ubuntu">Cart Empty</div>
                            </div>
                            <div className="button-div flex justify-end gap-2">
                              <Link to="/editaddress"></Link>
                            </div>
                          </Text>
                        </Card.Body>
                      </Card>
                    )}
                  </div>
                  <div className="flex justify-center items-center mb-[2vh]">
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
                      >
                        Proceed to Checkout
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
      {userData === null && (
        <div className="flex flex-col h-[60vh] w-[100vw] justify-center items-center">
          <div className="flex justify-center">
            <BiError className="h-[50vh] w-[50vw]" fill="red" />
          </div>
          <div className="flex justify-center font-ubuntu text-3xl">
            Please Login Before to access
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
