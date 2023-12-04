import React from "react";
import data from "../Data";
import Card from "./Card";
// import "./CardListing.css";
import { useSelector } from 'react-redux';



function CardListing() {


// function onClick(){

//     return (


//     );
// }

const cards = data.map((item) => {

    
        return  ( <Card key={item.id}  id={item.id} photo={item.src} name={item.name} price={item.price} />);
        });

        
        return (
            

            <>
            
            <div className="container">
                <div className="row g-2">
                    {cards}
                </div>
            </div>
           
            </>
        );

    }

export default CardListing;