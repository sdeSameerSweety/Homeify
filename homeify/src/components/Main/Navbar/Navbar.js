import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "@mantine/core";
import { Input } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import Login from "../Authentication/Login/Login.js";
import PcLogo from "./pcLogo.js";
import MobileLogo from "./mobileLogo.js";
import "./navbar.css";
import MobileNavbar from "./MobileNavbar/MobileNavbar.js";
import Signup from "../Authentication/signup/Signup.js";
import Notification from "./Notification/Notification.js";
import Profile from "./Profile/profile.js";
import { UserContext } from "../../../UserContext.js";
const Navbar = () => {
  const { userData } = useContext(UserContext);
  localStorage.removeItem("value");
  const showLogin = true;
  const HandleSearch = () => {};
  const divTwoData = [
    { name: "SELL ON PEPPERFRY", link: "/sellonpepperfry" },
    { name: "BECOME A FRANCHISE", link: "#" },
    { name: "BUY IN BULK", link: "#" },
    { name: "FIND A STUDIO", link: "#" },
    { name: "GET INSPIRED", link: "#" },
    { name: "TRACK YOUR ORDER", link: "#" },
    { name: "CONTACT US", link: "#" },
  ];
  /*
    const divThreeData = [
        { name: "Furniture" ,link:"#"},
        { name: "Sofa and Seating", link: "#" },
        { name: "Matresses", link: "#" },
        { name: "Home Decor", link: "#" },
        { name: "Furnishing", link: "#" },
        { name: "Kitchen & Dining", link: "#" },
        { name: "Lamps & Lighting", link: "#" },
        { name: "Home Utility", link: "#" },
        { name: "Appliances", link: "#" },
        { name: "Modular", link: "#" },
      ];
      */
  const Furniture = [
    { name: "Sofas", link: "sofas" },
    { name: "Chairs", link: "chairs" },
    { name: "Wardrobe", link: "wardrobes" },
    { name: "Recliners", link: "recliners" },
    { name: "Sofa Chairs", link: "sofa_chairs" },
    { name: "Tables", link: "tables" },
    { name: "Decorations", link: "decorations" },
    { name: "Tv-Unit", link: "tv_unit" },
  ];
  const SofaAndSeating = [
    { name: "Sofa", link: "recliner" },
    { name: "Recilner", link: "recliner" },
    { name: "Office Chairs", link: "office_chairs" },
    { name: "Gaming Chairs", link: "recliner" },
    { name: "Dining Chairs", link: "office_chairs" },
    { name: "Bean Bags", link: "recliner" },
    { name: "L-Shape Sofa", link: "office_chairs" },
    { name: "Sofa Sets", link: "recliner" },
  ];
  const Matresses = [
    { name: "King-Size", link: "#" },
    { name: "Queen-Size", link: "#" },
    { name: "Single-Size", link: "#" },
    { name: "Pillow", link: "#" },
    { name: "Foldable", link: "#" },
    { name: "Top Brands", link: "#" },
  ];
  const HomeDecor = [
    { name: "Vases", link: "vases" },
    { name: "Show-Pieces", link: "vases" },
    { name: "Photo-frames", link: "vases" },
    { name: "Figurines", link: "vases" },
    { name: "Candles", link: "vases" },
    { name: "Candle-Stands", link: "vases" },
    { name: "Pots", link: "vases" },
    { name: "Idols", link: "vases" },
    { name: "Flowers", link: "vases" },
    { name: "All", link: "vases" },
  ];
  const Furnishings = [
    { name: "Bed-Sheets", link: "#" },
    { name: "Bed-Linens", link: "#" },
    { name: "Quilts", link: "#" },
    { name: "Cushions", link: "#" },
    { name: "Curtains", link: "#" },
    { name: "Carpets", link: "#" },
  ];
  const KitchenAndDining = [
    { name: "Serveware", link: "#" },
    { name: "Cookwares", link: "#" },
    { name: "Dinnerware", link: "#" },
    { name: "Teaware", link: "#" },
    { name: "Drinkware", link: "#" },
    { name: "Cuttlery", link: "#" },
    { name: "Kitchen-Linen", link: "#" },
  ];
  const LampAndLighting = [
    { name: "Lamps", link: "#" },
    { name: "Ceiling Lights", link: "#" },
    { name: "Wall Lights", link: "#" },
    { name: "Outdoor Lights", link: "#" },
    { name: "Bulbs", link: "#" },
  ];
  const HomeUtility = [
    { name: "Storage Organisers", link: "#" },
    { name: "Bath-Accesories", link: "#" },
    { name: "Gardening", link: "#" },
    { name: "Tools", link: "#" },
    { name: "Home care", link: "#" },
  ];
  function setStorage(categoryName, itemName) {
    localStorage.setItem(
      "redirectProduct",
      JSON.stringify({
        categoryName: categoryName,
        itemName: itemName,
      })
    );
  }
  return (
    <>
      {userData !== null && (
        <nav className="">
          <div className="ml-20 mr-20 h-16 flex justify-between">
            <div className="hamburger">
              <MobileNavbar />
            </div>
            <div>
              <div className="searchbar h-16 flex gap-2 justify-left items-center w-[300px] cursor-pointer">
                <Input underlined placeholder="Search" color="warning" />
                <button className="h-10 " onClick={HandleSearch}>
                  <FiSearch className="h-5 w-5" />
                </button>
              </div>
            </div>
            <Link to="/" className="mt-[10px]">
              <div className="pclogo flex justify-center items-center">
                <PcLogo />
              </div>
              <div className="mobile-logo ">
                <MobileLogo />
              </div>
            </Link>
            <div className="right-div-navbar flex items-center gap-5">
              <div className="mr-[-15px] login-signup-popup">
                <div className="w-[50%] h-[5px] mt-[-20px]">
                  <Profile UserName={userData.name} />
                </div>
              </div>
              <div className="notification-div flex items-center cursor-pointer bg-white ml-[-12px] mr-[-12px]">
                <Notification />
              </div>
              <div className="wishlist-div flex items-center cursor-pointer">
                <Link to="#">
                  <AiOutlineHeart className="h-8 w-10" />
                </Link>
              </div>
              <div className="flex items-center cursor-pointer">
                <Link to="/cart">
                  <FiShoppingCart className="h-8 w-10" />
                </Link>
              </div>
            </div>
          </div>
          <div className="categories-div flex justify-center gap-5">
            {divTwoData.map(({ name, link }) => {
              return (
                <li className="text-[12px] text-[#404145] hover:text-[#595a60] transition-all none list-none p-3 font-ubuntu">
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </div>
          <div className="categories flex justify-center gap-5 bg-[#323232c6] mb-5">
            <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu">
              <Menu trigger="hover" openDelay={100} closeDelay={100}>
                <Menu.Target>
                  <Link to="/categories" state={"furniture"}>
                    <div className="cursor-pointer">Furniture</div>
                  </Link>
                </Menu.Target>

                <Menu.Dropdown>
                  {Furniture.map(({ name, link }) => {
                    return (
                      <Link
                        to="/products"
                        state={{
                          categoryName: "furniture",
                          itemName: link,
                        }}
                        onClick={() => setStorage("furniture", link)}
                        className="cursor-pointer"
                      >
                        <Menu.Item>
                          <div className="flex justify-center text-[15px] font-ubuntu p-2 text-[#000000] w-[200px] ">
                            {name}
                          </div>
                        </Menu.Item>
                      </Link>
                    );
                  })}
                </Menu.Dropdown>
              </Menu>
            </li>
            <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
              <Menu trigger="hover" openDelay={100} closeDelay={100}>
                <Menu.Target>
                  <Link to="/categories" state={"sofa_seating"}>
                    <div className="cursor-pointer">Sofa and Seating</div>
                  </Link>
                </Menu.Target>

                <Menu.Dropdown>
                  {SofaAndSeating.map(({ name, link }) => {
                    return (
                      <Link
                        to="/products"
                        state={{
                          categoryName: "sofa_and_seating",
                          itemName: link,
                        }}
                        onClick={() => setStorage("sofa_and_seating", link)}
                        className="cursor-pointer"
                      >
                        <Menu.Item>
                          <div className="flex justify-center text-[15px] font-ubuntu p-2 text-[#000000] w-[200px] ">
                            {name}
                          </div>
                        </Menu.Item>
                      </Link>
                    );
                  })}
                </Menu.Dropdown>
              </Menu>
            </li>
            {/* <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
              <Menu trigger="hover" openDelay={100} closeDelay={100}>
                <Menu.Target>
                  <Link to="/categories" state={"matress"}>
                    <div className="cursor-pointer">Matresses</div>
                  </Link>
                </Menu.Target>

                <Menu.Dropdown>
                  {Matresses.map(({ name, link }) => {
                    return (
                      <Link to={link} className="cursor-pointer">
                        <Menu.Item>
                          <div className="flex justify-center text-[15px] font-ubuntu p-2 text-[#000000] w-[200px] ">
                            {name}
                          </div>
                        </Menu.Item>
                      </Link>
                    );
                  })}
                </Menu.Dropdown>
              </Menu>
            </li> */}
            <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
              <Menu trigger="hover" openDelay={100} closeDelay={100}>
                <Menu.Target>
                  <Link to="/categories" state={"home_decor"}>
                    <div className="cursor-pointer">Home Decor</div>
                  </Link>
                </Menu.Target>

                <Menu.Dropdown>
                  {HomeDecor.map(({ name, link }) => {
                    return (
                      <Link
                        to="/products"
                        state={{
                          categoryName: "home_decor",
                          itemName: link,
                        }}
                        onClick={() => setStorage("home_decor", link)}
                        className="cursor-pointer"
                      >
                        <Menu.Item>
                          <div className="flex justify-center text-[15px] font-ubuntu p-2 text-[#000000] w-[200px] ">
                            {name}
                          </div>
                        </Menu.Item>
                      </Link>
                    );
                  })}
                </Menu.Dropdown>
              </Menu>
            </li>
            <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
              <Menu trigger="hover" openDelay={100} closeDelay={100}>
                <Menu.Target>
                  <Link to="/categories" state={"furnishing"}>
                    <div className="cursor-pointer">Furnishing</div>
                  </Link>
                </Menu.Target>

                <Menu.Dropdown>
                  {Furnishings.map(({ name, link }) => {
                    return (
                      <Link to={link} className="cursor-pointer">
                        <Menu.Item>
                          <div className="flex justify-center text-[15px] font-ubuntu p-2 text-[#000000] w-[200px] ">
                            {name}
                          </div>
                        </Menu.Item>
                      </Link>
                    );
                  })}
                </Menu.Dropdown>
              </Menu>
            </li>
            <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
              <Menu trigger="hover" openDelay={100} closeDelay={100}>
                <Menu.Target>
                  <Link to="/categories" state={"kitchen"}>
                    <div className="cursor-pointer">Kitchen & Dining</div>
                  </Link>
                </Menu.Target>

                <Menu.Dropdown>
                  {KitchenAndDining.map(({ name, link }) => {
                    return (
                      <Link to={link} className="cursor-pointer">
                        <Menu.Item>
                          <div className="flex justify-center text-[15px] font-ubuntu p-2 text-[#000000] w-[200px] ">
                            {name}
                          </div>
                        </Menu.Item>
                      </Link>
                    );
                  })}
                </Menu.Dropdown>
              </Menu>
            </li>
            <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
              <Menu trigger="hover" openDelay={100} closeDelay={100}>
                <Menu.Target>
                  <Link to="/categories" state={"lamps"}>
                    <div className="cursor-pointer">Lamps & Lighting</div>
                  </Link>
                </Menu.Target>

                <Menu.Dropdown>
                  {LampAndLighting.map(({ name, link }) => {
                    return (
                      <Link to={link} className="cursor-pointer">
                        <Menu.Item>
                          <div className="flex justify-center text-[15px] font-ubuntu p-2 text-[#000000] w-[200px] ">
                            {name}
                          </div>
                        </Menu.Item>
                      </Link>
                    );
                  })}
                </Menu.Dropdown>
              </Menu>
            </li>
            <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
              <Menu trigger="hover" openDelay={100} closeDelay={100}>
                <Menu.Target>
                  <Link to="/categories" state={"home"}>
                    <div className="cursor-pointer">Home Utility</div>
                  </Link>
                </Menu.Target>

                <Menu.Dropdown>
                  {HomeUtility.map(({ name, link }) => {
                    return (
                      <Link to={link} className="cursor-pointer">
                        <Menu.Item>
                          <div className="flex justify-center text-[15px] font-ubuntu p-2 text-[#000000] w-[200px] ">
                            {name}
                          </div>
                        </Menu.Item>
                      </Link>
                    );
                  })}
                </Menu.Dropdown>
              </Menu>
            </li>
            <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
              <Menu trigger="hover" openDelay={100} closeDelay={100}>
                <Menu.Target>
                  <Link to="/categories" state={"appliances"}>
                    <div className="cursor-pointer">Appliances</div>
                  </Link>
                </Menu.Target>

                <Menu.Dropdown>
                  {Furniture.map(({ name, link }) => {
                    return (
                      <Link to={link} className="cursor-pointer">
                        <Menu.Item>
                          <div className="flex justify-center text-[15px] font-ubuntu p-2 text-[#000000] w-[200px] ">
                            {name}
                          </div>
                        </Menu.Item>
                      </Link>
                    );
                  })}
                </Menu.Dropdown>
              </Menu>
            </li>
            <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
              <Menu trigger="hover" openDelay={100} closeDelay={100}>
                <Menu.Target>
                  <Link to="#">
                    <div className="cursor-pointer">Modular</div>
                  </Link>
                </Menu.Target>
              </Menu>
            </li>
            <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
              <Menu trigger="hover" openDelay={100} closeDelay={100}>
                <Menu.Target>
                  <Link to="#">
                    <div className="cursor-pointer">Gift Cards</div>
                  </Link>
                </Menu.Target>
              </Menu>
            </li>
          </div>
        </nav>
      )}
      {userData === null && (
        <nav className="">
          <div className="ml-20 mr-20 h-16 flex justify-between">
            <div className="hamburger">
              <MobileNavbar />
            </div>
            <div>
              <div className="searchbar h-16 flex gap-2 justify-left items-center w-[300px] cursor-pointer">
                <Input underlined placeholder="Search" color="warning" />
                <button className="h-10 " onClick={HandleSearch}>
                  <FiSearch className="h-5 w-5" />
                </button>
              </div>
            </div>
            <Link to="/" className="mt-[10px]">
              <div className="pclogo flex justify-center items-center">
                <PcLogo />
              </div>
              <div className="mobile-logo ">
                <MobileLogo />
              </div>
            </Link>
            <div className="right-div-navbar flex items-center gap-5">
              <div className="mr-[-15px] login-signup-popup">
                <div className="w-[50%] h-[5px] mt-[-27px]">
                  {showLogin ? <Login /> : <Signup />}
                </div>
              </div>
              <div className="notification-div flex items-center cursor-pointer bg-white ml-[-12px] mr-[-12px]">
                <Notification />
              </div>
              <div className="wishlist-div flex items-center cursor-pointer">
                <Link to="/categories" state={"furniture"}>
                  <AiOutlineHeart className="h-8 w-10" />
                </Link>
              </div>
              <div className="flex items-center cursor-pointer">
                <Link to="/cart">
                  <FiShoppingCart className="h-8 w-10" />
                </Link>
              </div>
            </div>
          </div>
          <div className="categories-div flex justify-center gap-5">
            {divTwoData.map(({ name, link }) => {
              return (
                <li className="text-[12px] text-[#404145] hover:text-[#595a60] transition-all none list-none p-3 font-ubuntu">
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </div>
          <div className="categories flex justify-center gap-5 bg-[#323232c6] mb-5">
            <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu">
              <Menu trigger="hover" openDelay={100} closeDelay={100}>
                <Menu.Target>
                  <Link to="/categories" state={"furniture"}>
                    <div className="cursor-pointer">Furniture</div>
                  </Link>
                </Menu.Target>

                <Menu.Dropdown>
                  {Furniture.map(({ name, link }) => {
                    return (
                      <Link
                        to="/products"
                        state={{
                          categoryName: "furniture",
                          itemName: link,
                        }}
                        onClick={() => setStorage("furniture", link)}
                        className="cursor-pointer"
                      >
                        <Menu.Item>
                          <div className="flex justify-center text-[15px] font-ubuntu p-2 text-[#000000] w-[200px] ">
                            {name}
                          </div>
                        </Menu.Item>
                      </Link>
                    );
                  })}
                </Menu.Dropdown>
              </Menu>
            </li>
            <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
              <Menu trigger="hover" openDelay={100} closeDelay={100}>
                <Menu.Target>
                  <Link to="/categories" state={"sofa_seating"}>
                    <div className="cursor-pointer">Sofa and Seating</div>
                  </Link>
                </Menu.Target>

                <Menu.Dropdown>
                  {SofaAndSeating.map(({ name, link }) => {
                    return (
                      <Link to={link} className="cursor-pointer">
                        <Menu.Item>
                          <div className="flex justify-center text-[15px] font-ubuntu p-2 text-[#000000] w-[200px] ">
                            {name}
                          </div>
                        </Menu.Item>
                      </Link>
                    );
                  })}
                </Menu.Dropdown>
              </Menu>
            </li>
            <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
              <Menu trigger="hover" openDelay={100} closeDelay={100}>
                <Menu.Target>
                  <Link to="/categories" state={"matress"}>
                    <div className="cursor-pointer">Matresses</div>
                  </Link>
                </Menu.Target>

                <Menu.Dropdown>
                  {Matresses.map(({ name, link }) => {
                    return (
                      <Link to={link} className="cursor-pointer">
                        <Menu.Item>
                          <div className="flex justify-center text-[15px] font-ubuntu p-2 text-[#000000] w-[200px] ">
                            {name}
                          </div>
                        </Menu.Item>
                      </Link>
                    );
                  })}
                </Menu.Dropdown>
              </Menu>
            </li>
            <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
              <Menu trigger="hover" openDelay={100} closeDelay={100}>
                <Menu.Target>
                  <Link to="/categories" state={"home_decor"}>
                    <div className="cursor-pointer">Home Decor</div>
                  </Link>
                </Menu.Target>

                <Menu.Dropdown>
                  {HomeDecor.map(({ name, link }) => {
                    return (
                      <Link to={link} className="cursor-pointer">
                        <Menu.Item>
                          <div className="flex justify-center text-[15px] font-ubuntu p-2 text-[#000000] w-[200px] ">
                            {name}
                          </div>
                        </Menu.Item>
                      </Link>
                    );
                  })}
                </Menu.Dropdown>
              </Menu>
            </li>
            <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
              <Menu trigger="hover" openDelay={100} closeDelay={100}>
                <Menu.Target>
                  <Link to="/categories" state={"furnishing"}>
                    <div className="cursor-pointer">Furnishing</div>
                  </Link>
                </Menu.Target>

                <Menu.Dropdown>
                  {Furnishings.map(({ name, link }) => {
                    return (
                      <Link to={link} className="cursor-pointer">
                        <Menu.Item>
                          <div className="flex justify-center text-[15px] font-ubuntu p-2 text-[#000000] w-[200px] ">
                            {name}
                          </div>
                        </Menu.Item>
                      </Link>
                    );
                  })}
                </Menu.Dropdown>
              </Menu>
            </li>
            <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
              <Menu trigger="hover" openDelay={100} closeDelay={100}>
                <Menu.Target>
                  <Link to="/categories" state={"kitchen"}>
                    <div className="cursor-pointer">Kitchen & Dining</div>
                  </Link>
                </Menu.Target>

                <Menu.Dropdown>
                  {KitchenAndDining.map(({ name, link }) => {
                    return (
                      <Link to={link} className="cursor-pointer">
                        <Menu.Item>
                          <div className="flex justify-center text-[15px] font-ubuntu p-2 text-[#000000] w-[200px] ">
                            {name}
                          </div>
                        </Menu.Item>
                      </Link>
                    );
                  })}
                </Menu.Dropdown>
              </Menu>
            </li>
            <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
              <Menu trigger="hover" openDelay={100} closeDelay={100}>
                <Menu.Target>
                  <Link to="/categories" state={"lamps"}>
                    <div className="cursor-pointer">Lamps & Lighting</div>
                  </Link>
                </Menu.Target>

                <Menu.Dropdown>
                  {LampAndLighting.map(({ name, link }) => {
                    return (
                      <Link to={link} className="cursor-pointer">
                        <Menu.Item>
                          <div className="flex justify-center text-[15px] font-ubuntu p-2 text-[#000000] w-[200px] ">
                            {name}
                          </div>
                        </Menu.Item>
                      </Link>
                    );
                  })}
                </Menu.Dropdown>
              </Menu>
            </li>
            <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
              <Menu trigger="hover" openDelay={100} closeDelay={100}>
                <Menu.Target>
                  <Link to="/categories" state={"home"}>
                    <div className="cursor-pointer">Home Utility</div>
                  </Link>
                </Menu.Target>

                <Menu.Dropdown>
                  {HomeUtility.map(({ name, link }) => {
                    return (
                      <Link to={link} className="cursor-pointer">
                        <Menu.Item>
                          <div className="flex justify-center text-[15px] font-ubuntu p-2 text-[#000000] w-[200px] ">
                            {name}
                          </div>
                        </Menu.Item>
                      </Link>
                    );
                  })}
                </Menu.Dropdown>
              </Menu>
            </li>
            <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
              <Menu trigger="hover" openDelay={100} closeDelay={100}>
                <Menu.Target>
                  <Link to="/categories" state={"appliances"}>
                    <div className="cursor-pointer">Appliances</div>
                  </Link>
                </Menu.Target>

                <Menu.Dropdown>
                  {Furniture.map(({ name, link }) => {
                    return (
                      <Link to={link} className="cursor-pointer">
                        <Menu.Item>
                          <div className="flex justify-center text-[15px] font-ubuntu p-2 text-[#000000] w-[200px] ">
                            {name}
                          </div>
                        </Menu.Item>
                      </Link>
                    );
                  })}
                </Menu.Dropdown>
              </Menu>
            </li>
            <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
              <Menu trigger="hover" openDelay={100} closeDelay={100}>
                <Menu.Target>
                  <Link to="#">
                    <div className="cursor-pointer">Modular</div>
                  </Link>
                </Menu.Target>
              </Menu>
            </li>
            <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
              <Menu trigger="hover" openDelay={100} closeDelay={100}>
                <Menu.Target>
                  <Link to="#">
                    <div className="cursor-pointer">Gift Cards</div>
                  </Link>
                </Menu.Target>
              </Menu>
            </li>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
