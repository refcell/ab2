import React from 'react';
import '../scss/App.scss';
import Header from "./Header";
import Intro from './Intro';
import * as Scroll from 'react-scroll';
import Projects from './Projects';
import Footer from './Footer';
import Title from './Title';
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';
import Education from './Education';
import Experience from './Experience';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header logo={require('../assets/logos/ABWhite.png')} />
      <Scroll.Element name="main">
        <main>
          <ScrollUpButton EasingType='easeInQuad' AnimationDuration={800} style={{ backgroundColor: 'rgb(255, 255, 255, 0)', fill: "#ffffff" }} />
          <Intro />
          <Title title="Projects" color="#97AF83" />
          <Projects />
          <Title title="Experience" color="#BCBC8F" />
          <Experience />
          <Title title="Education" color="#929E8C" />
          <Education />
          <Footer />
        </main>
      </Scroll.Element>
    </div>
  );
}

export default App;
