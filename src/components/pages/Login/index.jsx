import React,{useState,useRef,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector,useDispatch} from 'react-redux'
import { addUser } from '../../../redux'
import { Timer } from '../../utilities'
import { Image } from '../../utilities'

const Login = () => {

  const [user,setUser] = useState({})
  const authUsers = useSelector((state)=> state["auth"])
  
  const [username,password] = [useRef(),useRef()]
  const videoref = useRef()
  const [validUser,setValidUser] = useState(true)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(user && authUsers.username===user.username && authUsers.password===user.password){
      dispatch(addUser(user))
      navigate("/role")
    }
    setValidUser(false)
  }
  const videoStream = async(e) =>{
    let stream = await Image()
    let video = videoref.current 
    video.srcObject = stream
    video.play()
  }
  useEffect(()=>{
    videoStream();
    
    return () =>{
      
    }
    
  },[videoref])

  const handleInput = (e) =>{
    setUser({username:username.current.value,password:password.current.value})
    setValidUser(true)
    return
  }

  return (
    <main className='w-full h-[100vh] pb-10 mx-auto contianer grid place-items-center'>

        <form className='bg-slate-400 p-8 border rounded grid grid-cols-2 gap-x-2 ' onSubmit={(e)=>handleSubmit(e)}>
          <div className='photo-section grid place-items-center'>
            <video className='aspect-video w-40 ' ref={videoref}></video>
            
          </div>
          <div className='form-group grid grid-cols-1 gap-y-4'>
            <div className="input-group grid gap-1 relative">
              { !validUser && (<label className='absolute -top-4 text-red-600'>Invalid User</label>)}
              <label className='text-bold text-md text-slate-900'>Username</label>
              <input type='text' autoFocus={true} autoComplete='true' 
                ref={username}
                onChange={(e)=>handleInput(e)}
                placeholder='Eg: default'
                className='w-full h-8 roundeed border border-blue-400 outline-offset-1 outline-blue-400 px-2'
              />
            </div>
            <div className="input-group grid gap-1">
              <label className='text-bold text-md text-slate-900'>Password</label>
              <input type='password' autoComplete='true'
              className='w-full h-8 rounded border border-blue-400 outline-offset-1 outline-blue-400 px-2'
              ref={password}
              placeholder='Eg: default'
              onChange={(e)=>handleInput(e)}
               />
            </div>
            <div className='button-group grid grid-cols-2 gap-x-4 place-items-start align-middle'>
              <button type='submit' className="bg-blue-400 text-white px-4 py-2 hover:bg-blue-700">Submit</button>
              <Link to="#" className='text-blue-900 rounded'  >Forgot Password ?</Link>
            </div>
            <div className='date-time-section'>
              <Timer />
            </div>
          </div>
        </form>
    </main>  
  )
}

export default Login
