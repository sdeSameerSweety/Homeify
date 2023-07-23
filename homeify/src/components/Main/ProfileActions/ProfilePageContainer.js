import React, { useEffect, useState } from "react";
import "./CSS/ProfilePageContainer.css"
import { Card, Text } from "@nextui-org/react";
import { BsBorderBottom } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillBoxFill } from "react-icons/bs";
import { IoIosWallet } from "react-icons/io";
import { Link } from "react-router-dom";
import { noop } from "@mantine/utils";

const ProfilePageConatiner = (props) => {
    const [profiletype,setProfiletype]=useState(false);
    const [trackorder,setTrackorder]=useState(false);
    const [wallettype,setWallettype]=useState(false);
    const pagetypeIdentifier=()=>{
      if(props.type==='profile'){
          
          setProfiletype(true);
          setTrackorder(false);
          setWallettype(false);
      }
      if(props.type==='track'){
        
        setProfiletype(false);
          setTrackorder(true);
          setWallettype(false);
    }
    if(props.type==='wallet'){
      
        setProfiletype(false);
          setTrackorder(false);
          setWallettype(true);
  }
}
    useEffect(()=>{
      pagetypeIdentifier();
        },[])
    

    const name = "Kittu Singh";
    const email = "kittusinghranchi@gmail.com";
    const phone = "7003475639";
  return (
    <>
      
      <div className="main-div w-[250px]">
        <div className="">
            <Link to="/profile">
              {profiletype?<>
            <Card
            isPressable
            
            variant="bordered"
            css={{
              mw: "400px",
              height: "90px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderLeft:"none",borderRight:"none",
              borderBottom:"2px solid #FF7035",
              boxShadow:"none",
              borderRadius:"0px"
            }}
          >
            <Card.Body>
              <Text>
                <div className="flex gap-2 text-[18px] font-ubuntu text-[#FF7035]">
                  <AiOutlineUser className="h-7 w-8 fill-[#FF7035] " />
                  My Profile
                </div>
              </Text>
            </Card.Body>
          </Card></>
          :<>
          <Card
          isPressable
          
          variant="bordered"
          css={{
            mw: "400px",
            height: "90px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderLeft:"none",borderRight:"none",
            boxShadow:"none",
            borderRadius:"0px",
            
          }}
        >
          <Card.Body>
            <Text>
              <div className="flex gap-2 text-[18px] font-ubuntu ">
                <AiOutlineUser className="h-7 w-8 " />
                My Profile
              </div>
            </Text>
          </Card.Body>
        </Card></>
          }
          </Link>
          <Link to="/track">
          {trackorder?
          <Card
            isPressable
            
            variant="bordered"
            css={{
              mw: "400px",
              height: "90px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border:"none",
              borderRadius:"0px",
              borderBottom:"2px solid #FF7035"
            }}
          >
            <Card.Body>
              <Text>
                <div className="flex gap-2 text-[18px] font-ubuntu text-[#FF7035]">
                  <BsFillBoxFill className="h-6 w-7 fill-[#FF7035]"/>
                  Track My Order
                </div>
              </Text>
            </Card.Body>
          </Card>
          :<Card
          isPressable
          
          variant="bordered"
          css={{
            mw: "400px",
            height: "90px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderLeft:"none",borderRight:"none",
            boxShadow:"none",
            borderRadius:"0px",
            
          }}
        >
          <Card.Body>
            <Text>
              <div className="flex gap-2 text-[18px] font-ubuntu">
                <BsFillBoxFill className="h-6 w-7 " />
                Track My Order
              </div>
            </Text>
          </Card.Body>
        </Card>
          }
          </Link>
          <Link to="/wallet">
          {wallettype?
          <Card
            isPressable
            
            variant="bordered"
            css={{
              mw: "400px",
              height: "90px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderLeft:"none",borderRight:"none",
              borderBottom:"2px solid #FF7035",
              boxShadow:"none",
              borderRadius:"0px"
            }}
          >
            <Card.Body>
              <Text>
                <div className="flex gap-2 text-[18px] font-ubuntu text-[#FF7035]">
                <IoIosWallet className="h-7 w-8 fill-[#FF7035]" />
                My Wallet
                </div>
              </Text>
            </Card.Body>
          </Card>
          :<Card
          isPressable
          
          variant="bordered"
          css={{
            mw: "400px",
            height: "90px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderLeft:"none",borderRight:"none",
            boxShadow:"none",
            borderRadius:"0px",
            
          }}
        >
          <Card.Body>
            <Text>
              <div className="flex gap-2 text-[18px] font-ubuntu">
              <IoIosWallet className="h-7 w-8 " />
                My Wallet
              </div>
            </Text>
          </Card.Body>
        </Card>
          }
          </Link>
          
        </div>
      </div>
    </>
  );
};

export default ProfilePageConatiner;
