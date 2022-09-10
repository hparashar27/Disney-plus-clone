import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    name:"",
    email: "",
    photo : "",
} 
 const userSlice = createSlice({
    name:'user',
    initialState,
    reducers :{
setUserLoginDetails : (state,action)=>{
    state.name= action.payload.name;
    state.email= action.payload.email;
    state.photo= action.payload.photo;
},

setUserSignout :(state) =>{
    state.name= null;
    state.email= null;
    state.photo= null;
}
    },

})

export const { setUserLoginDetails , setUserSignout } = userSlice.actions ;

export const selectorUsername = (state) => state.user.name ;
export const selectorUseremail = (state) => state.user.email ;
export const selectorUserphoto = (state) => state.user.photo ;

export default userSlice.reducer;