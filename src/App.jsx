import React, { useState } from 'react';
import "./App.css"
import Die from "./components/Die"

/**
 * Challenge:
 * 
 * Write a function (allNewDice) that returns an array 
 * of 10 random numbers between 1-6 inclusive.
 * 
 * Log the array of numbers to the console for now
 */

export default function App() {
    const [isActive, setIsActive] = useState(false)
    const handleClick = () => {
      setIsActive(current => !current) 
    } 
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(Math.ceil(Math.random() * 6))
        }
        return newDice
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