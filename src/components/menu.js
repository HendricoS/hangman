// React imports
import React, { useState, useEffect, useCallback } from "react";

// Bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Button } from "react-bootstrap";

// Router-dom imports
import { Link } from "react-router-dom";

// Image imports

// Component imports
import Footer from "../components/Footer";

export default function Menu() {
  // An array of letters and their corresponding background colors
  const lettersWithColors = [
    { letter: "H", backgroundColor: "lightblue" },
    { letter: "A", backgroundColor: "gold" },
    { letter: "N", backgroundColor: "lightGreen" },
    { letter: "G", backgroundColor: "orange" },
    { letter: "M", backgroundColor: "teal" },
    { letter: "A", backgroundColor: "purple" },
    { letter: "N", backgroundColor: "dodgerBlue" },
  ];

  // An array of image URLs
  const imageUrls = [
    "Images/state2.GIF",
    "Images/state3.GIF",
    "Images/state4.GIF",
    "Images/state5.GIF",
    "Images/state6.GIF",
    "Images/state7.GIF",
    "Images/state8.GIF",
    "Images/state9.GIF",
    "Images/state10.GIF",
    "Images/state11.GIF",
  ];

  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Memoize the nextImage function
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  }, [imageUrls.length]);

  // Use useEffect without any dependencies
  useEffect(() => {
    const intervalId = setInterval(nextImage, 1000); // Change image every 1 second
    return () => clearInterval(intervalId);
  }, [nextImage]); // Include nextImage as a dependency for useEffect

  // ...

  return (
    <div className="container menu-container">
      {/* Main container */}
      <div className="container menu-child-container">
        <div className="row">
          <div className="col-md">
            <h1 className="menu-heading">
              {/* Use map to render each letter with its background color */}
              {lettersWithColors.map((letterData, index) => (
                <span
                  className="letters"
                  key={index}
                  style={{ backgroundColor: letterData.backgroundColor }}
                >
                  {letterData.letter}
                </span>
              ))}
            </h1>
          </div>
        </div>

        <div className="container hangman-image-container">
          <div className="row">
            <div className="col-md">
              {/* Display the current image based on the currentImageIndex */}
              <img
                src={imageUrls[currentImageIndex]}
                alt={`Hangman ${currentImageIndex + 1}`}
                className="hangman-image-menu"
              />
            </div>
          </div>

          <div className="row button-row">
            <div className="col-md">
              <Link to="/gamePage">
                <Button
                  className="btn btn-lg start-button-styling"
                  type="button"
                >
                  Start
                </Button>
              </Link>
            </div>
          </div>

          {/* hangman-image-container closing tag */}
        </div>
        {/* Footer import */}
        <Footer />
        {/* child container closing tag */}
      </div>

      {/* menu-container closing tag */}
    </div>
  );
}
