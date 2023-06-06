import React, { lazy, Suspense } from 'react';
const Nav = lazy(() => import('../components/Navbar'));
const Intro = lazy(() => import('../components/Intro'));
const About = lazy(() => import('../components/About'));
const Projects = lazy(() => import('../components/Projects'));
const Posts = lazy(() => import('../components/Posts'));
const Message = lazy(() => import('../components/Message'));
import { InfinitySpin } from 'react-loader-spinner';

const Home: React.FC = () => {
  return (
    <main>
      <Suspense fallback={
        <InfinitySpin
          width='200'
          color="#4fa94d"
        />}>
        <Nav />
        <Intro />
        <About />
        <Projects />
        <Posts />
        <Message />
      </Suspense>
    </main>
  )
}

export default Home