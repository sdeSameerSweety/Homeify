import { Card, Text } from "@nextui-org/react";
import { Link, Navigate } from "react-router-dom";
import {BsArrowRightCircleFill} from "react-icons/bs";
import { useContext } from "react";
import { UserContext } from "../../../../UserContext";
import axios from "axios";
const UserTwitterCard = () => {
  const {setUserData,userData}=useContext(UserContext);
  const options = [
    { name: "My Profile", link: "/profile" },
    { name: "My Orders", link: "/orders" },
    { name: "My Wallets", link: "/wallet" },
  ];
  const handleLogOut=async()=>{
    await axios.post('/logout');
    setUserData(null);
    window.location.reload(false);//to refresh navbar after signup
  }
  return (
    <>
      {options.map(({ name, link }) => {
        return (
          <Link to ={link}>
          <Card isPressable isHoverable variant="bordered" css={{
            width:"250px",
            height:"63px",
            fontSize:"13px"
           }}>
          <Card.Body>
            <Text>
              <div className="flex justify-between">
                <div className="font-ubuntu">{name}</div>
                <div><BsArrowRightCircleFill className="h-5 w-5 text-[#FF7035]"/></div>
                </div>
            </Text>
          </Card.Body>
          </Card>
          </Link>
        );
      })}
      <button onClick={handleLogOut}>
      <Card isPressable isHoverable variant="bordered" css={{
            width:"250px",
            height:"63px",
            fontSize:"13px"
           }}>
          <Card.Body>
            <Text>
              <div className="flex justify-between">
                <div className="font-ubuntu">Log Out</div>
                <div><BsArrowRightCircleFill className="h-5 w-5 text-[#FF7035]"/></div>
                </div>
            </Text>
          </Card.Body>
          </Card>
      </button>
    </>
  );
};

export default UserTwitterCard;
