import axios from "axios";
import { createContext, useEffect } from "react";
import { useState } from "react";
export const UserContext=createContext({});
export function UserContextProvider({children}){
    useEffect(()=>{
        if(!userData){
            
            const {data} = axios.get('/checkuser').then(({data})=>{
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