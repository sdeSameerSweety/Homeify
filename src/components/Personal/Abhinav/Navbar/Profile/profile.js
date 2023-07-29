import React from 'react'
import { Popover, User, Button, Grid } from "@nextui-org/react";
import UserTwitterCard from "./UserTwitterCard";
const profile = () => {
  const Username="Kittu Singh"
    return (
    <div>
       <Popover>
          <Popover.Trigger>
            <User
              as="button"
              src="https://img.icons8.com/?size=512&id=zxB19VPoVLjK&format=png"
              name={`${Username}`}
            />
          </Popover.Trigger>
          <Popover.Content css={{ px: '$4', py: '$2' }}>
            <UserTwitterCard />
          </Popover.Content>
        </Popover>
    </div>
  )
}

export default profile
