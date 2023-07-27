import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { UserContext } from '../../../UserContext'
import axios from 'axios';
import { Button, Loading } from "@nextui-org/react";
import { Card, Text } from "@nextui-org/react";
import { height } from "@mui/system";
import { LuEdit } from "react-icons/lu";
import { BiError } from "react-icons/bi";
import { Link, Navigate } from "react-router-dom";
import {TbTruckDelivery} from "react-icons/tb"
import {RiExchangeFill}from "react-icons/ri";
import {GrCodeSandbox}from "react-icons/gr";
import "../ProfileActions/CSS/ProfilePage.css"
import "./SpecificProduct.css";
const SpecificProduct = () => {
  const {userData}=useContext(UserContext);
  const id="64c209d405003fcc61f5a487";
  const paymentAdded=true;
  const addressAdded=true
  const score=50;
  const [product,setProduct]=useState('');
  const [productName,setProductName]=useState('');
  const [productDescription,setProductDescription]=useState('');
  const [productPrice,setProductPrice]=useState('');
  const [productimageURL,setProductimageURL]=useState('');
    const getProductDetails=async()=>{
        const {data}=await axios.post('/specificproduct',{id});
        //console.log(data[0]);
        localStorage.setItem("data",JSON.stringify(data[0]));
    }
    const productDataLocal=JSON.parse(localStorage.getItem("data"));
    
    useEffect(()=>{
        getProductDetails();
        setProductName(productDataLocal.name);
        setProductimageURL(productDataLocal.imageURL);
        setProductPrice(productDataLocal.price);
        setProductDescription(productDataLocal.description)
    },[])
    
   // console.log(productName)
    return (
    <>
    <Navbar/>
    <div>
        {productDataLocal!==null && <>
        <div className='main-div flex justify-center gap-5'>
            <div className='flex justify-center'>
                <img src={productimageURL} alt="error" className='image h-[60vh] w-[30vw]'/>
            </div>
            <div className="details-div1 flex flex-row justify-center gap-20 items-center">
                <div className="flex flex-col justify-center gap-7 w-[40vw]">
                  <div>
                    <Card
                      className="card-css"
                      isPressable
                      variant="bordered"
                      css={{
                        width: "auto",
                        height: "auto",
                        borderRadius: "0px",
                      }}
                    >
                      <Card.Body>
                        <Text>
                          <div className="flex flex-col gap-5">
                            <div className="font-ubuntu font-[10px]">Product Details</div>
                            <div className="flex flex-col gap-3">
                              <div className="namediv flex justify-between">
                                <span className='font-ubuntu text-2xl'>{productName}</span>
                                
                              </div>
                              <div className="namediv flex justify-between">
                              <span className="font-ubuntu text-xl text-green-600">₹ {productPrice}</span>
                              </div>
                              <div className="namediv flex justify-between">
                                <span>Product Description - {productDescription}</span>
                                
                              </div>
                            </div>
                          </div>
                        </Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div>
                    {addressAdded &&(
                      <Card
                        isPressable
                        variant="bordered"
                        css={{
                          width: "auto",
                          height: "auto",
                          borderRadius: "0px",
                        }}
                      >
                            <Card.Body>
                          <Text>
                            <div className=" flex flex-col gap-5">
                              <div className="font-ubuntu">Enjoy Seemless services from Pepperfry</div>
                              <div className="flex flex-col gap-3">
                                <div className="flex justify-between">
                                  <div className="font-ubuntu flex justify-center">
                                    <div><TbTruckDelivery className='h-[5vh] w-[5vw]'/></div>
                                    <div>Fast Delivery</div>
                                  </div>
                                  <div className="font-ubuntu flex justify-center">
                                    <div><RiExchangeFill className='h-[5vh] w-[5vw]'/></div>
                                    <div>7 days Exchange policy</div>
                                  </div>
                                  <div className="font-ubuntu flex justify-center">
                                    <div><GrCodeSandbox className='h-[5vh] w-[5vw]'/></div>
                                    <div>Cash on Delivery</div>
                                  </div>
                                </div>
                                <div className="flex justify-between">
                                  <span className="font-ubuntu">
                                    
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="font-ubuntu">
                                   
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="add-view-div button-div flex justify-end gap-2">
                              <div>
                                <Link to="#">
                                <Button
                                  shadow
                                  auto
                                  css={{
                                    backgroundColor: "#FF7035",
                                    color: "white",
                                    boxShadow: "none",
                                    border: "2px solid #FF7035",
                                    borderRadius: "0px",
                                  }}
                                >
                                  Buy Now
                                </Button>
                                </Link>
                              </div>
                              <div>
                                <Link to="#">
                                <Button
                                  shadow
                                  auto
                                  css={{
                                    backgroundColor: "white",
                                    color: "#FF7035",
                                    boxShadow: "none",
                                    border: "2px solid #FF7035",
                                    borderRadius: "0px",
                                  }}
                                >
                                  Add to Cart
                                </Button>
                                </Link>
                              </div>
                            </div>
                          </Text>
                        </Card.Body>
                      </Card>
                    )}
                  </div>
                </div>
              </div>
        </div>
        </>}
        {productDataLocal===null && <>
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
        </>}
    </div>
    </>
  )
}

export default SpecificProduct
