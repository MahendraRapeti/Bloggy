import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import './styles.css'
import TitleIcon from '@mui/icons-material/Title';
import ImageIcon from '@mui/icons-material/Image';
import DescriptionIcon from '@mui/icons-material/Description';
import Header from './headers/Header';
import SyncLoader from "react-spinners/SyncLoader";

const Editblog = () => {
    const [loading, setloading] = useState(false)
    const history=useNavigate()
    const params=useParams()
    const id=params.id;
    const [title, settitle] = useState()
     const [description, setdescription] = useState()
      const [image, setimage] = useState()
      const [data,setdata]=useState()

    useEffect(()=>{
        const sendrequest=async()=>{
            await axios.get(`https://blogappusingmern.herokuapp.com/${id}`,{
                headers:{
                    'x-access-token':localStorage.getItem('token')
                }
            })
            .then((response)=>{
                setloading(false)
                settitle(response.data.title)
                setdescription(response.data.description)
                setimage(response.data.image)
                setdata(response.data)
            })
            .catch(()=>{
                alert("error")
            })
        }

        setloading(true)
        sendrequest();
        
    },[])

    const submitdata=async()=>{
        await axios.put(`https://blogappusingmern.herokuapp.com/${id}`,{
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
                    alert("successfully updated")
                    history("/myblogs")
                }
                else
                {
                    alert("Please Try Again")
                }
        })
        .catch(()=>{
            alert("Some Error Occured")
        })
    }

    const handlesubmit=(e)=>{
        setloading(true)
        e.preventDefault()
        submitdata()
    }
    const handleback=()=>{
        history("/myblogs")
    }
  return (
   <>
    <Header />
                      {(loading ? <div style={{"width":"100%","display":"flex","justifyContent":"center","height":"100vh","alignItems":"center"}}> <SyncLoader /> </div>:

    (data &&  <form onSubmit={handlesubmit} className='editform'>
        <div className='inputfield'>
        <TitleIcon />
        <input type="text" placeholder='Enter Title Of Your Blog' value={title} onChange={(e)=>settitle(e.target.value)}></input>
        </div>
        <div className='inputfield'>
            <DescriptionIcon />
        <input type="text" placeholder='Enter Description...' value={description} onChange={(e)=>setdescription(e.target.value)}></input>
       </div> 
       <div className='inputfield'>
           <ImageIcon />
        <input type="text" placeholder='Enter Image url' value={image} onChange={(e)=>setimage(e.target.value)}></input>
       </div>
        <button type='submit' className='button'>Edit Blog</button>
        <button onClick={handleback} className="button">Cancel</button>
    </form>))}
    </>
  )
}

export default Editblog