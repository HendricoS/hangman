import React from "react";

// Bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const WordToGuess = ({ wordToGuess, guessedLetters }) => {
  const displayWord = wordToGuess
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");

  return (
    <div className="container word-to-guess-main-container">
      <p className="guess-paraG-1">Word to Guess:</p>
      <p className="guess-paraG-2">{displayWord}</p>
    </div>
  );
};

export default WordToGuess;
