import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { name, profession, catchPhrase, linkedin } from '../data/data';

const Intro = () => {
  return (
    <section className="p-4 bg-black text-white h-screen">
      <div className="flex justify-end">
        <AiOutlineMenu className="text-3xl" />
      </div>
      <div className="mt-40 flex flex-col gap-1">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-xl">{profession}</p>
        <p className="text-lg">{catchPhrase}</p>
        <div className="flex flex-row gap-2">
          <a className="text-2xl text-pink-600" href={linkedin}><FaLinkedinIn /></a>
          <a className="text-2xl text-pink-600" href={linkedin}><FaGithub /></a>
          <a className="text-2xl text-pink-600" href={linkedin}><FaTwitter /></a>
        </div>
      </div>
    </section>
  )
}

export default Intro