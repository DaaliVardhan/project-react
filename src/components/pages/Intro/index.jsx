import React,{useState , useRef, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import "./intro.css";
const Intro = () => {

  const [password,setPassword] = useState(null);
  const input = useRef();
  const navigate = useNavigate(); 
  const [wrongPass,setWrongPass] = useState(false)

  const handleSubmit = (e) =>{
      e.preventDefault();
      if(input.current.value==password){
        navigate("/login")
      }
      setWrongPass(true);
      return;
  }
  const handleInput = (e) =>{
    setWrongPass(false)
    return
  }

  useEffect(()=>{
    fetch('/db.json').then(res=>res.json).then(obj=>setPassword(obj.password))
  })

  return (
    <main
      className="container mx-auto bg-slate-600 h-[100vh] pt-[30vh] "
      id="intro-container"
    >
      <section className="intro-section p-8 shadow bg-slate-300 columns-1 grid gap-8 mx-auto max-w-lg text-center  place-items-center md:w-full sm:w-full">
        <label htmlFor="intro-password" className="text-slate-900 font-bold font-mono text-lg">
          Enter the Password
        </label>
        <div className="flex flex-auto gap-4 relative">
          <span className="grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-shield-lock-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"
              />
            </svg>
          </span>
          <form onSubmit={handleSubmit} className="flex flex-1 gap-3 ">
          { wrongPass ? <label className="absolute -top-7 text-red-700">Incorrect Password</label> : <></>  }
          <input
            type="password"
            id="intro-password"
            name="intro-password"
            autoFocus={true}
            autoComplete="true"
            placeholder="Eg: 1234"
            className= {`border-solid outline-offset-1 py-1 px-2 h-12 ${ wrongPass ? "outline-red-400" : "outline-blue-400" } ` }
            ref={input}
            onChange={(e)=>handleInput(e)}
          />
          <button className="px-6 py-2 bg-slate-500 text-white hover:bg-slate-700 hover:transition-colors ">Enter</button>

          </form>
          
          
        </div>
      </section>
    </main>
  );
};

export default Intro;
