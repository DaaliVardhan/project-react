import React,{useState} from 'react'

const Image = async () =>{
    let stream = null 
    try {
        stream = await  navigator.mediaDevices.getUserMedia({video:true,audio:false})    
        return stream;
    } catch (error) {
        return null
    }
    
}


export {Image}
