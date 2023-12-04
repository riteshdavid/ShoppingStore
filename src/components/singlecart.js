import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice';

const Singlecart =(props) => {
    const dispatch = useDispatch();
  return (
    <>
    <tr>
                <td><img src={props.photo} alt='cart'/></td>
                <td>{props.name}</td>
                <td>{props.quantity}</td>
                <td>${props.price}</td>
                <td><button id="remove_btn" className='btn btn-danger'
                onClick={()=> {
                    dispatch(removeFromCart(props));
                }}
                >Remove</button></td>
    </tr>
    
    </>
  )
}

export default Singlecart