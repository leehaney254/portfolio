import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Project } from '../data/data';


const Projects: React.FC = () => {
  return (
    <section className="p-4 bg-black text-white" id="Projects">
      <div className="flex flex-col gap-2 items-center mt-8">
        <p className="text-green-600">MY PROJECTS</p>
        <h2 className="text-3xl font-bold mb-10">Yeah, I work hard 💼</h2>
      </div>
      <div className='flex flex-col gap-5 lg:gap-10 flex-wrap md:p-5 md:items-center'>
        {
          Project.slice(0, 3).map((element, index) => {
            return (
              <div key={index} className="border-charcoal border-2 p-4 rounded-3xl lg:flex lg:gap-4 lg:w-3/4">
                <img className="rounded-xl lg:w-72 lg:h-64" src={element.image} alt="project screenshot" />
                <div className="lg:flex lg:flex-col gap-2 ">
                  <p className="text-charcoal">{index + 1}</p>
                  <div className="lg:flex lg:flex-col gap-2 ">
                    <h4 className="text-2xl font-bold">{element.title}</h4>
                    <p>
                      {element.description}
                    </p>
                    <ul className="flex gap-3 flex-wrap">
                      {
                        element.technologies.map((tech, index) => {
                          return (
                            <li key={index} className="bg-charcoal p-1 rounded text-black">{tech}</li>
                          )
                        })
                      }
                    </ul>
                    <div className="flex gap-5">
                      <a href={element.live} target="_blank" className="flex items-center gap-2 size">Live Site <AiOutlineArrowRight /></a>
                      <a href={element.github} target="_blank" className="flex items-center gap-2 size">GitHub <AiOutlineArrowRight /></a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="flex justify-end mt-5 mb-5">
        <Link to="/projects">
          <p className="flex items-center text-lg gap-2 text-green-600">Other notable Projects <AiOutlineArrowRight /></p>
        </Link>
      </div>
    </section>
  )
}

export default Projects