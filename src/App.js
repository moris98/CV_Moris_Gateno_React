import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import MainImage from './components/MainImage.js';
import AboutMe from './components/AboutMe.js';
import WorkExperience from './components/WorkExperience.js';
import Education from './components/Education.js'
import Hobbies from './components/Hobbies.js';
import Gallery from './components/Gallery.js';
import ContactMeForm from './components/ContactMeForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <NavBar></NavBar>
      <MainImage></MainImage>
      <AboutMe></AboutMe>
      <WorkExperience></WorkExperience>
      <Education></Education>
      <Hobbies></Hobbies>
      <Gallery></Gallery>
      <ContactMeForm></ContactMeForm>
    </div>
  );
}

export default App;
