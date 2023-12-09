import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './card.css';
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch } from 'react-redux';




function Card(props) {
    
    const dispatch = useDispatch();

    return (
        <>

            {/* <Link to='/detail' state={props} >
        <div className="card">
        <div>
        <img className="img-fluid" alt="card" src={props.photo}/>
        <input type='hidden' value={props.id}></input>
        <div className="card_detail">
        <h2>{props.name}</h2>
        <h2><span className="span_price">${props.price}</span></h2> 
        </div>
        </div >
        </div >
        </Link >
        {/* .col-	.col-sm-	.col-md-	.col-lg- */}
  
        <Link to='/detail' state={props} className='col-12 col-sm-12 col-md-6 col-lg-4'>
            <div className="card rounded-0 mt-5">
                <img src={props.photo} className="card-img" alt="Item"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <h2 className="text-end">${props.price}</h2>
                        <div className="text-center"> 
                        {/* <button className="btn btn-primary text" 
                        onClick={()=> {
                            dispatch(addToCart(props));
                        }}
                        >Add to Cart</button>     */}
                        </div>
                    </div>
            </div>
        </Link>
        
        </>
    );
}

export default Card;