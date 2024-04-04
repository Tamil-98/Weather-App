import React from "react";
import '../App.css'

function ProductBox(props){
    return(
       <>
            <h3>Hai Everyone</h3>
            <div className="imgcont">
                <img src={props.imagecard} alt="glass"/>
                <h3>{props.name}</h3>
                <p>{props.message}</p>
                <h3>₹ {props.price} /-</h3>
            </div>
        

        </>
    )
}

export default ProductBox;