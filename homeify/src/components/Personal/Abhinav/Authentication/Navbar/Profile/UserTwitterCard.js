import { Card, Text } from "@nextui-org/react";
import { Link } from "react-router-dom";
import {BsArrowRightCircleFill} from "react-icons/bs";
import { icons } from "react-icons/lib";
const UserTwitterCard = () => {
  const options = [
    { name: "My Profile", link: "#" },
    { name: "My Orders", link: "#" },
    { name: "My Wallets", link: "#" },
  ];

  return (
    <>
      {options.map(({ name, link }) => {
        return (
          <Card isPressable isHoverable variant="bordered" css={{
            width:"250px",
            height:"63px",
            fontSize:"13px"
           }}>
          <Card.Body>
            <Text>
              <Link className="flex justify-between" to={link}>
                <div>{name}</div>
                <div><BsArrowRightCircleFill className="h-5 w-5"/></div>
                </Link>
            </Text>
          </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default UserTwitterCard;
