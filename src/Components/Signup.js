import { Button } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Homeheader from './headers/Homeheader';
import SyncLoader from "react-spinners/SyncLoader";

const Login = () => {
  const [loading, setloading] = useState(false)
  const history=useNavigate()
   useEffect(()=>{
    const token=localStorage.getItem('token')
    if(token)history("/blogs")

  },[])
  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const [confirmpassword, setconfirmpassword] = useState()
  const sendrequest=async()=>{
    console.log(password+" "+confirmpassword)
     if((password!==confirmpassword))
     {
       alert("Passwords fields are not matching")
       return;
     }
    const response= await axios.post("https://blogappusingmern.herokuapp.com/signup",{
       name,
       email,
       password
     })
     setloading(false)
     if(response.data.user)
     {
       alert("user added successfully")
       history("/login")
     }
     else{
       alert("can't add user right now")
     }
  }

  const handlesignup=(e)=>{
    setloading(true)
    e.preventDefault();
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
     <form onSubmit={handlesignup}>
         <div className='inputfield'>
         <PersonIcon />
         <input type="text" placeholder='Enter Your Name'   onChange={(e)=>setname(e.target.value)}  required></input>
         </div>
        <div className='inputfield'>
         <EmailIcon />
         <input type="email" placeholder='Enter Your Email'  onChange={(e)=>setemail(e.target.value)}  required></input>
         </div>
         <div className='inputfield'>
           <KeyIcon />
         <input type="password" placeholder='Enter Password' onChange={(e)=>setpassword(e.target.value)}  required></input>
         </div>
         <div className='inputfield'>
           <KeyIcon />
         <input type="password" placeholder='Confirm Password' onChange={(e)=>setconfirmpassword(e.target.value)}  required></input>
         </div>
         <button type='submit' className='button'>Signup</button>
         <h4>Already Have An Account?</h4>
         <Button LinkComponent={NavLink} to="/login" style={{marginBottom:"15px"}}>Login</Button>
     </form>
     </div>)}
    </>
  )
}

export default Login