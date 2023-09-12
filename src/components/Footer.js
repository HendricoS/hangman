import React from "react";

// Bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Font awesome imports
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Router-dom imports
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-2">
          <Link
            className="footer-links"
            to="/help"
            target="_blank"
            rel="noopener noreferrer"
          >
            Help
          </Link>
        </div>
        <div className="col-md-2">
          <p>
            <a
              className="footer-links"
              href="https://www.thefreedictionary.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dictionary
            </a>
          </p>
        </div>
        <div className="col-md-2">
          <p className="copyright">Copyright &copy; 2023</p>
        </div>
        <div className="col-md-3"></div>
      </div>

      <div className="row github-row">
        <div className="col-md">
          <a
            href="https://github.com/HendricoS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="4x"
              className="github-icon"
            />
          </a>
        </div>
      </div>
      {/* Footer container closing tag */}
    </div>
  );
}
