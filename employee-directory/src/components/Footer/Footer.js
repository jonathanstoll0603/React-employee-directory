import React from "react";
import "./Footer.css"

function Footer() {
  return (
  <footer className="footer">
    <div className="footer-div py-4">
      <a href="https://github.com/jonathanstoll0603/React-employee-directory" target="_blank" className="px-4" alt="GitHub link"><i class="fab fa-github-square fa-3x"></i></a>
      <a href="https://www.linkedin.com/in/jonathan-stoll-092351133/" target="_blank" className="px-4" alt="LinkedIn Link"><i class="fab fa-linkedin-in fa-3x"></i></a>
    </div>
  </footer>
  )
}

export default Footer;