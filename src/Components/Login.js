import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import axios from 'axios';
import Homeheader from './headers/Homeheader';
import SyncLoader from "react-spinners/SyncLoader";

const Signup = () => {
  const [loading,setloading]=useState(false);
  const history=useNavigate()
   useEffect(()=>{
    const token=localStorage.getItem('token')
    if(token)history("/blogs")

  },[])
  const [email, setemail] = useState()
  const [password, setpassword] = useState()

  const sendrequest=async()=>{
   const response= await axios.post("https://blogappusingmern.herokuapp.com/login",{
      email,
      password
    })
    setloading(false)
    if(response.data.user)
    {
      localStorage.setItem('token',response.data.user)
      alert("successfully signed in")
      history("/blogs")
    }
    else{
      alert("Please Check Your Credentials")
    }
  }

  const handlelogin=(e)=>{
    e.preventDefault()
    setloading(true)
    sendrequest()

  }

  return (
    <>
    <Homeheader />
        {(loading ? <div style={{"width":"100%","display":"flex","justifyContent":"center","height":"100vh","alignItems":"center"}}> <SyncLoader /> </div>:
    <div className='totaldiv'>
     <div className='topdiv'>
         <h1>𝘽𝙇𝙊𝙂𝙂𝙔</h1>
     </div>
     <form onSubmit={handlelogin}>
       <div className='inputfield'>
         <EmailIcon />
         <input type="email" placeholder='Enter Your Email'  onChange={(e)=>setemail(e.target.value)} required></input>
         </div>
         <div className='inputfield'>
           <KeyIcon />
         <input type="password" placeholder='Enter Password' onChange={(e)=>setpassword(e.target.value)} required></input>
         </div>
         <button type='submit' className='button'>Login</button>
         <h4>New User?</h4>
         <Button LinkComponent={NavLink} to="/signup" style={{marginBottom:"15px"}}>Signup</Button>
     </form>
     </div>
        )}
    </>
    
  )
}

export default Signup