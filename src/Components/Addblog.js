import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './headers/Header'
import TitleIcon from '@mui/icons-material/Title';
import ImageIcon from '@mui/icons-material/Image';
import DescriptionIcon from '@mui/icons-material/Description';
import SyncLoader from "react-spinners/SyncLoader";
import Homeheader from './headers/Homeheader'
import './styles.css'

const Addblog = () => {
     const [loading, setloading] = useState(false)
    const history=useNavigate()
    const [title, settitle] = useState()
    const [description, setdescription] = useState()
    const [image, setimage] = useState()

    const sendrequest=async()=>{
        const response=await axios.post("https://blogappusingmern.herokuapp.com/addblog",{
            headers:{
                'x-access-token':localStorage.getItem('token')
            },
            title,
            description,
            image
        })
        .then((response)=>{
            setloading(false)
            if(response.data.message)
            {
                alert("Blog Added Successfully")
                history("/myblogs")
            }
            else{
                alert("Blog Can't be Added right now..")
            }
        })
        .catch(()=>{
            alert("Blog Can't be Added right now..")
        })
    }

    const handlesubmit=(e)=>{
        e.preventDefault();
        setloading(true)
        sendrequest();
    }

  return (
      <div className='addblogtop'>
      <Header />
                  {(loading ? <div style={{"width":"100%","display":"flex","justifyContent":"center","height":"100vh","alignItems":"center"}}> <SyncLoader /> </div>:

      <div className='addblogform'>
    <form onSubmit={handlesubmit} >
        <div className='inputfield'>
        <TitleIcon />
        <input type="text" placeholder='Enter Title Of Your Blog' onChange={(e)=>settitle(e.target.value)} required></input>
        </div>
        <div className='inputfield'>
            <DescriptionIcon />
        <input type="text" placeholder='Enter Description...' onChange={(e)=>setdescription(e.target.value)} required></input>
       </div> 
       <div className='inputfield'>
           <ImageIcon />
        <input type="text" placeholder='Enter Image url' onChange={(e)=>setimage(e.target.value)} required></input>
       </div>
        <button type='submit' className='button'>Add Blog</button>
    </form>
    </div>)}
    </div>

  )
}

export default Addblog