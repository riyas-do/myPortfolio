import Profile from './Components/Profile/Profile';
import Experience from './Components/Experience/Experience';
import TechStack from './Components/Techstack/TechStack';
import Certificates from './Components/Certifications/Certificate';
import Projects from './Components/Projects/Project';

import './App.css';
export default function App(){
    return <>
    <div className='pageContainer'>
      <Profile />
      <Experience />
      <TechStack />
      <Certificates />
      <Projects />
    </div>
       
    </>
}