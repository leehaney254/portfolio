import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { Project } from '../data/data';


const Projects = () => {
  return (
    <section className="p-4 bg-black text-white">
      <div className="flex flex-col gap-2 items-center">
        <p className="text-green-600">MY PROJECTS</p>
        <h2 className="text-3xl font-bold">Yeah, I work hard 💼</h2>
      </div>
      <div className='flex flex-col gap-5 flex-wrap'>
        {
          Project.map((element, index) => {
            return (
              <div className="border-charcoal border-2 p-4 rounded-3xl">
                <img className="rounded-xl" src={element.image} alt="project screenshot" />
                <p className="text-charcoal">{index + 1}</p>
                <div>
                  <h4 className="text-2xl font-bold">{element.title}</h4>
                  <p>
                    {element.description}
                  </p>
                  <ul className="flex gap-3 flex-wrap">
                    {
                      element.technologies.map((tech) => {
                        return (
                          <li className="bg-charcoal p-1 rounded text-black">{tech}</li>
                        )
                      })
                    }
                  </ul>
                  <div className="flex gap-5">
                    <a href={element.live} className="flex items-center gap-2">Live Site <AiOutlineArrowRight /></a>
                    <a href={element.github} className="flex items-center gap-2">GitHub <AiOutlineArrowRight /></a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="flex justify-end mt-5 mb-5">
        <p className="flex items-center text-lg gap-2">Other notable Projects <AiOutlineArrowRight /></p>
      </div>
    </section>
  )
}

export default Projects