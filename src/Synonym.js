import React from "react";
import Dictionary from "./Dictionary";

export default function Synonym(props){
    
    function handleClick(event){
        event.preventDefault();
        console.log(event.target.value);
        <Dictionary newWord = {event.target.value}/>
    }
      
    return(
        <div className="Synonym">
            <button onClick={handleClick} value={props.synonym}>{props.synonym}</button> 
        </div>
    )
}