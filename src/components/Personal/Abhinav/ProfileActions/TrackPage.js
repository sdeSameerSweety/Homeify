import React, { useEffect, useState } from "react";
import ProfilePageConatiner from "./ProfilePageContainer";
import Navbar from "../Navbar/Navbar";
import ProgressBar from "./ProgressBar";
import { Card, Text } from "@nextui-org/react";
import { height } from "@mui/system";
import { Button,Loading } from "@nextui-org/react";
import {LuEdit} from "react-icons/lu";
import "./CSS/ProfilePage.css"
const ProfilePage = (props) => {
  const name = "Kittu Singh";
  const email = "kittusinghranchi@gmail.com";
  const phone = 7003475639;
  const address = [
    { name: "Kittu Singh" },
    {
      address:
        "Vasudha Greens Apartment, Flat No. - 2D, Near Senco Golds, Kamlagazi More",
    },
    { city: "Kolkata" },
    { District: "South 24 Parganas" },
    { State: "West Bengal" },
    { phone: "7003475639" },
  ];
  const [buffer,setBuffer]=useState(true);
  const buffering=()=>{
    setTimeout(() => {
      setBuffer(false);
    }, 1000);
  }
  useEffect(()=>{
    buffering();
  })
  const [addressAdded, setAddressAdded] = useState(true);
  const [paymentAdded, setPaymentAdded] = useState(false);
  const [score, setScore] = useState(50);
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
  useEffect(() => {
    scoreGenrator();
  }, []);
  return (
    <>
      
      <div className="main-div flex flex-row justify-evenly">
        <div className="profile-container flex justify-center"><ProfilePageConatiner type="track" />
        </div>
        {buffer?<>
          <div className="w-[80vw] flex justify-center">
          <Button disabled auto bordered size={45} css={{ px: "$13", border:"none"}}>
            <Loading size="xl" />
          </Button>
          </div>
          </>:<><div className="details-div1 flex flex-row justify-center gap-20 items-center">
          <div className="flex flex-col justify-center gap-7 mt-[10px] w-[67vw]">
            <div>
              <Card
                className="card-css"
                isPressable
                
                variant="bordered"
                css={{
                  width: "auto",
                  height: "auto",
                  borderRadius:"0px"
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
              <Card
                isPressable
               
                variant="bordered"
                css={{
                  width: "auto",
                  height: "auto",
                  borderRadius:"0px"
                }}
              >
                <Card.Body>
                  <Text>
                    <div className=" flex flex-col gap-5">
                      <div className="font-ubuntu">Default Address</div>
                      <div className="flex flex-col gap-3">
                        <div className="flex justify-between">
                          <span className="font-ubuntu">{address[0].name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-ubuntu">
                            {address[1].address}&nbsp;{address[2].city}&nbsp;
                            {address[3].District}&nbsp;{address[4].State}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-ubuntu">
                            {address[5].phone}
                          </span>
                        </div>
                      </div>
                      <div>
                        <Button shadow auto css={{
                          backgroundColor:"white",
                          color:"#FF7035",
                          boxShadow:"none"
                        }}>
                          <LuEdit/>&nbsp;Edit
                        </Button>
                      </div>
                    </div>
                    <div className="button-div flex justify-end gap-2">
                      <div><Button shadow auto css={{
                          backgroundColor:"#FF7035",
                          color:"white",
                          boxShadow:"none",
                          border:"2px solid #FF7035",
                          borderRadius:"0px",
                        }}>
                          View All Addresses
                        </Button>
                        </div>
                        <div><Button shadow auto css={{
                          backgroundColor:"white",
                          color:"#FF7035",
                          boxShadow:"none",
                          border:"2px solid #FF7035",
                          borderRadius:"0px",
                        }}>
                          Add New Address
                        </Button>
                        </div>
                    </div>
                    
                  </Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="flex flex-col gap-7 mr-[13px]">
            <div className="flex justify-center font-ubuntu">
              Your Profile is
            </div>
            <div>
              <ProgressBar value1={`${score}`} />
            </div>
            <div className="flex justify-center font-ubuntu">Complete</div>
          </div>
        </div></>}
      </div>
    </>
  );
};

export default ProfilePage;
