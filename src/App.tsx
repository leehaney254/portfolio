import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
const Home = lazy(() => import('./pages/Home'));
const Project = lazy(() => import('./pages/Projecpage'));
const Post = lazy(() => import('./pages/Postpage'));
import './App.css';

function App() {

  return (
    <Suspense fallback={
      <section className="w-full h-screen flex justify-center items-center">
        <InfinitySpin
          width='200'
          color="#4fa94d"
        />
      </section>
    }>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/posts' element={<Post />} />

        </Routes>

      </BrowserRouter>
    </Suspense>
  )
}

export default App
