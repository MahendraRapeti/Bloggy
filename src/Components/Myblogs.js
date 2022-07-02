import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Blog from './Blog'
import Header from './headers/Header'
import Homeheader from './headers/Homeheader'
import Miniheader from './headers/Miniheader'
import SyncLoader from "react-spinners/SyncLoader";
import './styles.css'

const Myblogs = () => {
    const [loading, setloading] = useState(true)
    let width=window.width;
    const [data, setdata] = useState()
    useEffect(()=>{
        const sendrequest=async()=>{
            const response=await axios.get("https://blogappusingmern.herokuapp.com/myblogs",{
                headers:{
                    'x-access-token':localStorage.getItem('token')
                }

            })
            setloading(false)
            setdata(response.data.blogs)
            console.log("data"+data)
        }

        sendrequest()
    },[])
  return (
      <div className='top'>
          <Header />
      {(loading ? <div style={{"width":"100%","display":"flex","justifyContent":"center","height":"100vh","alignItems":"center"}}> <SyncLoader /> </div>:
    (data && data.length >0 ?
       <div className='blogs'>
          {
              data.map((item,pos)=>(
                    <div className='blog'>
                        <Blog item={item} />
                    </div>
              ))
          }
       </div>
   :<div className='blogs'>
     <h1>Hey Start Adding Your Blogs Here...</h1>
     <Button LinkComponent={NavLink} to="/addblog">Add Blogs</Button>
     </div>)
)}
     </div>
  )
}

export default Myblogs