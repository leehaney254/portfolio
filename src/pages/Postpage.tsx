import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import { posts } from '../data/data';

const Postpage: React.FC = () => {
  return (
    <main className="p-4">
      <header>
        <Link to="/">
          <BiArrowBack className="text-3xl" />
        </Link>
      </header>
      <h1 className="text-3xl font-bold my-7 text-gray-700">Writing</h1>
      <section className="flex flex-col gap-10">
        {
          posts.slice(3).map((article, index) => {
            return (
              <div key={index}>
                <h2 className="text-3xl font-semibold text-green-400">{article.heading}</h2>
                <div className="flex gap-2 my-2 text-gray-400">
                  <p>{article.date}</p>
                  <p>{article.genre}</p>
                </div>
                <p className="text-lg">{article.description}</p>
              </div>
            )
          })
        }
      </section>
    </main>
  )
}

export default Postpage