import React from "react";
import "../App.css";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="column" id="titleIcon">
        <div className="icons">
          <ul className="social-icon">
            <li className="social-icon__item">
              <a
                className="social-icon__link"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
              >
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
            </li>
            <li className="social-icon__item">
              <a
                className="social-icon__link"
                href="https://twitter.com/coolbloxyt/status/1448650817951584264?s=20"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </li>
            <li className="social-icon__item">
              <a
                className="social-icon__link"
                href="https://www.instagram.com/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </li>
            <li className="lastSocialIcon">
              <a
                className="social-icon__link"
                href="https://www.facebook.com/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="column" id="description">
        <p>
          {/* Lorem ipsum dolor sit amet. Est placeat iusto ea perferendis cumque
          quo voluptatem iste aut maiores libero qui nihil distinctio ut velit
          ducimus. Qui cumque voluptatem sit nesciunt vero et debitis dolor ut
          praesentium repellendus et ipsa repudiandae */}
          "We love films and storytelling as people.Its just a human compulsion
          to listen to and tell stories."
          <br />
          -Stanley Kubrick
        </p>
      </div>
      <div className="column" id="copyright">
        <p>&copy;2021 Group 6 BeSquare | All Rights Not Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
