import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useEffect } from "react";
import { useState } from "react";
export const UserContext=createContext({});
export function UserContextProvider({children}){
    useEffect(()=>{
        if(!userData){
            const token = Cookies.get('token');
            const {data} = axios.post('/checkuser',{token}).then(({data})=>{
                setUserData(data);
            });
        } 
        },[]);
    const [userData,setUserData]=useState('');
    return(
        <UserContext.Provider value = {{userData,setUserData}}>
        {children}
        </UserContext.Provider>
    )
}