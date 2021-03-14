import React from 'react'
import Card from './flashcard'
export default function Flashcardlist({flashcards}) {

console.log("hi",flashcards)

    return (
        <div className="card-grid">
            {flashcards && flashcards.map(card => {
                return <Card key={card.id} card={card} />
            })}
        </div>
    )
}
