import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Contact() {
  const navigation = useNavigate();
  const handleGo = ()=>{
          navigation('/about');
  }
  return (
    <div>
      Contact
      <button onClick={handleGo}>go to about</button>
      <Outlet/>
    </div>
  )
}

export default Contact
