import React, { useContext, useEffect, useState } from "react";
import ProfilePageConatiner from "./ProfilePageContainer";
import Navbar from "../Navbar/Navbar";
import ProgressBar from "./ProgressBar";
import { Card, Text } from "@nextui-org/react";
import { height } from "@mui/system";
import { Button, Loading } from "@nextui-org/react";
import { LuEdit } from "react-icons/lu";
import "./CSS/ProfilePage.css";
import { UserContext } from "../../../UserContext";
import { BiError } from "react-icons/bi";
import axios from "axios";
import { Link, Navigate, redirect } from "react-router-dom";
import { red } from "@mui/material/colors";
const ProfilePage = (props) => {
  const { userData,setUserData } = useContext(UserContext);
  const [addressAdded, setAddressAdded] = useState(false);
  const [paymentAdded, setPaymentAdded] = useState(false);
 
  
  const [score, setScore] = useState(50);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState([]);
  const [payment,setPayment]=useState([]);
  const [redirect, setRedirect] = useState(false);
  const [lengthAddress,setLengthAddress]=useState(0);
  const [paymentLength, setPaymentLength]=useState(0);
  const [latestUserData, setLatestUserData]=useState();
  
  useEffect(() => {
    async function getUserData(){
      const data = await axios.get('/profiledata').then(({data})=>{
        setLatestUserData(data);
        setRedirect(false);
        console.log(redirect);
        if (data) {
          setName(data.name);
          setEmail(data.email);
          setPhone(data.phone);
          setAddress(data.address);
          setPayment(data.paymentInfo);
          try{
            if(address!==undefined){
              if(address!==null  && address.length!==0){
              setAddressAdded(true);
              setLengthAddress(address.length);}
            }
            if(payment !== undefined){
              if( payment!==null && payment.length!==0){
                setPaymentAdded(true);
                setPaymentLength(payment.length);}
              }
            }
    
          catch (error) {
            console.log(error);
          }
        } 
        else{
          setRedirect(true);
        }
    });
    }
    getUserData();
  },[name,address,phone,payment,email]);
  
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
          setScore(score +50);
          //console.log("both if")
        }
      } else if(paymentAdded || addressAdded) {
        if (score <= 100) {
          setScore(score + 25);
          //console.log("either if")
        }
      }
    };
    scoreGenrator();
  },[addressAdded,paymentAdded]);
  
 
  return (
    <>
      <Navbar />
      {userData !== null && (
        <div className="main-div flex flex-row justify-evenly">
          <div className="profile-container flex justify-center">
            <ProfilePageConatiner type="profile" />
          </div>
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
              <div className="details-div1 flex flex-row justify-center gap-20 items-center">
                <div className="flex flex-col justify-center gap-7 mt-[10px] w-[67vw]">
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
                            <div className="font-ubuntu">My Details</div>
                            <div className="flex flex-col gap-3">
                              <div className="namediv flex justify-between">
                                <span>Name -</span>
                                <span className="font-ubuntu">{name}</span>
                              </div>
                              <div className="namediv flex justify-between">
                                <span>Email -</span>
                                <span className="font-ubuntu">{email}</span>
                              </div>
                              <div className="namediv flex justify-between">
                                <span>Phone -</span>
                                <span className="font-ubuntu">{phone}</span>
                              </div>
                            </div>
                          </div>
                        </Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div>
                    {addressAdded &&(
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
                              <div className="font-ubuntu">Default Address</div>
                              <div className="flex flex-col gap-3">
                                <div className="flex justify-between">
                                  <span className="font-ubuntu">
                                    {address[0].addressName}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="font-ubuntu">
                                    {address[0].addressLine1}&nbsp;
                                    {address[0].addressLine2}&nbsp;
                                    {address[0].pincode}&nbsp;
                                    {address[0].city}&nbsp;
                                    {address[0].state}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="font-ubuntu">
                                    {address[0].phone}
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
                            <div className="add-view-div button-div flex justify-end gap-2">
                              <div>
                                <Link to="/addresses">
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
                                  View All Addresses
                                </Button>
                                </Link>
                              </div>
                              <div>
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
                            </div>
                          </Text>
                        </Card.Body>
                      </Card>
                    )}
                    {!addressAdded && (
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
                              <div className="font-ubuntu">No Address Yet</div>
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
                    )}
                  </div>
                  <div>
                    {paymentAdded &&(
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
                              <div className="font-ubuntu">Default Payment Card</div>
                              <div className="flex flex-col gap-3">
                                <div className="flex justify-between">
                                  <span className="font-ubuntu">
                                    {payment[0].nameOnCard}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="font-ubuntu">
                                    CARD NUMBER -  {payment[0].cardNumber}&nbsp;
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="font-ubuntu">
                                    Expiry - {payment[0].expiryMonth}/{payment[0].expiryYear}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="font-ubuntu">
                                    CVV - {payment[0].cvv}
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
                            <div className="add-view-div button-div flex justify-end gap-2 ">
                              <div>
                                <Link to="/allcards">
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
                                  View All Cards
                                </Button>
                                </Link>
                              </div>
                              <div>
                                <Link to="/creditCard">
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
                                  Add New Card
                                </Button>
                                </Link>
                              </div>
                            </div>
                          </Text>
                        </Card.Body>
                      </Card>
                    )}
                    {!paymentAdded && (
                      <div className="mb-[3%]">
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
                              <div className="font-ubuntu">No Payment Saved Yet</div>
                            </div>
                            <div className="button-div flex justify-end gap-2">
                              <Link to="/creditCard">
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
                                  Add New Card
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
                <div className="flex flex-col gap-7 mr-[13px]">
                  <div className="flex jusify-start items-start font-ubuntu">
                    Your Profile is
                  </div>
                  <div>
                    <ProgressBar value1={`${score}`} />
                  </div>
                  <div className="flex justify-center font-ubuntu">
                    Complete
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

export default ProfilePage;
