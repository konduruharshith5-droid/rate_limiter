import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { authDataContext } from '../contexts/AuthContext';
import { userDataContext } from '../contexts/UserContext';

function Login() {

    let navigate = useNavigate();
    let { serverUrl } = useContext(authDataContext);
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let { userdata, setUserdata } = useContext(userDataContext)

    const HandleLogin = async (e) => {
        e.preventDefault()

        try {
            const result = await axios.post(serverUrl + "/api/auth/login", {
                email, 
                password
            }, {withCredentials: true})
            
            setUserdata(result.data)
            navigate("/")
            setEmail("")
            setPassword("")
        } catch (error) {
            setUserdata(null)
            console.log(error.response)
        }
    }

  return (
    <>
        <div className='w-full h-[100vh] flex items-center justify-center'>
            <div className='w-[400px] h-[350px] bg-pink-100 border-2 rounded-lg border-[black]'>
                <div className='my-[60px] mx-[15px]'>

                    <h1 className='text-[30px] mx-[150px]'>Login</h1>

                    <div className='my-[20px]'>
                        <label htmlFor='email'>Email: </label>
                        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className='border-2 rounded-lg outline-none' />
                    </div>

                    <div className='my-[20px]'>
                        <label htmlFor='password'>Password: </label>
                        <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className='border-2 rounded-lg outline-none' />
                    </div>

                    <div className='flex items-center justify-center'>Create Account! <h3 className='text-[blue] mx-[5px] cursor-pointer' onClick={() => navigate("/signup")}>Sign Up</h3> </div>

                    <div className='flex items-center justify-center my-[20px]'>
                        <button className='border-2 border-black bg-[green] text-[white] px-[15px] rounded-lg' onClick={HandleLogin} >Login</button>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Login;