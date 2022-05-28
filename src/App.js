import './App.css';
import NavBar from './components/NavBar.js';
import MainImage from './components/MainImage.js';
import AboutMe from './components/AboutMe.js';
import WorkExperience from './components/WorkExperience.js';
import Education from './components/Education.js'
import Hobbies from './components/Hobbies.js';
import Gallery from './components/Gallery.js';
import ContactMeForm from './components/ContactMeForm';
import MilitaryService from './components/MilitaryService';

function App() {
  return (
    <>
      <NavBar/>
      <MainImage/>
      <AboutMe/>
      <WorkExperience/>
      <Education/>
      <MilitaryService/>
      <Hobbies/>
      <Gallery/>
      <ContactMeForm/>
    </>
  );
}

export default App;
