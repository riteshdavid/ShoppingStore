import React from 'react';
import './App.css';
import Cards from './components/Cards';
import data from "./Data";



function App() {

//  console.log(data);
 const cards = data.map((item) => {
 return  ( <Cards key={item.id} photo={item.src} name={item.name} price={item.price} />);
 });

 return (
    <>
    {cards}
    </>
 );
 

 
}

export default App;
