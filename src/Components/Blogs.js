import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Allblogs from './Allblogs';
import Blog from './Blog';
import Header from './headers/Header';
import SyncLoader from "react-spinners/SyncLoader";
import './styles.css'

const Blogs = () => {
   const [loading, setloading] = useState(true)
    const [data,setdata]=useState();
    useEffect(() => {
     const sendrequest = async()=>{
       const response= await axios.get("https://blogappusingmern.herokuapp.com/blogs",{
           
        })
        setloading(false)
        setdata(response.data.resblogs)
     }

     sendrequest();
    }, [])
    
   return (
      <div className='top'>
      <Header />
              {(loading ? <div style={{"width":"100%","display":"flex","justifyContent":"center","height":"100vh","alignItems":"center"}}> <SyncLoader /> </div>:
      
    (data && data.length >0 ?
       <div className='blogs'>
          {
              data.map((item,pos)=>(
                    <div className='blog'>
                        <Allblogs item={item} />
                    </div>
              ))
          }
       </div>
   :<div className='blogs'>
     <h1>No Blogs...</h1>
     </div>)
)}
     </div>
  )
}

export default Blogs