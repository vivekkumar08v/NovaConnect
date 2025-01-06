import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'


export const AppContext = createContext();

const AppContextProvider =(props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [consultants, setConsultant] = useState([])
    const [token, setToken] = useState(localStorage.getItem('token')? localStorage.getItem('token') : false)
    const [userData, setUserData] = useState(false)

    // console.log(backendUrl)

 

    const getConsultantsData = async() =>{
        try {
            
            const {data} = await axios.get(`${backendUrl}/api/consultant/list`)

            // console.log(data)

            if(data.success)
            {   
                // console.log('Consultants:', data.consultants);
                setConsultant(data.consultants)
                toast.success(data.message)
            }
            else
            {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const loadUserProfileData = async() => {
        try {
            
            const {data} = await axios.get(backendUrl + '/api/user/get-profile', {headers:{token}})

            if(data.success){
                setUserData(data.userData)
            }
            else{
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        // console.log('useEffect triggered');
        getConsultantsData()

    },[])

    useEffect(()=>{
        if(token)
        {
            loadUserProfileData()
        }
        else{
            setUserData(false)
        }
    },[token])

    const value ={
        consultants, getConsultantsData,
        token,setToken,
        backendUrl,
        userData,setUserData,
        loadUserProfileData
    };

    return(
     
        <AppContext.Provider value={value}>
            {props.children} 
        </AppContext.Provider>
    )
};

export default AppContextProvider