import React, { useState, useEffect } from "react";
import { words } from "../components/Words";
import WordToGuess from "../components/WordToGuess";
import { hangmanImages } from "../components/HangmanImages";

// Bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const HangmanGame = () => {
  // State variables to manage game state
  const [wordToGuess, setWordToGuess] = useState("");
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [hangmanImage, setHangmanImage] = useState("Images/state3.GIF");
  const [gameState, setGameState] = useState("playing");
  const [hintCount, setHintCount] = useState(2); // Maximum of 2 hints

  useEffect(() => {
    startNewGame(); // Start a new game when the component mounts
  }, []);

  // Function to start a new game
  const startNewGame = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    setWordToGuess(randomWord.toLowerCase());
    setIncorrectGuesses(0);
    setGuessedLetters([]);
    setHangmanImage("Images/state3.GIF");
    setGameState("playing");
    setHintCount(2); // Reset hint count when starting a new game
  };

  // Function to handle user's guess
  const handleGuess = (letter) => {
    if (gameState !== "playing" || gameState === "won") {
      return; // If the game is not in the "playing" state or has already been won, don't handle more guesses
    }

    const normalizedLetter = letter.toLowerCase();

    if (!guessedLetters.includes(normalizedLetter)) {
      setGuessedLetters([...guessedLetters, normalizedLetter]);

      if (wordToGuess.includes(normalizedLetter)) {
        // Correct guess
      } else {
        // Incorrect guess
        const newIncorrectGuesses = incorrectGuesses + 1;
        setIncorrectGuesses(newIncorrectGuesses);

        if (
          newIncorrectGuesses >= 0 &&
          newIncorrectGuesses < hangmanImages.length
        ) {
          setHangmanImage(hangmanImages[newIncorrectGuesses]);
        }

        if (newIncorrectGuesses === 7) {
          setGameState("lost"); // Player has lost the game
        }
      }

      // Check for winning condition here
      const unguessedLettersInWord = [...wordToGuess].filter(
        (uniqueLetter) => !guessedLetters.includes(uniqueLetter)
      );

      if (unguessedLettersInWord.length === 1) {
        // Set a timeout to declare the player as a winner after 100 milliseconds
        setTimeout(() => {
          setGameState("won"); // Player has won the game
        }, 100);
      }
    }
  };

  // Function to provide a random letter hint
  const provideHint = () => {
    if (hintCount > 0 && gameState === "playing") {
      const unguessedLetters = "abcdefghijklmnopqrstuvwxyz"
        .split("")
        .filter((letter) => !guessedLetters.includes(letter));

      const wordLetters = wordToGuess.split("");

      if (unguessedLetters.length > 0) {
        let randomHintLetter;

        do {
          const randomIndex = Math.floor(Math.random() * wordLetters.length);
          randomHintLetter = wordLetters[randomIndex];
        } while (guessedLetters.includes(randomHintLetter));

        setGuessedLetters([...guessedLetters, randomHintLetter]);
        setHintCount(hintCount - 1);
      }
    }
  };

  // Function to render alphabet buttons for user guesses
  const renderAlphabetButtons = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet.split("").map((letter) => (
      <button
        className="alpha-buttons"
        key={letter}
        onClick={() => handleGuess(letter)}
        disabled={
          gameState !== "playing" || // Disable if the game is not in the "playing" state
          gameState === "won" || // Disable if the game is won
          incorrectGuesses === 7 // Disable if the player has 7 incorrect guesses
        }
      >
        {letter}
      </button>
    ));
  };

  // Content to be displayed based on game state
  let content;
  if (gameState === "playing") {
    content = (
      <div className="container main-hangman-game-container">
        <h1 className="hangman-game-h1">Hangman Game</h1>
        <WordToGuess
          wordToGuess={wordToGuess}
          guessedLetters={guessedLetters}
        />
        <p className="hangman-game-paraG">
          Incorrect Guesses: {incorrectGuesses} / 7
        </p>
        <img
          className="hangman-main-images"
          src={hangmanImage}
          alt={`Hangman - ${incorrectGuesses}`}
        />
        <div className="alphabet-buttons">{renderAlphabetButtons()}</div>

        <div className="hint-button-div">
          <button
            className="hint-button"
            onClick={provideHint}
            disabled={hintCount === 0}
          >
            Get Hint ({hintCount} left)
          </button>
        </div>
      </div>
    );
  } else if (gameState === "won") {
    content = (
      <div className="win-lost-div">
        <div className="won-div">You won! Congratulations!</div>
        <p className="guess-word">The word was: {wordToGuess}</p>
      </div>
    );
  } else {
    content = (
      <div className="lost-div">You lost! The word was: {wordToGuess}</div>
    );
  }

  return <div className="container content-container">{content}</div>;
};

export default HangmanGame;
