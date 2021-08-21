import React from 'react';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import NavBar from './components/navBar';
import AboutMe from './components/AboutMe';
import WhoAmI from './components/whoAmI';
import MyWork from './components/myWork';
import Skills from './components/skills';
import Contact from './components/contact';
import Carousel from './components/myWork/Carousel';
import './App.css';

function App() {
  return (

    <div className="app_content">

      <div className="contact">
        <NavBar />

      </div>
      <div className="mainContent">
          <AboutMe />
          <WhoAmI/>
          <Skills />
          <MyWork/>
          <Contact />
      </div>
    </div>

  );
}

export default App;
