import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:av1597@srmist.edu.in">
          av1597@srmist.edu.in
        </a>

        <i class="fa fa-linkedin"></i>
        <a
          class="mail-links"
          href="https://www.linkedin.com/in/aniket-verma-87a146233/"
        >
          User Name:Aniket Verma
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/aniket887">
          aniket887
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="https://www.instagram.com/aniket_19d/">
          @aniket_19d
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+919415484427">
          +91 9415484427
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile" />
      </div>
    </div>
  );
};

export default Contact;
