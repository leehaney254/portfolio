import React from 'react';
import Intro from '../components/Intro';
import About from '../components/About';
import Projects from '../components/Projects';
import Posts from '../components/Posts';

const Home = () => {
  return (
    <main>
      <Intro />
      <About />
      <Projects />
      <Posts />
    </main>
  )
}

export default Home