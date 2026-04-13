import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { authDataContext } from '../contexts/AuthContext';
import axios from 'axios';
import { userDataContext } from '../contexts/UserContext';

function Nav() {

  let { serverUrl } = useContext(authDataContext)
  let {userdata, setUserdata} = useContext(userDataContext)

  const HandleLogout = async () => {
    try {
      let result = await axios.post(serverUrl + "/api/auth/logout", {}, {withCredentials: true})
      setUserdata(null)
    } catch (error) {
      setUserdata(null)
      console.log(error)
    }
  }

  return (
    <div className='bg-black h-[80px] w-full text-[white] flex items-center justify-around'>
      <div className='text-[25px] '> Rate Limiter </div>
      <div>
        <button className='px-[30px] bg-[green] py-[10px] rounded-lg text-[20px]' onClick={HandleLogout}>Log Out</button>
      </div>
    </div>
  )
}

export default Nav;