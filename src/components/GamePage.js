import React, { useState } from "react";

// Bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Button } from "react-bootstrap";

// Router-dom imports
import { Link } from "react-router-dom";

// Component imports
import HangmanGame from "../components/HangmanGame";
import Footer from "../components/Footer";

export default function GamePage() {
  const [gameKey, setGameKey] = useState(0); // Use a gameKey to trigger a re-render of HangmanGame

  // Function to start a new game with a random word
  const startNewGame = () => {
    setGameKey((prevKey) => prevKey + 1); // Increment the gameKey to trigger a re-render of HangmanGame
  };

  return (
    <div className="game-page-container">
      <div className="game-page-child-container">
        <div className="row">
          <div className="col-md-5"></div>
          <div className="col-md-1">
            <Link to="/">
              <Button
                className="btn btn-primary game-home-button"
                type="button"
              >
                Home
              </Button>
            </Link>
          </div>
          <div className="col-md-1">
            <Button
              onClick={startNewGame}
              className="btn btn-primary game-reset-button"
              type="reset"
            >
              Reset
            </Button>
          </div>
          <div className="col-md-5"></div>
        </div>
        <div className="row">
          <div className="col-md">
            <HangmanGame key={gameKey} />
          </div>
        </div>
        {/* Footer import */}
        <Footer />
        {/* Game page child container closing tag */}
      </div>

      {/* Game page container closing tag */}
    </div>
  );
}
