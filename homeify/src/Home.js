import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Main/Navbar/Navbar";
import Homepage from "./components/Main/Homepage/Homepage";
import { Button, Loading } from "@nextui-org/react";
export default function Home() {
  const [buffer, setBuffer] = useState(true);
  const buffering = () => {
    setTimeout(() => {
      setBuffer(false);
    }, 1000);
  };
  useEffect(() => {
    buffering();
  });
  return (
    <>
      {!buffer && (
        <div>
          <Navbar />
          <Homepage />
        </div>
      )}
      {buffer && (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
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
      )}
    </>
  );
}
