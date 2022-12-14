import React, { useEffect, useState } from 'react';
import './App.css'
import Die from './components/Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti';

export default function App() {
    const [arrayOfNumbers, setArrayOfNumbers] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)
    useEffect(() => {
        const allActive = arrayOfNumbers.every(die => die.isActive)
        const firstValue = arrayOfNumbers[0].value
        const allSameValue = arrayOfNumbers.every(die => die.value === firstValue)
        if (allActive && allSameValue) {
            setTenzies(true)
            console.log("You won!")
        }
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
        if (!tenzies) {    
            const newArrayOfNumbers = arrayOfNumbers.map(dice => ({
                ...dice,
                value: dice.isActive ? dice.value : Math.ceil(Math.random() * 6)
            }))
            
            setArrayOfNumbers(newArrayOfNumbers)
        } else {
            setTenzies(false)
            setArrayOfNumbers(allNewDice())
        }
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
            {tenzies && <Confetti />}
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
            >
                {tenzies ? "New Game" : "Roll"}
            </button>
        </main>
    )
}
