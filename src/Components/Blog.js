import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './styles.css'

const Blog = (props) => {
    console.log(props.item)
    const history=useNavigate()
    const id=props.item._id;
    const { title,description,image } =props.item 
    const handledelete=async()=>{
   
       await axios.delete(`https://blogappusingmern.herokuapp.com/${id}`,{
            headers:{
                'x-access-token':localStorage.getItem('token')
            }
        })
        .then((response)=>{
            if(response.data.message)
            {
                alert("Blog Deleted Successfully Please Refresh")
                history("/myblogs")
            }
            else{
                alert("Blog Can't be deleted right now..")
            }
        })
        .catch(()=>{
            alert("Blog Can't be deleted right now..")
        })
    
    }
  return (
    <div className='blog'>
        <img src={image} alt="Blog Image"/>
        <h1>{title}</h1>
        <h2 className='text'>{description}</h2>
        <h3 style={{"color":"dodgerblue"}}>Author :</h3><h1 style={{"color":"midnightblue"}}> {props.item.author}</h1>
         <h3 style={{"color":"dodgerblue"}}>Created At : <h3 style={{"color":"midnightblue"}}> {props.item.date}</h3></h3>
        <Button LinkComponent={NavLink} to={`/${id}`} variant="contained" style={{"marginRight":"30px"}}>Edit</Button>
        <Button onClick={handledelete} variant="contained">Delete</Button>
    </div>
    
  )
}

export default Blog