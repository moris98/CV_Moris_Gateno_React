
import React, {useLayoutEffect,useState} from 'react';
import WindowSizeInspector from './WindowSizeInspector.js';

const NavBar= () => {
    const isChecked=React.createRef()
    const handleHamburger = () => {
        console.log(isChecked.current.checked)
        if (isChecked.current.checked == true){
            isChecked.current.checked=false
        }
    }

    return (
        <nav class="navbar">
            <WindowSizeInspector refe={isChecked}></WindowSizeInspector>
            <div class="logo">Moris Gateno</div>
            <ul class="nav-links">
                <input type="checkbox" id="checkbox_toggle" ref={isChecked}/>
                <label for="checkbox_toggle" class="hamburger">&#9776;</label>
                <div class="menu">
                    <li><a href="#aboutMe" onClick={handleHamburger}>Home</a></li>
                    <li><a href="#aboutMe" onClick={handleHamburger}>About Me</a></li>
                    <li><a href="#workExperience" onClick={handleHamburger}>Work Experience</a></li>
                    <li><a href="#education" onClick={handleHamburger}>Education</a></li>
                    <li><a href="#hobbies" onClick={handleHamburger}>Hobbies</a></li>
                    <li><a href="#gallery" onClick={handleHamburger}>Gallery</a></li>
                    <li><a href="#contactForm" onClick={handleHamburger}>Contact Me</a></li>
                </div>
            </ul>
        </nav>
    );
}
export default NavBar