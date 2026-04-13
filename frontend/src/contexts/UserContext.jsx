import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './AuthContext';
import axios from 'axios';

export const userDataContext = createContext();

function UserContext({children}) {

    let [userdata, setUserdata] = useState(null);
    let { serverUrl } = useContext(authDataContext);

    let value = {
        userdata, setUserdata
    }

    const getUserData = async () => {
      try {
        const result = await axios.get(serverUrl + "/api/get/user", {withCredentials: true});
        
        setUserdata(result.data)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      getUserData();
    }, [])

  return (
    <userDataContext.Provider value = {value}>
        {children}
    </userDataContext.Provider>
  )
}

export default UserContext