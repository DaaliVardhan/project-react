import React,{useState,useEffect} from 'react'

const Timer = () => {

    const [date,setDate] = useState(new Date())
    const refreshDate = () =>{
        setDate(new Date())
    }

    useEffect(()=>{
        const interval = setInterval(refreshDate,1000);
        return () =>{
            clearInterval(interval)
        }
    },[])

  return (
    <span>
      {date.toLocaleString()}
    </span>
  )
}

export default Timer
