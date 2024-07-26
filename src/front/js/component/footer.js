import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 text-center">
      <p>
        Made with <i className="fa fa-heart text-danger" /> by{" "}
        <a href="http://www.4geeksacademy.com">BeautyFitness</a>
      </p>
      <div className="social-icons">
        <i className="fab fa-twitter m-20px"></i>
        <i className="fab fa-instagram mr-20px"></i>
        <i className="fab fa-youtube mr-20px"></i>
        <i className="fab fa-linkedin-in mr-20px"></i>
      </div>
    </footer>
  );
};

export default Footer;
