
import './App.css';

import React from 'react';
import Detail from "./pages/Detail";
import Cart from "./pages/Cart"
import { BrowserRouter,Routes,Route} from "react-router-dom";
import CardListing from './pages/CardListing';
import { Navbar } from './components/navbar';


function App() {

    
    
    
 

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
