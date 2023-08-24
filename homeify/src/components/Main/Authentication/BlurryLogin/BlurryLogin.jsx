import React, { useEffect, useState } from "react";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { Mail } from "../Login/Mail";
import { Password } from "../Login/Password";
import Signup from "../signup/Signup";
import { Loading } from "@nextui-org/react";
import axios from "axios";
import "./blurry.css";
import Cookies from 'js-cookie';
export default function BlurryLogin({ pid }) {
  const [visible, setVisibleBlurry] = React.useState(true);
  const closeHandler = () => {
    setVisibleBlurry(false);
  };
  useEffect(() => {
    if (visible === false) {
      setTimeout(() => {
        setVisibleBlurry(true);
      }, 3000);
    }
  });
  const [showSignin, setShowsignin] = useState(true);
  //Firebase Login Api Definiton
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [buffer, setBuffer] = useState(false);
  const [showError, setShowError] = useState(false);
  const handleLogin = async (e) => {
    try {
      if (email && password) {
        const UserDoc = await axios.post("/login", { email, password });
        const res123=UserDoc.data;
        const token = res123.token;
        Cookies.set('token', token, { expires: 2 });
        if (UserDoc) {
          setBuffer(true);
          setTimeout(() => {
            setBuffer(false);
          }, 2000);
          setTimeout(() => {
            setVisibleBlurry(false);
            window.location.reload(false); //to refresh navbar after login
            setEmail("");
            setPassword("");
          }, 1000);
          console.log("success");
        }
      } else {
        setBuffer(false);
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 2000);
      }
    } catch (err) {
      setBuffer(false);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 2000);
    }
  };

  return (
    <div>
      {showSignin ? (
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
                <div className="font-ubuntu">Don't have an Account?&nbsp;</div>
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

            {buffer && (
              <Button
                disabled
                auto
                bordered
                color="warning"
                css={{ px: "$13" }}
              >
                <Loading type="points-opacity" color="currentColor" size="sm" />
              </Button>
            )}
            {!showError && !buffer && (
              <Button
                auto
                css={{
                  backgroundColor: "#FF7035",
                }}
                onPress={handleLogin}
              >
                Sign in
              </Button>
            )}
            {showError && (
              <Button
                bordered
                auto
                css={{
                  backgroundColor: "Red",
                  color: "white",
                }}
              >
                Error
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      ) : (
        <Signup />
      )}
    </div>
  );
}
