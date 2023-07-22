import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import "../navbar.css";
import { BackgroundImage } from "@mantine/core";

export default function mobile_navbar() {
  const collapseItems1 = [
    "Partner with Us",
    "Get inspired from our #pephomies",
    "Check Out Our Blog",
    "About Us",
  ];
  const collapseItems2 = ["Track Your Order", "Help & Feedback"];

  return (
    <Navbar
      isBordered
      variant="sticky"
      css={{
        marginLeft: "-65px",
        BackgroundImage: "none",
        backdropFilter: "none",
        
        opacity: "1",
        backfaceVisibility: "none",
      }}
    >
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" />
      </Navbar.Brand>
      <Navbar.Collapse
        css={{
          minWidth: "350px",
        }}
      >
        <Navbar.CollapseItem  css={{
          borderBottom:"2px solid grey",
        }}>
          <Link
            color="inherit"
            css={{
              minWidth: "100px",
            }}
            href="#"
          >
            <div className="font-ubuntu">Browse all Categories</div>
          </Link>
        </Navbar.CollapseItem>
        {collapseItems1.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100px",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
        {collapseItems2.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100px",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
