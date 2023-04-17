import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const user = useSelector((state)=>state.user)
  const navigate  = useNavigate()

  useEffect(()=>{
    if(user.username==="" || user.password===""){
      navigate("/login")
    }
  },[])
  return (
    <div>
      Home
    </div>
  )
}

export default Home
