import React from "react";

const footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <a href="https://www.envato.com" target="_blank" rel="noreferrer">
              <span className="copy">&copy; Copyright 2022 - Sarmed Rizvi</span>
            </a>
          </div>
          <div className="col-md-6">
            <div className="social-icons">
              <a
                href="https://www.facebook.com/sarmed.rizvi"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com/rizvi_sarmed"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/sarmedrizvi/"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/sarmedrizvi/"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
