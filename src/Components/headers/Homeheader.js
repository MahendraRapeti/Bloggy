import { Button, Tab, Tabs } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom'
import '../styles.css'

const Homeheader = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const toggleNav = () => {
    setToggleMenu(!toggleMenu)
     const heading=document.getElementById('heading')

    if(heading.classList.contains('show'))
    {
        heading.classList.remove('show')
        heading.classList.add('dontshow')
    }
    else
    {
        heading.classList.remove('dontshow')
        heading.classList.add('show')
    }
  }
   
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

     const heading=document.getElementById('heading')
  if(screenWidth>800)
  {
    heading.classList.remove('show')
    heading.classList.add('dontshow')
  }

  }, [])
 return (
    <nav>
      {(toggleMenu || screenWidth > 800) && (
      <ul className="list">
      <li className="items" id="img"> <img style={{"width":"50px"}} src="https://www.pngkey.com/png/full/405-4059498_free-png-ios-emoji-negative-squared-latin-capital.png" ></img></li>
      <li className="items" style={{"marginRight":"auto","color":"midnightblue"}}> <h1>𝘽𝙇𝙊𝙂𝙂𝙔</h1></li>
      <li className="items"><Button style={{"color":"white"}} LinkComponent={NavLink} to="/" >Home</Button></li>
      <li className="items"><Button style={{"color":"white"}} LinkComponent={NavLink} to="/login">Login</Button></li>
      <li className="items"><Button style={{"color":"white"}} LinkComponent={NavLink} to="/signup">Sign up</Button></li>
      
    </ul>
      )}

      <button onClick={toggleNav} className="btn"><MenuIcon /></button>
      <center><h1 className='show' id='heading' style={{"color":"midnightblue"}}>𝘽𝙇𝙊𝙂𝙂𝙔</h1></center>
    </nav>
     
         
  )
}


export default Homeheader