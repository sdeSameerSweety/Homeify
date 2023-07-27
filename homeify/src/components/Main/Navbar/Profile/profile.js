import React, { useState, useEffect } from "react";
import { Popover, User, Button, Grid } from "@nextui-org/react";
import UserTwitterCard from "./UserTwitterCard";
import "../navbar.css"
function Profile(UserName) {
  if (UserName) {
    var userName = UserName.UserName;
  }

  return (
    <>
    <div className="pc">
      <Popover>
        <Popover.Trigger>
          <User
            as="button"
            src="https://img.icons8.com/?size=512&id=zxB19VPoVLjK&format=png"
            name={userName}
          />
        </Popover.Trigger>
        <Popover.Content css={{ px: "$4", py: "$2" }}>
          <UserTwitterCard />
        </Popover.Content>
      </Popover>
    </div>
    <div className="mobile">
      <Popover>
        <Popover.Trigger>
          <User
            as="button"
            src="https://img.icons8.com/?size=512&id=zxB19VPoVLjK&format=png"
          />
        </Popover.Trigger>
        <Popover.Content css={{ px: "$4", py: "$2" }}>
          <UserTwitterCard />
        </Popover.Content>
      </Popover>
    </div>
    </>
  );
}

export default Profile;
