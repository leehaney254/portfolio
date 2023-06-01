import React from 'react';
import { name, aboutParagraph } from '../data/data';
import profile from '../assets/profile.jpg'
import { languages, libraries, db, tools } from '../data/data';

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
            <div className="flex flex-wrap justify-center">
              {
                languages.map((item) => {
                  return (
                    <img src={item.link} alt={item.name} />
                  );
                })
              }
            </div>
          </div>
          <div>
            <h3 className="text-3xl text-center font-bold">Libraries & Frameworks</h3>
            <div className="flex flex-wrap justify-center">
              {
                libraries.map((item) => {
                  return (
                    <img src={item.link} alt={item.name} />
                  );
                })
              }
            </div>
          </div>
          <div>
            <h3 className="text-3xl text-center font-bold">Database Management</h3>
            <div className="flex flex-wrap justify-center">
              {
                db.map((item) => {
                  return (
                    <img src={item.link} alt={item.name} />
                  );
                })
              }
            </div>
          </div>
          <div>
            <h3 className="text-3xl text-center font-bold">Developer Tools</h3>
            <div className="flex flex-wrap justify-center">
              {
                tools.map((item) => {
                  return (
                    <img src={item.link} alt={item.name} />
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About