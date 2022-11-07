import React, { useState } from 'react';
import "./App.css"

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
            <div className="main--grid">
                <button 
                    className="main--numbers" 
                    style={{backgroundColor: isActive ? '#59E391' : 'white'}}
                    onClick={handleClick}
                >   1
                </button>
                <button 
                    className="main--numbers" 
                    style={{backgroundColor: isActive ? '#59E391' : 'white'}}
                    onClick={handleClick}
                >   1
                </button>
                <button 
                    className="main--numbers" 
                    style={{backgroundColor: isActive ? '#59E391' : 'white'}}
                    onClick={handleClick}
                >   1
                </button>
                <button 
                    className="main--numbers" 
                    style={{backgroundColor: isActive ? '#59E391' : 'white'}}
                    onClick={handleClick}
                >   1
                </button>
                <button 
                    className="main--numbers" 
                    style={{backgroundColor: isActive ? '#59E391' : 'white'}}
                    onClick={handleClick}
                >   1
                </button>
                <button 
                    className="main--numbers" 
                    style={{backgroundColor: isActive ? '#59E391' : 'white'}}
                    onClick={handleClick}
                >   1
                </button>
                <button 
                    className="main--numbers" 
                    style={{backgroundColor: isActive ? '#59E391' : 'white'}}
                    onClick={handleClick}
                >   1
                </button>
                <button 
                    className="main--numbers" 
                    style={{backgroundColor: isActive ? '#59E391' : 'white'}}
                    onClick={handleClick}
                >   1
                </button>
                <button 
                    className="main--numbers" 
                    style={{backgroundColor: isActive ? '#59E391' : 'white'}}
                    onClick={handleClick}
                >   1
                </button>
                <button 
                    className="main--numbers" 
                    style={{backgroundColor: isActive ? '#59E391' : 'white'}}
                    onClick={handleClick}
                >   1
                </button>
                </div>
            <button className="main--button">Roll</button>
        </main>
    )
}