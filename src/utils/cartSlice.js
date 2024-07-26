import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:["banana","apple","pea"],
    },
    reducers:{
        addItem: (state, action)=>{
            state.items.push(action.payload);
        },
        reomoveItem: (state,action)=>{
            state.items.pop()
        },
        clearCart: (state)=>{
            state.items = [];
        }
    }
});

export const {addItem,reomoveItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;