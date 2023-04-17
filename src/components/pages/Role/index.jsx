import React, { useEffect , useRef , useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addRole } from '../../../redux'

const roles ={
  Admin:'admin',
  Staff:'staff',
  Dev:'developer'
}

const Role = () => {
  const input = useRef()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [role,setRole] = useState(roles.Staff)
  const currentUser = useSelector((state)=>state.user)
  
  useEffect(()=>{
    if(currentUser==={} || currentUser.username==="" || currentUser.password===""){
      navigate("/login");
    }
  },[])

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(addRole({role:role}))
    navigate("/home")
  
  }

  const handleChange = (e) =>{
    setRole(input.current.value)
  }

  

  return (
    <main className='container mx-auto w-full h-[100vh] grid place-items-center'>
      <section className='p-8 rounded bg-slate-400 grid grid-cols-1 place-items-center gap-6 max-w-[50%] min-w-[400px] '>
        <div className='text-bold text-lg text-slate-900 '>Select Role</div>
        <div className='grid grid-cols-2'>
          <label>{currentUser.username}</label>
          <form className='grid grid-cols-1 gap-3 place-items-start' onSubmit={(e)=>handleSubmit(e)}>            
              <select ref={input} value={roles.Staff} onChange={handleChange}>
                <option value={roles.Admin}>Admin</option>
                <option value={roles.Staff} >Staff</option>
                <option value={roles.Dev}>Developer</option>
              </select>
            <button type='submit' onClick={(e)=>handleSubmit(e)} className='bg-blue-400 text-white px-6 py-2 rounded hover:bg-blue-700'>Ok</button>
          </form>
          
        </div>
      </section>
    </main>
  )
}

export default Role
