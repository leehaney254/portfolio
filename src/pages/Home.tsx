import React from 'react';
import Intro from '../components/Intro';
import About from '../components/About';
import Projects from '../components/Projects';
import Posts from '../components/Posts';
import Message from '../components/Message';

const Home = () => {
  return (
    <main>
      <Intro />
      <About />
      <Projects />
      <Posts />
      <Message />
    </main>
  )
}

export default Home