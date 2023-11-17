import React from "react";



function Cards(props) {
    

    
    return (
        <>
        <a>
        <div>
        <img className="card_img" alt="Card" src={props.photo}/>
        
        <h2>{props.name}</h2>
        <h3>{props.price}</h3>
        </div>
        </a>
        </>
    );
}

export default Cards;