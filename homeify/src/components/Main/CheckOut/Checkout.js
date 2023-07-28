import React from "react";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Loading } from "@nextui-org/react";
import { LuEdit } from "react-icons/lu";
import { Button, Card, Text } from "@nextui-org/react";
import { Link, Navigate } from "react-router-dom";
import "./CheckOut.css";
import { Checkbox } from "@nextui-org/react";
import video from "./placed.mp4";
import {
  IconUserCheck,
  IconMailOpened,
  IconShieldCheck,
  IconCircleCheck,
} from "@tabler/icons-react";
import { Stepper } from "@mantine/core";
const Checkout = (props) => {
  //cart
  const productDataLocal = JSON.parse(localStorage.getItem("cartArray"));
  console.log(productDataLocal);
  const [productId, setProductId] = useState('');
  //cart ends
  const[userId, setUserId]=useState('');//userId here
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState([]);
  const [payment, setPayment] = useState([]);
  const [state, setState] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [latestUserData, setLatestUserData] = useState("");
  const [addressAdded, setAddressAdded] = useState(false);
  const [paymentAdded, setPaymentAdded] = useState(false);
  const [active, setActive] = useState(0);
  const[proceed1,setProceed1]=useState(false);
  const[proceed2,setProceed2]=useState(false);
  useEffect(() => {
    async function getUserData() {
      const data = await axios.get("/profiledata").then(({ data }) => {
        setState(true);
        setLatestUserData(data);
        setRedirect(false);
        console.log(redirect);
        if (data) {
        setUserId(data.userId);
          setName(data.name);
          setEmail(data.email);
          setPhone(data.phone);
          setAddress(data.address);
          setPayment(data.paymentInfo);
          try {
            if (address !== undefined) {
              if (address !== null && address.length !== 0) {
                setAddressAdded(true);
              }
            }
            if (payment !== undefined) {
              if (payment !== null && payment.length !== 0) {
                setPaymentAdded(true);
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
  function stepperGo(){
    console.log(proceed1);
    if(proceed1===true){
        setActive(1);
    }
    if(proceed1===true && proceed2===true){
        setActive(2);
    }
}
if (userId===null || userId===undefined) {
    return <Navigate to={"/"} />;
  }
  const ProductDataLocalMap=productDataLocal.ProductsFinalArray;
  const productMap=productDataLocal.products;
  let orderArray=[];
  for (let i = 0; i < productMap.length; i++) {
    const eachProductQuantity = productMap[i].productQuantity;
    const eachProductId= ProductDataLocalMap[i]._id;
    orderArray.push({
        productId:eachProductId,
        productQuantity:eachProductQuantity
    })
  }
  console.log(orderArray);
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="w-[80vw] flex gap-20 justify-between">
          <Stepper
            active={active}
            completedIcon={<IconCircleCheck />}
          >
            <Stepper.Step
              icon={<IconUserCheck size="1.1rem" />}
              label="Select Address"
            />
            <Stepper.Step
              icon={<IconMailOpened size="1.1rem" />}
              label="Select Payment"
            />
            <Stepper.Step
              icon={<IconShieldCheck size="1.1rem" />}
              label="Confirm"
            />
          </Stepper>
        </div>
        {active === 0 && (
          <>
            <div>
              <div className="flex justify-center items-center">
                {addressAdded && (
                  <div className="details-div1 flex flex-row justify-center gap-20 items-center">
                    <div className="flex flex-col justify-center gap-7 mt-[10px] w-[80vw]">
                      <div className="flex flex-col gap-12">
                        {addressAdded && (
                          <>
                            {address.map((address, index) => {
                              return (
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
                                      <Checkbox.Group color="secondary">
                                        <Checkbox value="first"></Checkbox>
                                      </Checkbox.Group>
                                      <div className=" flex flex-col gap-5">
                                        <div className="font-ubuntu">
                                          Address - {index + 1}
                                        </div>
                                        <div className="flex flex-col gap-3">
                                          <div className="flex justify-between">
                                            <span className="font-ubuntu">
                                              {address.addressName}
                                            </span>
                                          </div>
                                          <div className="flex justify-between">
                                            <span className="font-ubuntu">
                                              {address.addressLine1}&nbsp;
                                              {address.addressLine2}&nbsp;
                                              {address.pincode}&nbsp;
                                              {address.city}&nbsp;
                                              {address.state}
                                            </span>
                                          </div>
                                          <div className="flex justify-between">
                                            <span className="font-ubuntu">
                                              {address.phone}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </Text>
                                  </Card.Body>
                                </Card>
                              );
                            })}
                          </>
                        )}
                      </div>
                    </div>
                    <div className="mb-[2%]">
                      <Button
                        onClick={() => {
                        setActive(1)
                        
                        }}
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
                        Proceed
                      </Button>
                    </div>
                  </div>
                )}
                {!addressAdded && (
                  <div className="w-[50vw] h-[50vh]">
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
                          <div className=" flex flex-col gap-5 h-[20vh]">
                            <div className="font-ubuntu flex justify-center">
                              No Address Yet
                            </div>
                          </div>
                          <div className="button-div flex justify-end gap-2">
                            <Link to="/editaddress">
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
                                Add New Address
                              </Button>
                            </Link>
                          </div>
                        </Text>
                      </Card.Body>
                    </Card>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
        {active === 1 && (
          <>
            <div>
              <div className="flex justify-center items-center">
                {paymentAdded && (
                  <div className="details-div1 flex flex-row justify-center gap-20 items-center">
                    <div className="flex flex-col justify-center gap-7 mt-[10px] w-[80vw]">
                      <div className="flex flex-col gap-12">
                        {paymentAdded && (
                          <>
                            {payment.map((payment, index) => {
                              return (
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
                                      <Checkbox.Group color="secondary">
                                        <Checkbox value="first"></Checkbox>
                                      </Checkbox.Group>
                                      <div className=" flex flex-col gap-5">
                                        <div className="font-ubuntu">
                                          Card - {index + 1}
                                        </div>
                                        <div className="flex flex-col gap-3">
                                          <div className="flex justify-between">
                                            <span className="font-ubuntu">
                                              {payment.nameOnCard}
                                            </span>
                                          </div>
                                          <div className="flex justify-between">
                                            <span className="font-ubuntu">
                                              CARD NUMBER - {payment.cardNumber}
                                              &nbsp;
                                            </span>
                                          </div>
                                          <div className="flex justify-between">
                                            <span className="font-ubuntu">
                                              Expiry - {payment.expiryMonth}/
                                              {payment.expiryYear}
                                            </span>
                                          </div>
                                          <div className="flex justify-between">
                                            <span className="font-ubuntu">
                                              CVV - {payment.cvv}
                                            </span>
                                          </div>
                                        </div>
                                        <div>
                                          <Button
                                            shadow
                                            auto
                                            css={{
                                              backgroundColor: "white",
                                              color: "#FF7035",
                                              boxShadow: "none",
                                            }}
                                          >
                                            <LuEdit />
                                            &nbsp;Edit
                                          </Button>
                                        </div>
                                      </div>
                                    </Text>
                                  </Card.Body>
                                </Card>
                              );
                            })}
                          </>
                        )}
                      </div>
                    </div>
                    <div className="mb-[2%]">
                      <Button
                        onClick={() => {
                         setActive(2)
                        }}
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
                        Proceed
                      </Button>
                    </div>
                  </div>
                )}
                {!paymentAdded && (
                  <div className="w-[50vw] h-[50vh]">
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
                          <div className="font-ubuntu">No payment Yet</div>
                        </div>
                        <div className="button-div flex justify-end gap-2">
                          <Link to="/creditcard">
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
                              Add New payment
                            </Button>
                          </Link>
                        </div>
                      </Text>
                    </Card.Body>
                  </Card>

                  </div>
                )}
              </div>
            </div>
          </>
        )}
        {active === 2 && (
          <div className="flex flex-col gap-10 justify-center items-center">
            <div>
                <video src={video} width="300" height="300" autoPlay loop className="border-2 border-black"/>
            </div>
            <div>
                Congratulations, You have Successfully placed your order
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
