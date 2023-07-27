import React, { useContext, useEffect, useState } from "react";
import ProfilePageConatiner from "../../../ProfilePageContainer";
import Navbar from "../../../../Navbar/Navbar";
import ProgressBar from "../../../ProgressBar";
import { Card, Text } from "@nextui-org/react";
import { height } from "@mui/system";
import { Button, Loading } from "@nextui-org/react";
import { LuEdit } from "react-icons/lu";
import "../../../CSS/ProfilePage.css";
import { UserContext } from "../../../../../../UserContext";
import { BiError } from "react-icons/bi";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import AddCard from "./AddCard.tsx"
const CardLandingPage = (props) => {
  const { userData,setUserData } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
   if(!userData){
      setRedirect(true);
    }
  }, []);
  
  const [buffer, setBuffer] = useState(true);
  const buffering = () => {
    setTimeout(() => {
      setBuffer(false);
    }, 1000);
  };
  useEffect(() => {
    buffering();
    
  },[]);
  if(redirect && userData===null){
    return <Navigate to={"/"}/>
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
            <div className="w-[80vw] mb-[3%]">
                <AddCard/>
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

export default CardLandingPage;
