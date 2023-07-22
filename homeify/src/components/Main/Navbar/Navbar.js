import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "@mantine/core";
import { Input } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [isActiveInput, setIsActiveInput] = useState(false);
  const handleInput = () => {
    setIsActiveInput(true);
    setTimeout(() => {
      setIsActiveInput(false);
    }, 5000);
  };
  const HandleSearch = () => {
    setIsActiveInput(false);
  };
  const divTwoData = [
    { name: "SELL ON PEPPERFRY", link: "#" },
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
    { name: "Sofas", link: "#" },
    { name: "Chairs", link: "#" },
    { name: "Wardrobe", link: "#" },
    { name: "Recliners", link: "#" },
    { name: "Sofa Chairs", link: "#" },
    { name: "Tables", link: "#" },
    { name: "Decorations", link: "#" },
    { name: "Tv-Unit", link: "#" },
  ];
  const SofaAndSeating = [
    { name: "Sofa", link: "#" },
    { name: "Recilner", link: "#" },
    { name: "Office Chairs", link: "#" },
    { name: "Gaming Chairs", link: "#" },
    { name: "Dining Chairs", link: "#" },
    { name: "Bean Bags", link: "#" },
    { name: "L-Shape Sofa", link: "#" },
    { name: "Sofa Sets", link: "#" },
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
    { name: "Vases", link: "#" },
    { name: "Show-Pieces", link: "#" },
    { name: "Photo-frames", link: "#" },
    { name: "Figurines", link: "#" },
    { name: "Candles", link: "#" },
    { name: "Candle-Stands", link: "#" },
    { name: "Pots", link: "#" },
    { name: "Idols", link: "#" },
    { name: "Flowers", link: "#" },
    { name: "All", link: "#" },
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
  return (
    <nav>
      <div className="ml-20 mr-20 h-16 flex justify-between">
        <div>
          <div className="h-16 flex gap-2 justify-left items-center w-[300px] cursor-pointer">
            <Input underlined placeholder="Search" color="warning" />
            <button className="h-10 " onClick={HandleSearch}>
              <FiSearch className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <svg
            className="h-10 cursor-pointer"
            width="219"
            height="47"
            viewBox="0 0 219 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M168.907 0C168.801 0 168.696 0.00123685 168.591 0.00371054C166.328 0.0952372 164.783 0.696345 163.87 1.83919C162.534 3.51388 162.559 6.34379 162.584 9.33943C162.588 9.7649 162.592 10.1966 162.592 10.6307V10.9486H160.292V16.0159H162.592V36.9817H168.472V16.0172H170.281C172.85 16.0172 174.738 13.9046 174.865 10.9486H168.472V7.54724C168.472 5.94676 169.488 4.91152 171.058 4.91152C172.307 4.91152 173.808 5.61157 174.514 6.95479C175.542 5.62147 175.812 4.2931 175.292 3.09088C174.493 1.24179 171.927 0 168.907 0ZM188.25 10.278C186.26 10.3745 184.499 11.7696 183.411 14.1085L182.821 15.3763V10.8964H177.841V36.9815H183.72V26.5091C183.72 25.1535 183.72 23.4665 183.821 21.8128C184.149 17.986 186.998 15.9267 189.51 15.9267C190.868 15.9267 191.951 16.5315 192.495 17.5667C193.464 16.6045 193.785 15.0089 193.288 13.4616C192.644 11.4604 190.921 10.2644 188.68 10.2644C188.54 10.2644 188.396 10.2693 188.25 10.278ZM152.001 10.278C150.012 10.3745 148.249 11.7696 147.162 14.1085L146.572 15.3763V10.8964H141.591V36.9815H147.471V26.5091C147.471 25.1535 147.471 23.4665 147.572 21.8128C147.901 17.986 150.75 15.9267 153.263 15.9267C154.618 15.9267 155.703 16.5315 156.246 17.5667C157.216 16.6045 157.538 15.0089 157.041 13.4616C156.396 11.4604 154.674 10.2644 152.431 10.2644C152.291 10.2644 152.147 10.2693 152.001 10.278ZM115.369 29.8198C117.413 34.7301 121.745 37.5452 127.255 37.5452C132.095 37.5452 135.535 35.8235 138.046 32.1315L133.318 29.7716C131.678 31.4104 129.461 32.3467 127.198 32.3467C126.713 32.3467 126.228 32.3029 125.75 32.2156C122.273 31.612 119.734 27.8953 119.845 23.5701C119.943 18.9937 123.208 15.3698 127.438 15.1422C127.572 15.136 127.706 15.1311 127.837 15.1311C131.055 15.1311 133.39 17.3401 133.473 19.3227C133.542 20.9714 132.124 22.0858 129.681 22.3035C128.933 22.379 128.039 22.4581 127.134 22.4581C125.058 22.4581 123.453 22.0203 122.248 21.1199C121.789 22.5373 121.902 23.8236 122.582 24.8613C123.574 26.3703 125.681 27.2361 128.369 27.2361C129.584 27.2361 130.883 27.0604 132.229 26.7141C137.418 25.3981 138.843 21.4217 138.488 18.4161C138.025 14.4965 134.485 10.2777 127.805 10.2777C123.716 10.2777 120.193 11.6852 117.881 14.238C114.221 18.1811 113.19 24.588 115.369 29.8211V29.8198ZM32.6413 14.238C28.9803 18.1811 27.9486 24.588 30.1289 29.8223C32.1728 34.7301 36.5054 37.5452 42.0132 37.5452C46.8555 37.5452 50.2938 35.8235 52.805 32.1315L48.077 29.7716C46.4382 31.4104 44.2202 32.3467 41.9597 32.3467C41.4706 32.3467 40.9839 32.3034 40.5106 32.2156C37.0334 31.612 34.493 27.8953 34.6037 23.5701C34.7035 18.9937 37.9678 15.3698 42.1981 15.1422C42.332 15.136 42.4658 15.1311 42.596 15.1311C45.814 15.1311 48.1488 17.3401 48.2316 19.3227C48.3009 20.9714 46.8835 22.0858 44.4404 22.3035C43.6922 22.379 42.8004 22.4581 41.894 22.4581C39.8183 22.4581 38.2136 22.0203 37.0079 21.1199C36.548 22.5373 36.6623 23.8236 37.3424 24.8613C38.3328 26.3703 40.4413 27.2361 43.1289 27.2361C44.3431 27.2361 45.6425 27.0604 46.9893 26.7141C52.176 25.3981 53.6031 21.4217 53.2478 18.4161C52.7843 14.4965 49.2438 10.2777 42.5631 10.2777C38.4751 10.2777 34.9517 11.6852 32.6413 14.238ZM91.6502 13.8364L91.1246 14.3757V11.0399L90.9555 11.0374C88.229 11.0374 85.2932 12.6144 85.2932 16.0776V47H91.1246V26.3026C91.1246 23.1486 91.8121 15.8104 98.1837 15.8104C103.176 15.8104 105.45 19.9873 105.45 23.8673C105.45 27.9179 102.953 32.0181 98.1837 32.0181C97.0425 32.0181 94.3707 31.8264 92.8657 30.1517C92.497 31.2846 92.5433 33.0335 93.3706 34.514C94.0909 35.8016 95.6604 37.365 99.0439 37.4948C99.1497 37.4985 99.2568 37.501 99.3639 37.501C102.381 37.501 105.39 36.1157 107.62 33.6977C109.976 31.1449 111.273 27.699 111.273 23.9922C111.273 15.1413 105.244 10.3658 99.5719 10.3658C96.6568 10.3658 93.8439 11.599 91.6515 13.8364H91.6502ZM62.7102 13.8364L62.181 14.3757V11.0399L62.0143 11.0374C59.2866 11.0374 56.3508 12.6144 56.3508 16.0776V47H62.181V26.3026C62.181 23.1486 62.8696 15.8104 69.2413 15.8104C74.2345 15.8104 76.5084 19.9873 76.5084 23.8673C76.5084 27.9179 74.0118 32.0181 69.2413 32.0181C68.1001 32.0181 65.4283 31.8264 63.9245 30.1517C63.5558 31.2846 63.6021 33.0323 64.4282 34.5116C65.1484 35.8016 66.7179 37.365 70.1027 37.4961C70.2073 37.4985 70.3144 37.501 70.4214 37.501C73.4388 37.501 76.4476 36.1157 78.6789 33.6977C81.0344 31.1461 82.3313 27.699 82.3313 23.9922C82.3313 15.1413 76.3028 10.3658 70.6295 10.3658C67.7156 10.3658 64.9027 11.599 62.7102 13.8364ZM6.35949 13.8364L5.83146 14.3757V11.0399L5.66356 11.0374C2.9358 11.0374 0 12.6157 0 16.0788V47H5.83146V26.3026C5.83146 23.1486 6.51887 15.8104 12.8905 15.8104C17.8825 15.8104 20.1564 19.9873 20.1564 23.8673C20.1564 27.9179 17.6598 32.0181 12.8905 32.0181C11.7493 32.0181 9.07629 31.8264 7.57128 30.1517C7.20385 31.2846 7.2513 33.0335 8.07741 34.514C8.79768 35.8016 10.366 37.365 13.7531 37.4948C13.8566 37.4985 13.9648 37.501 14.0719 37.501C17.0868 37.501 20.0968 36.1157 22.3282 33.6977C24.6836 31.1449 25.9806 27.699 25.9806 23.9922C25.9806 15.1413 19.9508 10.3658 14.2787 10.3658C11.3636 10.3658 8.55191 11.599 6.35827 13.8364H6.35949ZM213.171 10.948C213.175 13.5739 213.195 31.5724 213.195 33.7035C213.195 38.6361 210.598 41.2483 205.473 41.4722C205.364 41.4759 205.254 41.4784 205.147 41.4784C202.293 41.4784 198.595 40.2254 196.775 37.4932C196.231 39.9273 196.55 41.9743 197.727 43.5872C199.285 45.7244 202.36 46.9502 206.161 46.9502C214.321 46.9502 219 42.2526 219 34.0622V10.9493H213.172L213.171 10.948ZM196.571 10.948V28.0499C196.571 30.9899 197.277 33.1704 198.734 34.7165C200.374 36.4456 202.537 37.3609 204.986 37.3609C205.188 37.3609 205.39 37.3547 205.592 37.3423C208.799 37.1296 210.686 36.0931 211.36 34.1748C212.16 31.7505 211.228 29.9237 210.433 29.1754C210.421 29.8013 210.232 30.3405 209.866 30.7833C209.23 31.5564 208.108 31.9645 206.625 31.9645C204.708 31.9645 203.282 30.6807 202.711 28.4395C202.166 26.369 202.239 18.0871 202.285 13.1372L202.301 10.948H196.571Z"
              fill="url(#paint0_linear_2590_55115)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2590_55115"
                x1="0"
                y1="47"
                x2="219"
                y2="47"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#EE2224" />
                <stop offset="1" stop-color="#F16521" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex items-center gap-5">
          <Menu trigger="hover" openDelay={100} closeDelay={400}>
            <Menu.Target>
              <div className="cursor-pointer">
                <div className="flex flex-row justify-center items-center gap-1 ">
                  <div className="flex flex-row justify-center gap-2">
                    <div className="flex flex-col justify-center">
                      <div className="text-[12px] flex justify-end font-ubuntu">
                        Sign up Now
                      </div>
                      <div className="text-[#ff7035] text-[13px] font-semibold font-ubuntu">
                        Get 5,001 Credits
                      </div>
                    </div>
                  </div>
                  <div>
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

          <div className="flex items-center cursor-pointer">
            <GrNotification className="h-7 w-8" />
          </div>
          <div className="flex items-center cursor-pointer">
            <AiOutlineHeart className="h-8 w-10" />
          </div>
          <div className="flex items-center cursor-pointer">
            <FiShoppingCart className="h-8 w-10" />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-5">
        {divTwoData.map(({ name, link }) => {
          return (
            <li className="text-[12px] text-[#404145] hover:text-[#595a60] transition-all none list-none p-3 font-ubuntu">
              <Link href={link}>{name}</Link>
            </li>
          );
        })}
      </div>
      <div className="flex justify-center gap-5 bg-[#323232c6] mb-5">
        <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu">
          <Menu trigger="hover" openDelay={100} closeDelay={100}>
            <Menu.Target>
              <div className="cursor-pointer">Furniture</div>
            </Menu.Target>

            <Menu.Dropdown>
              {Furniture.map(({ name, link }) => {
                return (
                  <Menu.Item>
                    <div className="flex justify-center text-[15px] font-ubuntu p-2 text-[#000000] w-[200px] ">
                      <Link to={link} className="cursor-pointer">
                        {name}
                      </Link>
                    </div>
                  </Menu.Item>
                );
              })}
            </Menu.Dropdown>
          </Menu>
        </li>
        <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
          <Menu trigger="hover" openDelay={100} closeDelay={100}>
            <Menu.Target>
              <div className="cursor-pointer">Sofa and Seating</div>
            </Menu.Target>

            <Menu.Dropdown>
              {SofaAndSeating.map(({ name, link }) => {
                return (
                  <Menu.Item>
                    <div className="flex justify-center text-[15px] font-ubuntu p-2 text-[#000000] w-[200px] ">
                      <Link to={link} className="cursor-pointer">
                        {name}
                      </Link>
                    </div>
                  </Menu.Item>
                );
              })}
            </Menu.Dropdown>
          </Menu>
        </li>
        <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
          <Menu trigger="hover" openDelay={100} closeDelay={100}>
            <Menu.Target>
              <div className="cursor-pointer">Matresses</div>
            </Menu.Target>

            <Menu.Dropdown>
              {Matresses.map(({ name, link }) => {
                return (
                  <Menu.Item>
                    <div className="flex justify-center text-[15px] font-ubuntu p-2 text-[#000000] w-[200px] ">
                      <Link to={link} className="cursor-pointer">
                        {name}
                      </Link>
                    </div>
                  </Menu.Item>
                );
              })}
            </Menu.Dropdown>
          </Menu>
        </li>
        <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
          <Menu trigger="hover" openDelay={100} closeDelay={100}>
            <Menu.Target>
              <div className="cursor-pointer">Home Decor</div>
            </Menu.Target>

            <Menu.Dropdown>
              {HomeDecor.map(({ name, link }) => {
                return (
                  <Menu.Item>
                    <div className="flex justify-center text-[15px] font-ubuntu p-2 text-[#000000] w-[200px] ">
                      <Link to={link} className="cursor-pointer">
                        {name}
                      </Link>
                    </div>
                  </Menu.Item>
                );
              })}
            </Menu.Dropdown>
          </Menu>
        </li>
        <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
          <Menu trigger="hover" openDelay={100} closeDelay={100}>
            <Menu.Target>
              <div className="cursor-pointer">Furnishing</div>
            </Menu.Target>

            <Menu.Dropdown>
              {Furnishings.map(({ name, link }) => {
                return (
                  <Menu.Item>
                    <div className="flex justify-center text-[15px] font-ubuntu p-2 text-[#000000] w-[200px] ">
                      <Link to={link} className="cursor-pointer">
                        {name}
                      </Link>
                    </div>
                  </Menu.Item>
                );
              })}
            </Menu.Dropdown>
          </Menu>
        </li>
        <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
          <Menu trigger="hover" openDelay={100} closeDelay={100}>
            <Menu.Target>
              <div className="cursor-pointer">Kitchen & Dining</div>
            </Menu.Target>

            <Menu.Dropdown>
              {KitchenAndDining.map(({ name, link }) => {
                return (
                  <Menu.Item>
                    <div className="flex justify-center text-[15px] font-ubuntu p-2 text-[#000000] w-[200px] ">
                      <Link to={link} className="cursor-pointer">
                        {name}
                      </Link>
                    </div>
                  </Menu.Item>
                );
              })}
            </Menu.Dropdown>
          </Menu>
        </li>
        <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
          <Menu trigger="hover" openDelay={100} closeDelay={100}>
            <Menu.Target>
              <div className="cursor-pointer">Lamps & Lighting</div>
            </Menu.Target>

            <Menu.Dropdown>
              {LampAndLighting.map(({ name, link }) => {
                return (
                  <Menu.Item>
                    <div className="flex justify-center text-[15px] font-ubuntu p-2 text-[#000000] w-[200px] ">
                      <Link to={link} className="cursor-pointer">
                        {name}
                      </Link>
                    </div>
                  </Menu.Item>
                );
              })}
            </Menu.Dropdown>
          </Menu>
        </li>
        <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
          <Menu trigger="hover" openDelay={100} closeDelay={100}>
            <Menu.Target>
              <div className="cursor-pointer">Home Utility</div>
            </Menu.Target>

            <Menu.Dropdown>
              {HomeUtility.map(({ name, link }) => {
                return (
                  <Menu.Item>
                    <div className="flex justify-center text-[15px] font-ubuntu p-2 text-[#000000] w-[200px] ">
                      <Link to={link} className="cursor-pointer">
                        {name}
                      </Link>
                    </div>
                  </Menu.Item>
                );
              })}
            </Menu.Dropdown>
          </Menu>
        </li>
        <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
          <Menu trigger="hover" openDelay={100} closeDelay={100}>
            <Menu.Target>
              <div className="cursor-pointer">Appliances</div>
            </Menu.Target>

            <Menu.Dropdown>
              {Furniture.map(({ name, link }) => {
                return (
                  <Menu.Item>
                    <div className="flex justify-center text-[15px] font-ubuntu p-2 text-[#000000] w-[200px] ">
                      <Link to={link} className="cursor-pointer">
                        {name}
                      </Link>
                    </div>
                  </Menu.Item>
                );
              })}
            </Menu.Dropdown>
          </Menu>
        </li>
        <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
          <Menu trigger="hover" openDelay={100} closeDelay={100}>
            <Menu.Target>
              <div className="cursor-pointer">Modular</div>
            </Menu.Target>
          </Menu>
        </li>
        <li className="text-[15px] text-white transition-all none list-none p-3 font-ubuntu cursor-pointer">
          <Menu trigger="hover" openDelay={100} closeDelay={100}>
            <Menu.Target>
              <div className="cursor-pointer">Gift Cards</div>
            </Menu.Target>
          </Menu>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
