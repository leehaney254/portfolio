import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import { Project } from '../data/data';
import { AiOutlineArrowRight } from "react-icons/ai";

const Projecpage: React.FC = () => {
  return (
    <main className="p-4 bg-black text-white">
      <header>
        <Link to="/">
          <BiArrowBack className="text-3xl" />
        </Link>
      </header>
      <section className="flex flex-col md:items-center">
        <h1 className="text-3xl font-bold my-7 text-gray-700">Projects</h1>
        <div className="flex flex-col gap-10">
          {
            Project.slice(2).map((element, index) => {
              return (
                <div key={index} className="border-charcoal border-2 p-4 rounded-3xl lg:flex lg:gap-4 lg:w-3/4 lg:h-72">
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
                        <a href={element.live} target="_blank" className="flex items-center gap-2">Live Site <AiOutlineArrowRight /></a>
                        <a href={element.github} target="_blank" className="flex items-center gap-2">GitHub <AiOutlineArrowRight /></a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </main>
  )
}

export default Projecpage