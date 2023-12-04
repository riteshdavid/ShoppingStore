import React from "react";
import "./Cart.css";
import pic1 from "../alex.jpg";
import { removeFromCart } from "../features/cart/cartSlice";
import {useSelector} from "react-redux";
import Singlecart from "../components/singlecart";



function Cart() {
    
    const name = useSelector((store) => store.cart.cartItems);

    const cartitems=name.map((item) => <Singlecart key={item.id} id={item.id} name={item.name} quantity={item.quantity} photo={item.photo} price={item.price}/> )
    return (
        <>
        <table>
            <tr>
                <th>Products</th>
                <th>Title</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Remove</th>
            </tr>
            
        {/* Code Goes Here */}


        {cartitems}
            
            
        </table>

        

        </>
    );
}

export default Cart;


