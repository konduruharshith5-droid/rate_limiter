import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import axios from 'axios'
import { authDataContext } from '../contexts/AuthContext'

function Home() {

  let [send, setSend] = useState(false)
  let [show, setShow] = useState(false)

  let { serverUrl } = useContext(authDataContext)

  let [title, setTitle] = useState("")
  let [description, setDescription] = useState("")
  let [quotation, setQuotation] = useState(null)

  const createQuote = async () => {
    try {
      let result = await axios.post(serverUrl + "/api/quote/create", {
        title,
        description
      }, {withCredentials: true})

      console.log(result.data) 
      setTitle("")
      setDescription("")
    } catch (error) {
      console.log(error.response)
    }
  }

  const recieveQuote = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/quote/rec", {withCredentials: true})
      let ran = Math.floor(Math.random() * result.data.length)
      setQuotation(result.data[ran].quote)
    } catch (error) {
      console.log(error.response)
    }
  }

   return (
    <div className='pb-[20px]'>
      <Nav />

      <div className='w-full h-[25vh] flex justify-around'> 
        <div className='w-[400px] h-[100px] border-2 rounded-lg my-[20px] flex items-center justify-center bg-[green] cursor-pointer' onClick={() => {setSend(true); setShow(false)}}>
          <h1 className='text-[20px]'>SEND QUOTE</h1>
        </div>

        <div className='w-[400px] h-[100px] border-2 rounded-lg my-[20px] flex items-center justify-center bg-[green] cursor-pointer' onClick={() => {setSend(false); setShow(true)}}>
          <h1 className='text-[20px] text-center'>GENERATE QUOTE</h1>
        </div>
      </div>
      
      {send && <div className='w-full h-[70vh] flex items-center justify-center'>
        <div className='w-[90%] h-full border-2 rounded-lg border-[black]'>
          <h1 className='text-center text-[30px] text-dark'>SEND  YOUR  QUOTE</h1>
          <div className='flex items-center px-[50px] py-[30px]'>
            <label className='text-[18px] pr-[50px]'>QUOTE:</label>
            <textarea className='border-2 border-[black]' cols={100} value={title} onChange={(e) => setTitle(e.target.value)}></textarea>
          </div>

          <div className='flex items-center px-[50px] py-[30px]'>
            <label className='text-[18px] pr-[28px]'>DESCRIBE:</label>
            <textarea className='border-2 border-[black]' rows={7} cols={100} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>

          <div className='flex items-center justify-center'><button className='py-[10px] px-[25px] rounded-lg text-[white] bg-[green]' onClick={createQuote}>POST</button></div>

        </div>
      </div>}

      {show && <div className='w-full h-[60vh] flex items-center justify-center'>
        <div className='w-[90%] h-full rounded-lg overflow-auto'>
          <div className='w-full h-[50px] flex items-center justify-center' onClick={recieveQuote}><button className='border-2 border-[black] bg-[green] text-[white] px-[20px] py-[10px] rounded-lg '>Generate</button></div>
          {quotation && <div className='w-[90%] p-[10px] m-[20px] border-2 border-[black]'>{`${quotation}`}</div>}
        </div>
      </div>}

    </div>
  )
}

export default Home;