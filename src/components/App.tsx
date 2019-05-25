import React from 'react';
import '../scss/App.scss';
import Header from "./Header";
import Intro from './Intro';
import * as Scroll from 'react-scroll';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Scroll.Element name="main">
        <main>
          <Intro />
        </main>
      </Scroll.Element>
    </div>
  );
}

export default App;
