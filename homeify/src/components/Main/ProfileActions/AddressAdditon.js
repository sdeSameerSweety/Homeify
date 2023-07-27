import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { Input,Button,Loading  } from '@nextui-org/react';
import Navbar from '../Navbar/Navbar';
import ProfilePageConatiner from './ProfilePageContainer';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import "./CSS/AddressAddition.css"
const AddressAdditon = () => {
    const {userData}=useContext(UserContext);
    const [buffer,setBuffer]=useState(true);
    const [redirect,setRedirect]=useState(false);
    const [name,setName]=useState('');
    const [address1,setAddress1]=useState('');
    const [address2, setAddress2]=useState('');
    const [city, setCity]=useState('');
    const [phone,setPhone]=useState('');
    const [pincode,setPincode]=useState('');
    const [state,setState]=useState(''); 
    const [submit,setSubmit]=useState(false);
    const[email,setEmail]=useState('');
    const buffering=()=>{
      setTimeout(() => {
        setBuffer(false);
      }, 1000);
    }
    useEffect(()=>{
      buffering();
      if(userData){
        setEmail(userData.email);
      }
      if(userData===null){
        setRedirect(true);
        console.log("setRedirect")
      }
    })
    const handleSubmit=async()=>{
        if(name && address1 && address2 && city && phone && pincode && state){
            const UserAddressAddedData= await axios.post('/address',{name,address1,address2,city,phone,pincode,state,email});
            if(UserAddressAddedData){
              setSubmit(true);
            }
        }
    }
    console.log(redirect)
    
   
    if (submit || redirect) {
      return <Navigate to={"/profile"} />;
    }
    return (
    <>
    <Navbar/>
    <div className="main-div flex flex-row justify-evenly">
      <div className="profile-container flex justify-center">
        <ProfilePageConatiner type="profile" />
      </div>
      {buffer?<div className="w-[80vw] h-[80vh] flex justify-center">
        <Button disabled auto bordered size={45} css={{ px: "$13", border:"none"}}>
          <Loading size="xl" />
        </Button>
        </div>
        :
        <div className="form-div flex flex-col justify-center gap-7 mt-[10px] w-[60vw] mr-[20%]">
            <div className='flex justify-start'>
            <Input label="Full Name" placeholder="" onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='address-div flex justify-between'>
            <Input label="Address Line 1" placeholder="" css={{
                width:"25vw"
            }} onChange={(e)=>setAddress1(e.target.value)}/>
            <Input label="Address Line 2" onChange={(e)=>setAddress2(e.target.value)} placeholder="" css={{
                width:"25vw"}}/>
            </div>
            <div className='flex justify-start'>
            <Input label="Mobile No." placeholder="" css={{
                width:"20vw" 
            }} onChange={(e)=>setPhone(e.target.value)}/>
            </div>
            <div className='city-div flex justify-between'>
            <Input label="Pincode" placeholder="" onChange={(e)=>setPincode(e.target.value)}/>
            <Input label="City" placeholder="" onChange={(e)=>setCity(e.target.value)}/>
            <Input label="State" placeholder="" onChange={(e)=>setState(e.target.value)}/>
            </div>
            <div className='flex justify-center items-center mt-[3%]'>
            <Button shadow color="success" auto onClick={handleSubmit}>
          Submit
        </Button>
            </div>
        </div>}
        </div>
    </>
  )
}

export default AddressAdditon
