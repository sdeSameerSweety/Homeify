import React, { useEffect, useState } from "react";
import ProfilePageConatiner from "./ProfilePageContainer";
import Navbar from "../Navbar/Navbar";
import ProgressBar from "./ProgressBar";
import { Card, Text } from "@nextui-org/react";
import { height } from "@mui/system";
import { Button,Loading} from "@nextui-org/react";
import { LuEdit } from "react-icons/lu";
import "./CSS/ProfilePage.css";
import "./CSS/WalletPage.css";
import { PiPiggyBankBold } from "react-icons/pi";
const ProfilePage = (props) => {
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
      <Navbar/>
      <div className="main-div flex flex-row justify-evenly">
        <div className="profile-container flex justify-center">
          <ProfilePageConatiner type="wallet" />
        </div>
        {buffer?
        <><div className="w-[80vw] flex justify-center">
          <Button disabled auto bordered size={45} css={{ px: "$13", border:"none"}}>
            <Loading size="xl" />
          </Button>
          </div>
        </>:<><div className="wallet-div flex flex-row justify-center gap-20 items-center">
          <div className="flex flex-col justify-center gap-7 mt-[10px]">
            <div className="firstdiv">
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
                    <div className="wallet-div1 flex flex-col gap-5 ">
                      <div className="flex justify-center text-[#1979b5] font-ubuntu items-center gap-4 ">
                        <div>
                          <PiPiggyBankBold
                            className="h-8 w-8"
                            fill={"#1979b5"}
                          />
                        </div>
                        <div>Savings Using PepperFry Credits</div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="walletUpperDiv flex justify-between">
                          <div className="flex flex-col gap-5">
                            <div className="text-2xl font-ubuntu">Total Wallet Balance</div>

                            <div className="flex flex-col gap-2">
                              <div className="text-xl text-[#1979b5] font-ubuntu">
                                0 credits
                              </div>
                              <div className="text-xl text-[#848484]">
                                {`(1 credit = 1 Rupees)`}
                              </div>
                            </div>
                          </div>
                          <div className="button-div flex justify-end gap-2">
                            <div className="flex justify-center items-center">
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
                                Use Your Credits
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="walletMiddleDiv flex justify-between">
                          <div className="flex flex-col justify-end items-start">
                              <div className="font-ubuntu">
                                  Pepperfry Credits
                              </div>
                              <div>
                                Up to 15% Utilization on Cart Value
                              </div>
                          </div>
                          <div className="font-ubuntu">
                            0
                          </div>
                        </div>
                        <div className="walletMiddleDiv flex justify-between">
                          <div className="flex flex-col justify-end items-start">
                              <div className="font-ubuntu">
                                  Refund Credits
                              </div>
                              <div>
                                100% Utilization
                              </div>
                          </div>
                          <div className="font-ubuntu">
                            0
                          </div>
                        </div>
                      </div>
                    </div>
                  </Text>
                </Card.Body>
              </Card>
            </div>
            
          </div>
          
        </div></>}
      </div>
    </>
  );
};

export default ProfilePage;
