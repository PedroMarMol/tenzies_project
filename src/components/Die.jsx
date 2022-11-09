import React, { useState } from "react"

export default function Die(props) {
    return (
        <div>
            <button 
                className="main--numbers"
                style={{backgroundColor: props.isActive ? "#59E391" : "white"}}
                onClick={props.onClick}
                >{props.value}
            </button>
        </div>
    )
}