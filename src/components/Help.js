import React from "react";

// Bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function HelpContent() {
  return (
    <div className="container help-container">
      <div className="container help-child-container">
        <div className="row">
          <div className="col-md">
            <h1 className="help-heading">HOW TO PLAY</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <h2 className="help-h2">The Game</h2>
          </div>
        </div>
        <div className="row help-rows">
          <div className="col-md">
            <p className="help-paraG">
              Hangman is a classic word game in which you must guess the secret
              word one letter at a time.
            </p>
            <ul className="help-ul">
              <li className="help-li">
                Guess one letter at a time to reveal the secret word.
              </li>
              <li className="help-li">
                Each incorrect guess adds another part to the hangman. You only
                get 7 incorrect guesses.
              </li>
            </ul>
          </div>
        </div>

        <div className="row help-rows">
          <div className="col-md">
            <h2 className="help-h2">The Words</h2>
            <p className="help-paraG">
              You can look up your answers in the dictionary at the end of each
              round. Click on the link at the bottom of the page where it says
              Dictionary to go to
              <a
                href="https://www.thefreedictionary.com/"
                className="free-dictionary"
                style={{ marginLeft: "0.3em", marginRight: "0.3em" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                TheFreeDictionary.com
              </a>
              website.
            </p>
          </div>
        </div>

        <div className="row help-rows">
          <div className="col-md">
            <h2 className="help-h2">Hints</h2>
            <p className="help-paraG">
              Click on the hint if you struggle with a word. Keep in mind that
              you only get 2 hints per round.
            </p>
          </div>
        </div>

        {/* Help child container closing tag */}
      </div>
      {/* Help container closing tag */}
    </div>
  );
}
