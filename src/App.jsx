import React, { useEffect, useState } from 'react';
import "./App.css"
import Die from "./components/Die"

export default function App() {
    const [isActive, setIsActive] = useState(false)
    const handleClick = (() => setIsActive(current => !current))
    
    const [arrayOfNumbers, setArrayOfNumbers] = useState(allNewDice)
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(Math.ceil(Math.random() * 6))
        }
        return newDice
    }

    const rollDices = () => setArrayOfNumbers(allNewDice())

    const diceNumbers = arrayOfNumbers.map((die) => <Die value={die} />)
    
    return (
        <main className="main--app">
            <p className="main--header">
                Tenzies
            </p>
            <p className="main--text">
                Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
            </p>
            <div className='dice--container'>
                {diceNumbers}
            </div>
            <button 
                className="main--button"
                onClick={rollDices}
                >Roll
            </button>
        </main>
    )
}
