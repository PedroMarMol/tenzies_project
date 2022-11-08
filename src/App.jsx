import React, { useState } from 'react';
import "./App.css"
import Die from "./components/Die"

export default function App() {
    const [isActive, setIsActive] = useState(false)
    const handleClick = () => {
      setIsActive(current => !current) 
    } 
    return (
        <main className="main--app">
            <p className="main--header">
                Tenzies
            </p>
            <p className="main--text">
                Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
            </p>
            <div className='dice--container'>
                <Die value="1"/>
                <Die value="1"/>
                <Die value="1"/>
                <Die value="1"/>
                <Die value="1"/>
                <Die value="1"/>
                <Die value="1"/>
                <Die value="1"/>
                <Die value="1"/>
                <Die value="1"/>
            </div>
            <button className="main--button">Roll</button>
        </main>
    )
}