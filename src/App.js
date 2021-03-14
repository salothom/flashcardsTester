import './App.css';
import FlashCardList from './flashcardlist'
import React, { useState, useEffect } from 'react';

function App() {




  const [loading, setLoading] = useState(true)
  const [flashcards, setFlashcards] = useState(sampleFlasCards)


  useEffect(() => {

    fetch("https://opentdb.com/api.php?amount=10&category=12&type=multiple")
      .then(res => res.json())
      .then(
        (results) => {
          setFlashcards(results.results.map((questionItem, index) => {
            console.log(results.results)
            const answer = questionItem.correct_answer;
            const options = [...questionItem.incorrect_answers, answer];
            return {

              id: `${index}-${Date.now()}`,
              answer: answer,
              question: decodeString(questionItem.question),
              options: options.sort(() => Math.random() - .5)
            }

          })
          );
          setLoading(false);
        },
        (error) => {
          console.log("Error:", error)
          setLoading(false);
        }
      )
  }, [loading])

  function decodeString(str){  
    return str.replaceAll("&quot;", "'").replaceAll("&#039;", "'").replaceAll("&ldquo;","'").replaceAll("&amp;","&");
  }

  return (
    <div className="App">
      {loading && <h2>LOADING!!</h2>}
      {!loading && <FlashCardList flashcards={flashcards} />}
    </div>
  );
}

const sampleFlasCards = [
  {
    id: 1,
    question: "what's cool",
    anwser: "ice",
    options: [
      "the sun", "fire", "me", "ice"
    ]
  }, {
    id: 2,
    question: "what's hot",
    anwser: "me",
    options: [
      "the sun", "fire", "me", "ice"
    ]
  }, {
    id: 3,
    question: "what's smoking",
    anwser: "fire",
    options: [
      "the sun", "fire", "me", "ice"
    ]
  }
]





export default App;
