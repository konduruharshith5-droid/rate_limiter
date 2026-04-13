import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { authDataContext } from '../contexts/AuthContext';

function SignUp() {

  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let { serverUrl } = useContext(authDataContext)

  const HandleSingup = async () => {
    try {
      let result = await axios.post(serverUrl + "/api/auth/signup", {
        name, 
        email, 
        password
      }, {withCredentials: true})
      
      setName("")
      setEmail("")
      setPassword("")

    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <>
        <div className='w-[100%] h-[100vh] flex items-center justify-center'>
            <div className='w-[400px] h-[350px] border-2 border-[black] rounded-lg bg-pink-100'>

              <h1 className='my-[15px] mx-[100px] text-[25px]'>Sign Up Page</h1>
              <div className='my-[60px] mx-[15px]'>
                <div className='my-[20px]'>
                  <label htmlFor='name' className='mx-[10px] text-[19px]'>Name:</label>
                  <input type="text" id='name' className='border-2 border-[black] rounded-lg' value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className='my-[20px]'>
                  <label htmlFor='email' className='mx-[10px] text-[19px]'>Email:</label>
                  <input type="text" id='emil' className='border-2 border-[black] rounded-lg' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='my-[20px]'>
                  <label htmlFor='password' className='mx-[10px] text-[19px]'>Password:</label>
                  <input type="text" className='border-2 border-[black] rounded-lg' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className='mx-[40px]'>Created Your Account? <Link to="/login" className='text-[blue]'>Login</Link></div>

                <div className='flex items-center justify-center my-[20px] cursor-pointer'>
                  <button className='border-2 border-black bg-[green] text-[white] px-[15px]' onClick={HandleSingup}>Sign Up</button>
                </div>

              </div>
            </div>
        </div>
    </>
  )
}

export default SignUp;