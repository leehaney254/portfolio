import React, { lazy, Suspense } from 'react';
const Intro = lazy(() => import('../components/Intro'));
const About = lazy(() => import('../components/About'));
const Projects = lazy(() => import('../components/Projects'));
const Posts = lazy(() => import('../components/Posts'));
const Message = lazy(() => import('../components/Message'));

const Home: React.FC = () => {
  return (
    <main>
      <Suspense fallback={<h1>Loading</h1>}>
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