import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({

    name:"cart",
    initialState: {
        Books:[],
    },

    reducers:{

        addItem: (state,action)=>{
            state.Books.push(action.payload)
        },

    },




});

export const {addItem} = CartSlice.actions;
export default CartSlice.reducer;