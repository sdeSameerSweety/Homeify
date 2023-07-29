import { Popover, Button, Text } from "@nextui-org/react";
import React from "react";
import { GrNotification } from "react-icons/gr";
export default function Notification() {
    return (
      <Popover isBordered disableShadow>
        <Popover.Trigger >
          <Button auto flat css={{
            backgroundColor:"white"
          }}><GrNotification className="h-7 w-8" /></Button>
        </Popover.Trigger>
        <Popover.Content>
          <Text css={{ p: "$10" }}>You have No new Notifications.</Text>
        </Popover.Content>
      </Popover>
    );
  }