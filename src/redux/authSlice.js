import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username:"default",
    password:"default"
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers :{
        addAuth:(state,action)=>{
                
                state.username=action.payload.username
                state.password=action.payload.password
            
        }
        
    }
})


export const { addAuth } = authSlice.actions 
export default authSlice.reducer