import React, { useEffect, useState } from "react";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { Mail } from "./Mail";
import { Password } from "./Password";
import { Menu } from "@mantine/core";
import { AiOutlineUser } from "react-icons/ai";
import Signup from "../signup/Signup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase";
import { Loading } from "@nextui-org/react";

const Login = (showLoginModel) => {
  const item = localStorage.getItem("value");
  const [visible, setVisible] = React.useState(
    item !== undefined ? item : false
  );
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
  const [showSignin, setShowsignin] = useState(true);
  //Firebase Login Api Definiton
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [buffer, setBuffer] = useState(false);
  const [showError, setShowError] = useState(false);
  const handleLogin = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setBuffer(true);
        setTimeout(() => {
          setBuffer(false);
        }, 2000);
        setTimeout(() => {
          setVisible(false);
        }, 1000);
        console.log("success");
      })
      .catch((error) => {
        setBuffer(false);
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 2000);
      });
  };
  return (
    <>
      <div>
        {showSignin ? (
          <div>
            <Button
              auto
              color="none"
              shadow
              onPress={handler}
              css={{
                fontSize: "$sm",
                height: "54px",
                width: "30px",
                boxShadow: "none",
              }}
            >
              <div>
                <Menu trigger="hover" openDelay={100} closeDelay={400}>
                  <Menu.Target>
                    <div className="cursor-pointer">
                      <div className="flex flex-row justify-center items-center gap-1">
                        <div className="flex flex-row justify-center gap-2">
                          <div className="flex flex-col justify-center">
                            <div className="signup text-[12px] flex flex-col justify-end font-ubuntu align-middle">
                              <span>Sign up Now</span>
                              <span className="mt-[-24px] text-[#ff7035]">
                                Get 5,001 credits
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="user-div">
                          <AiOutlineUser className="h-8 w-10" />
                        </div>
                      </div>
                    </div>
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Item>
                      <div className="w-60 h-21">
                        <div className="text-[16px] font-semibold">Welcome</div>
                        <div className="text-[12px] p-[2px]">
                          Register now and Get Exclusive Benefits !
                        </div>

                        <button className="bg-[#FF7035] text-white p-3 font-ubuntu">
                          LOGIN/SIGNUP
                        </button>
                      </div>
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </div>
            </Button>
            <Modal
              closeButton
              blur
              aria-labelledby="modal-title"
              open={visible}
              onClose={closeHandler}
            >
              <Modal.Header>
                <Text id="modal-title" size={18}>
                  Welcome to&nbsp;
                  <Text
                    b
                    size={18}
                    css={{
                      color: "#FF7035",
                    }}
                  >
                    Homeify
                  </Text>
                </Text>
              </Modal.Header>
              <Modal.Body>
                <Input
                  clearable
                  bordered
                  fullWidth
                  color="warning"
                  size="lg"
                  placeholder="Email"
                  contentLeft={<Mail fill="currentColor" />}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input.Password
                  clearable
                  bordered
                  fullWidth
                  size="lg"
                  placeholder="Password"
                  contentLeft={<Password fill="currentColor" />}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Row justify="space-between">
                  <Checkbox>
                    <Text size={14}>Remember me</Text>
                  </Checkbox>
                  <Text size={14}>Forgot password?</Text>
                </Row>
                <Row
                  justify="center"
                  css={{
                    cursor: "text",
                  }}
                >
                  <Text size={15}>
                    <div className="font-ubuntu">
                      Don't have an Account?&nbsp;
                    </div>
                  </Text>
                  <Text
                    size={15}
                    css={{
                      color: "#FF7035",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      className="font-ubuntu"
                      role="button"
                      onClick={() => {
                        setShowsignin(false);
                      }}
                    >
                      Signup here
                    </div>
                  </Text>
                </Row>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  auto
                  flat
                  color="error"
                  onPress={closeHandler}
                  css={{
                    backgroundColor: "white",
                    color: "#FF7035",
                  }}
                >
                  Close
                </Button>
                
                {buffer &&(
                  <Button
                    disabled
                    auto
                    bordered
                    color="warning"
                    css={{ px: "$13" }}
                  >
                    <Loading
                      type="points-opacity"
                      color="currentColor"
                      size="sm"
                    />
                  </Button>
                )}
                {!showError && !buffer &&
                  <Button
                  auto
                  css={{
                    backgroundColor: "#FF7035",
                  }}
                  onPress={handleLogin}
                >
                  Sign in
                </Button>
                }
                {showError &&
                  <Button bordered auto css={{
                    backgroundColor:"Red",
                    color:"white"
                  }}>
                  Error
                </Button>
                }
              </Modal.Footer>
            </Modal>
          </div>
        ) : (
          <Signup />
        )}
      </div>
    </>
  );
};

export default Login;
