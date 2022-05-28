import React, { useRef } from "react";
import useWindowSize from "./useWindowSize.js";

const NavBar = () => {
  const isChecked = useRef();
  const handleHamburger = () => {
    console.log(isChecked.current.checked);
    if (isChecked.current.checked === true) {
      isChecked.current.checked = false;
    }
  };

  function WindowSizeInspector(props) {
    const [width] = useWindowSize();
    if (width > 1300) {
      props.refe.current.checked = false;
    }
    return;
  }

  return (
    <nav class="navbar">
      <WindowSizeInspector refe={isChecked} />
      <div class="logo">Moris Gateno</div>
      <ul class="nav-links">
        <input type="checkbox" id="checkbox_toggle" ref={isChecked} />
        <label for="checkbox_toggle" class="hamburger">
          &#9776;
        </label>
        <div class="menu">
          <li>
            <a href="#aboutMe" onClick={handleHamburger}>
              Home
            </a>
          </li>
          <li>
            <a href="#aboutMe" onClick={handleHamburger}>
              About Me
            </a>
          </li>
          <li>
            <a href="#workExperience" onClick={handleHamburger}>
              Work Experience
            </a>
          </li>
          <li>
            <a href="#education" onClick={handleHamburger}>
              Education
            </a>
          </li>
          <li>
            <a href="#militaryService" onClick={handleHamburger}>
              Military Service
            </a>
          </li>
          <li>
            <a href="#hobbies" onClick={handleHamburger}>
              Hobbies
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={handleHamburger}>
              Gallery
            </a>
          </li>
          <li>
            <a href="#contactForm" onClick={handleHamburger}>
              Contact Me
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};
export default NavBar;
