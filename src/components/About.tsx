import React from 'react';
import { name, aboutParagraph } from '../data/data';
import profile from '../assets/profile.jpg'
import javaScript from '../assets/javascript.svg';
import ruby from '../assets/ruby.svg';
import c from '../assets/c.svg';
import react from '../assets/react.svg';
import redux from '../assets/redux.svg';
import typescript from '../assets/typescript.svg';
import rails from '../assets/rails.svg';
import node from '../assets/node.svg';
import postgres from '../assets/postgres.svg';
import mongo from '../assets/mongodb.svg';
import git from '../assets/git.svg';
import github from '../assets/github.svg';
import vs from '../assets/visualStudio.svg';

const About = () => {
  return (
    <section className="p-4">
      <div className="flex flex-col gap-2 items-center">
        <p className="text-green-600">Who is {name}?</p>
        <h2 className="text-3xl font-bold">A Bit About Me</h2>
        <img className="rounded-full w-20 h-30" src={profile} alt="My Image" />
        <p className='text-center'>{aboutParagraph}</p>
      </div>
      <div>
        <div className="flex flex-col gap-2 items-center">
          <p className="text-green-600">My Skills</p>
          <div>
            <h3 className="text-3xl text-center font-bold">Languages</h3>
            <div className="flex flex-wrap">
              <img src={javaScript} alt="JS" />
              <img src={ruby} alt="ruby" />
              <img src={c} alt="C" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl text-center font-bold">Libraries & Frameworks</h3>
            <div className="flex flex-wrap">
              <img src={react} alt="react" />
              <img src={redux} alt="redux" />
              <img src={typescript} alt="typescript" />
              <img src={rails} alt="rails" />
              <img src={node} alt="node" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl text-center font-bold">Database Management</h3>
            <div className="flex flex-wrap">
              <img src={postgres} alt="JS" />
              <img src={mongo} alt="ruby" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl text-center font-bold">Developer Tools</h3>
            <div className="flex flex-wrap">
              <img src={git} alt="JS" />
              <img src={github} alt="ruby" />
              <img src={vs} alt="C" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About