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

import { Link, Navigate } from "react-router-dom";
const AllAddressPage = (props) => {
  const { userData,setUserData } = useContext(UserContext);
  const [addressAdded, setAddressAdded] = useState(false);
  const [paymentAdded, setPaymentAdded] = useState(false);
  
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
  
  const [score, setScore] = useState(50);
  const [address, setAddress] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [lengthAddress,setLengthAddress]=useState(0);
  useEffect(() => {
    if (userData) {
      setName(userData.name);
      setEmail(userData.email);
      setPhone(userData.phone);
      setAddress(userData.address);
      try {
        if(address){
          setAddressAdded(true);
          setLengthAddress(address.length);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setRedirect(false);
    }
  }, [userData]);

  const [buffer, setBuffer] = useState(true);
  const buffering = () => {
    setTimeout(() => {
      setBuffer(false);
    }, 1000);
  };
  useEffect(() => {
    buffering();
    scoreGenrator();
  },[address]);
  if(redirect || userData===null){
    return <Navigate to ={'/'}/>
  }
  
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
                <div className="flex flex-col justify-center gap-7 mt-[10px] w-[80vw]">
                  <div className="flex flex-col gap-12">
                    {addressAdded &&(
                      <>
                        {address.map((address,index)=>{
                            return(
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
                              <div className="font-ubuntu">Address - {index+1}</div>
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

export default AllAddressPage;
