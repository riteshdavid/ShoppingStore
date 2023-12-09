import React from "react";
import { useLocation} from "react-router-dom";
// import pic1 from "../alex.jpg";
import "./Detail.css";
// import { useSelector } from 'react-redux';
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch } from 'react-redux';









function Detail(props){
    const location = useLocation();
    const state= location.state;

    

    

    

    
    console.log(state);
    const dispatch = useDispatch();
    return (
        <>
        <div className="container" >
            <div className="row">
            <div className="col-4 col-sm-4 col-md-4 col-lg-4"><img className="img-fluid" alt="Product" src={state.photo} style={{width:'100%'}}/></div>
            <div className="col-8 col-sm-8 col-md-8 col-lg-8"><h1>{state.name}</h1>
            <p id="" className="lh-lg fs-5">Make sure to install the lorem ipsum extension that was developed by Daniel
             Imms as shown in the code sample.Once you install the extension, you can
              use it in markdown files, text files or files of any other type.
            </p>

            <h1 className="text-end">${state.price}</h1>
            
        <div className="text-center ">
        <button id="add_cart" className="btn btn-primary text lh-lg fw-bold fs-5 mt-5"
        onClick={()=> {
            dispatch(addToCart(state));
        }
    }>Add to Cart</button>
        </div>
        </div>
        </div>
        </div>
        </>

    );

}

export default Detail;