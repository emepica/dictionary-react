import React from "react";

export default function Phonetic(props){
    let audio = new Audio(props.phonetic.audio)

    const start = () => {
        audio.play()
    }
    
        return (
            <div className="Phonetic">
                <button className="btn btn-primary border-0" onClick={start}><i class="fas fa-volume-up"></i></button>
                <span className="pronounce">({props.phonetic.text})</span>
            </div>
        );
    }