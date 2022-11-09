import React, { useEffect, useState } from 'react';
import './App.css'
import Die from './components/Die'
import { nanoid } from 'nanoid'

export default function App() {
    const [arrayOfNumbers, setArrayOfNumbers] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)
    useEffect(() => {
        console.log("Dice state changed")
    }, [arrayOfNumbers])
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6),
                id: nanoid(),
                isActive: false
            })
        }
        return newDice
    }
    
    const roll = () => {
        const newArrayOfNumbers = arrayOfNumbers.map(dice => ({
            ...dice,
            value: dice.isActive ? dice.value : Math.ceil(Math.random() * 6)
        }))
        
        setArrayOfNumbers(newArrayOfNumbers)
    }
    
    const handleClick = diceId => {
        const newArrayOfNumbers = arrayOfNumbers.map(dice => {
            if (dice.id !== diceId) {
                return dice
            }   else {
                return ({
                    ...dice,
                    isActive: !dice.isActive,
                })
            }
        })
        
        setArrayOfNumbers(newArrayOfNumbers)
    }
    
    const diceNumbers = arrayOfNumbers.map(die => (
        <Die key={die.id} value={die.value} isActive={die.isActive} onClick={() => handleClick(die.id)} />
    ))
    
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
                className="roll--dice"
                onClick={roll}
                >Roll
            </button>
        </main>
    )
}
