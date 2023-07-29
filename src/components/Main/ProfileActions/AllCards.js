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
const AllpaymentPage = (props) => {
  const { userData,setUserData } = useContext(UserContext);
  const [paymentAdded, setpaymentAdded] = useState(false);
  const [payment, setPayment] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [lengthpayment,setLengthpayment]=useState(0);
  useEffect(() => {
    if (userData) {
        console.log(userData)
      setPayment(userData.paymentInfo);
      try {
        if(payment){
          setpaymentAdded(true);
          setLengthpayment(payment.length);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setRedirect(true);
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
  },[payment]);
  if(redirect && userData===null){
    return <Navigate to ={'/'}/>
  }
  console.log(paymentAdded)
  
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
              <div className="details-div1 flex flex-row justify-center gap-20 items-center mb-[3%]">
                <div className="flex flex-col justify-center gap-7 mt-[10px] w-[80vw]">
                  <div className="flex flex-col gap-12">
                    {paymentAdded &&(
                      <>
                        {payment.map((payment,index)=>{
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
                              <div className="font-ubuntu">Card - {index+1}</div>
                              <div className="flex flex-col gap-3">
                                <div className="flex justify-between">
                                  <span className="font-ubuntu">
                                    {payment.nameOnCard}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="font-ubuntu">
                                    CARD NUMBER -  {payment.cardNumber}&nbsp;
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="font-ubuntu">
                                    Expiry - {payment.expiryMonth}/{payment.expiryYear}
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
                    {!paymentAdded && (
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

export default AllpaymentPage;
