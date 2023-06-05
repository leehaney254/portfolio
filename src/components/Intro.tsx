import React from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import { name, profession, catchPhrase, socilaMedia } from '../data/data';

const Intro: React.FC = () => {
  return (
    <section className="p-4 bg-black text-white h-screen">
      <div className="flex justify-end">
        <Hamburger />
      </div>
      <div className="mt-40 flex flex-col gap-1">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-xl">{profession}</p>
        <p className="text-lg">{catchPhrase}</p>
        <div className="flex flex-row gap-2">
          {
            socilaMedia.map((element, index) => {
              return (
                <a className="text-2xl text-green-400" key={index} target="_blank" href={element.link}><element.icon /></a>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Intro