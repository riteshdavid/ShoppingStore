import { createSlice } from "@reduxjs/toolkit";



const initialState={
    cartItems:[],
    amount:0,
    total:0,
    isLoading:true,

};

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,{payload})=> {
            if(state.cartItems.find((item)=> item.id===payload.id))
            {
                const item_is=state.cartItems.find((item)=> item.id===payload.id);
                item_is.quantity=item_is.quantity + 1;
            }
            else {
            state.cartItems.push({...payload,quantity:1});
            }
            
        },
        removeFromCart:(state,{payload}) => {
            
            const item_is=state.cartItems.find((item)=> item.id===payload.id);
            
               
                
            if(item_is.quantity===1) {
                    
                    state.cartItems=state.cartItems.filter((item)=> item.id !==item_is.id);
                    
        
                }    
                
                
            item_is.quantity=item_is.quantity - 1;
                
            },

            calculateTotal:(state) => {
                let stotal=0;
                let total=0;
                state.cartItems.forEach((item)=>{
                    stotal=item.price*item.quantity;
                    total+=stotal;
                    
                })
                state.total=total;
            }
            
        }
        
        
        }

    
);

export const { addToCart,removeFromCart,calculateTotal } = cartSlice.actions;

export default cartSlice.reducer;