import React, { useState, useEffect, useRef } from 'react'
import './App.css'


export default function Flashcard(card) {

    const [flip, setFlip] = useState()
    const [height, setHeight] = useState('initial')

    const frontEl = useRef()
    const backEl = useRef()


    function setMaxHeight() {

        const frontHeight = frontEl.current.getBoundingClientRect().height
        const backHeight = backEl.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight, backHeight, 100))
    }

    useEffect(setMaxHeight, [card.question, card.options])

    useEffect(()=>{
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize',setMaxHeight)
    },[])


    
    return (
        <div style={{height:height+'px'}} className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
            <div className="front" ref={frontEl}>
                {card.card.question}
                <div className="flashcard-options">
                    {card.card.options && card.card.options.map(options => {
                        return <div className="fashcard-option " key={options}> {options}</div>
                    })}
                </div>
            </div>
            <div ref={backEl} className="back">

                {card.card.answer}
            </div>
            {/* {flip ? card.card.question : card.card.anwser} */}
        </div>
    )
}
