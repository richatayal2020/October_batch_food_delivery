import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name : 'cart' , 

    initialState : {
        items : []
    }, 

    reducers : {
        addIteam : (state , action) => {
            state.items.push(action.payload)
        } ,
        clearCart : (state) => {
            state.items.length = 0
        }
    }
})


export const {addIteam , clearCart} = CartSlice.actions ;
export default CartSlice.reducer




