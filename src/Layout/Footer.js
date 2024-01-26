import React from "react";
import "./Layout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrap">
        <div className="information">
          <div className="title-footer">BURGER KING® DELIVERY</div>
          <div className="hub">
            <a href="tel:1500025">
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />
              1500 25
            </a>
            <a href="mailto:guestservice@burgerking.co.id" className="email">
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }}/>
              <span>guestservice@burgerking.co.id</span>
            </a>
            <span className="social-media">
              <a
                href="https://www.facebook.com/burgerkingindonesia/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://www.instagram.com/burgerking.id/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://twitter.com/burgerking_id" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.youtube.com/channel/UC-F_fh9CRDwhJrY_ibHae-g"
                target="_blank"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </span>
          </div>
        </div>
        <div className="footer-more">
          <span className="about-privacy-terms">
            <a href="">About Us</a>
          </span>
          <span className="about-privacy-terms">
            <a href="">Kebijakan Privasi</a>
          </span>
          <span className="about-privacy-terms">
            <a href="">Syarat Kebijakan</a>
          </span>
          <span className="copyright">
            TM & © 2024 Burger King Corporation. Used Under License. All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
