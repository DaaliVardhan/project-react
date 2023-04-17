import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username:"",
    password:"",
    role:"",
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers :{
        addUser:(state,action)=>{
                state.username=action.payload.username
                state.password=action.payload.password
        },
        addRole:(state,action)=>{
                state.role=action.payload.role
        }
        
    }
})

export const { addUser,addRole } = userSlice.actions 
export default userSlice.reducer