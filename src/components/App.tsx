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
import Certificates from './Certificates';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header logo={require('../assets/logos/ABWhite.png')} />
      <Scroll.Element name="main">
        <main>
          <ScrollUpButton EasingType='easeInOutSine' AnimationDuration={800} style={{ backgroundColor: 'rgb(255, 255, 255, 0)', fill: "#ffffff" }} />
          <Intro />
          <Title title="Projects" color="#808A87" />
          <Projects />
          <Title title="Experience" color="#929E8C" />
          <Experience />
          <Title title="Certificates" color="#93A086" />
          <Certificates />
          <Title title="Education" color="#A0AD97" />
          <Education />
          <Footer color="#7F887C" />
        </main>
      </Scroll.Element>
    </div>
  );
}

export default App;
