import React from 'react'
import { useNavigate } from 'react-router-dom'
import Homeheader from './headers/Homeheader'
import './styles.css'

const Home = () => {
    const history=useNavigate()
    const handleclick=()=>{
        history("/signup")
    }
  return (
    <>
    <Homeheader />
    <img src="https://cutewallpaper.org/24/blog-png/in-defense-of-brand-blogging-%E2%80%93-in-need-of-some-trust-minter-dial.png" style={{"width":"100%","height":"83vh","marginTop":"-20px"}}></img>
    <div style={{"display":"flex","justifyContent":"center","marginTop":"5px"}}>
     <button onClick={handleclick} className="button">Let's Start</button>
     </div>
     </>
  )
}

export default Home