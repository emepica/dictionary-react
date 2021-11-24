import React from "react";
import "./Phonetic.css";

export default function Phonetic(props){
    let audio = new Audio(props.phonetic.audio)

    const start = () => {
        audio.play()
    }
    
        return (
            <div className="Phonetic">
                <button className="btn border-0" onClick={start}><i class="fas fa-volume-up"></i></button>
                <span className="texte">({props.phonetic.text})</span>
            </div>
        );
    }