import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props){
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function(definition,index){
                return (
                    <div key={index}>
                        <div className="definition">
                        {index+1}. {definition.definition}
                        </div>
                        <div className="example">
                        {definition.example}
                        </div>
                        <div className="element-to-hide">
                        <Synonyms synonyms={definition.synonyms}/>
                        </div>
                        <div className="element-to-show"> 
                        <br/>
                        </div>
                    </div>
                )
            })}
        </div>)
        ;
}