
import './App.css';

import React, { useEffect } from 'react';
import Detail from "./pages/Detail";
import Cart from "./pages/Cart"
import { BrowserRouter,Routes,Route} from "react-router-dom";
import CardListing from './pages/CardListing';
import { Navbar } from './components/navbar';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotal } from './features/cart/cartSlice';


function App() {

    const { cartItems } = useSelector((state) => state.cart);
    const dispatch= useDispatch();
    
    useEffect(()=> {
      dispatch(calculateTotal());
    },[cartItems]);
 

 return (
  
   <BrowserRouter>
   <Navbar/> 
   <Routes>
      
     <Route path="/" element={
      
        <CardListing/>
      
      }/>
       {/* <Route index element={<Home />} /> */}
     
     <Route path="detail" element={<Detail />} />
     <Route path="/cart" element={<Cart />} />
     
       {/*<Route path="*" element={<NoPage />} /> */}
     {/* </Route> */}
   </Routes>
 </BrowserRouter>
 
 );
 

 
}

export default App;
