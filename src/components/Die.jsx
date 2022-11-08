import React from "react"

export default function Die(props) {
    const [isActive, setIsActive] = React.useState(false)
    function handleClick() {
        setIsActive(prev => !prev)
        console.log(props.id)
    }
    return (
        <div>
            <button 
                className="main--numbers"
                style={{backgroundColor: isActive ? '#59E391' : 'white'}}
                onClick={handleClick}
                >{props.value}
            </button>
        </div>
    )
}