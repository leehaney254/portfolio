import React from 'react';
import { name, aboutParagraph } from '../data/data';
import profile from '../assets/profile.jpg'
import { languages, libraries, db, tools } from '../data/data';
import './about.css';

const About: React.FC = () => {
  return (
    <section className="p-4 mt-8 lg:p-10 about" id="About">
      <div className="flex flex-col gap-2 items-center">
        <p className="text-green-600">Who is {name}?</p>
        <h2 className="text-3xl font-bold">A Bit About Me</h2>
        <img className="rounded-full w-20 h-30 lg:w-30 lg:h-38" src={profile} alt="My Image" />
        <p className='text-center'>{aboutParagraph}</p>
      </div>
      <div>
        <div className="flex flex-col gap-2 items-center mt-10">
          <p className="text-green-600">My Skills</p>
          <div className="lg:flex lg:flex-wrap lg:justify-center">
            <div className="mb-5">
              <h3 className="text-3xl text-center font-bold">Languages</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {
                  languages.map((item, index) => {
                    return (
                      <img key={index} src={item.link} alt={item.name} />
                    );
                  })
                }
              </div>
            </div>
            <div className="mb-5">
              <h3 className="text-3xl text-center font-bold">Libraries & Frameworks</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {
                  libraries.map((item, index) => {
                    return (
                      <img key={index} src={item.link} alt={item.name} />
                    );
                  })
                }
              </div>
            </div>
            <div className="mb-5">
              <h3 className="text-3xl text-center font-bold">Database Management</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {
                  db.map((item, index) => {
                    return (
                      <img key={index} src={item.link} alt={item.name} />
                    );
                  })
                }
              </div>
            </div>
            <div className="mb-5">
              <h3 className="text-3xl text-center font-bold">Developer Tools</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {
                  tools.map((item, index) => {
                    return (
                      <img key={index} src={item.link} alt={item.name} />
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About