import React from "react";
import "./Cart.css";
import pic1 from "../alex.jpg";

import {useSelector} from "react-redux";
import Singlecart from "../components/singlecart";




function Cart() {
    
    const name = useSelector((store) => store.cart.cartItems);
    const total= useSelector((store) => store.cart.total);
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

        <table className=" subtotal">
            <tr>
                <th></th>
                <th></th>
                <th>Sub Total:</th>
                <th id="total">${total}</th>
                
            </tr>
        </table>

        <div className="checkout_btn"><button id="checkout">Proceed to Checkout</button></div>

        

        </>
    );
}

export default Cart;


