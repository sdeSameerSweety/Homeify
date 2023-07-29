import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { Mail } from "./Mail";
import { Password } from "./Password";
import { Menu } from "@mantine/core";
import { AiOutlineUser } from "react-icons/ai";
const Login = (showLoginModel) => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button auto color="none" shadow onPress={handler} css={{
        fontSize:"$sm",
        height:"54px",
        width:"30px",
        boxShadow:"none"
      }}> 
        <div>
          <Menu trigger="hover" openDelay={100} closeDelay={400}>
            <Menu.Target>
              <div className="cursor-pointer">
                <div className="flex flex-row justify-center items-center gap-1">
                  
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
            <Text b size={18} css={{
              color:"#FF7035"
            }}>
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
          />
          <Input.Password
            clearable
            bordered
            fullWidth
            size="lg"
            placeholder="Password"
            contentLeft={<Password fill="currentColor" />}
          />
          <Row justify="space-between">
            <Checkbox >
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
              <div className="font-ubuntu">Signup here</div>
            </Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler} css={{
              backgroundColor:"white",
              color:"#FF7035"
          }}>
            Close
          </Button>
          <Button auto onPress={closeHandler} css={{
              backgroundColor:"#FF7035"
          }}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Login
