import React from 'react';
import { BiArrowBack } from "react-icons/bi";

const Postpage: React.FC = () => {
  return (
    <main className="p-4">
      <header>
        <BiArrowBack className="text-3xl" />
      </header>
      <h1 className="text-3xl font-bold my-7 text-gray-700">Writing</h1>
      <section className="flex flex-col gap-10">
        <div>
          <h2 className="text-3xl font-semibold text-green-400">7 Reasons why I don't write</h2>
          <div className="flex gap-2 my-2 text-gray-400">
            <p>30 Jan 2023</p>
            <p>GENERAL</p>
          </div>
          <p className="text-lg">I didn't write a lot last year,
            even though I wanted to. Here are the things I tell
            myself that keep me from writing, and why they are probably bullshit.</p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-green-400">7 Reasons why I don't write</h2>
          <div className="flex gap-2 my-2 text-gray-400">
            <p>30 Jan 2023</p>
            <p>GENERAL</p>
          </div>
          <p className="text-lg">I didn't write a lot last year,
            even though I wanted to. Here are the things I tell
            myself that keep me from writing, and why they are probably bullshit.</p>
        </div>
      </section>
    </main>
  )
}

export default Postpage