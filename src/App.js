import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Addblog from './Components/Addblog';
import Blogs from './Components/Blogs';
import Editblog from './Components/Editblog';
import Home from './Components/Home';
import Login from './Components/Login';
import Myblogs from './Components/Myblogs';
import Signup from './Components/Signup';

const App = () => {
  return (
      <div className='App'>
      <Routes>
         <Route path="/" element={<Home/>} exact></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/blogs" element={<Blogs/>}></Route>
          <Route path="/addblog" element={<Addblog/>}></Route>
          <Route path="/myblogs" element={<Myblogs/>}></Route>
          <Route path="/:id" element={<Editblog/>}></Route>
          
      </Routes>
      
      </div>
  )
}

export default App;