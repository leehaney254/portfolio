import React from 'react'
import { posts } from '../data/data';
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const Posts: React.FC = () => {
  return (
    <section className="p-4">
      <div className="flex flex-col gap-2 items-center">
        <p className="text-green-600">FEATURED POSTS</p>
        <h2 className="text-3xl font-bold">Tech Adventures 🔥</h2>
        <div>
          {
            posts.map((element, index) => {
              return (
                <div key={index} className="relative mt-5">
                  <img className="rounded-xl" src={element.Image} alt={element.heading} />
                  <div className="absolute inset-0">
                    <div className="bg-black opacity-50 text-white h-full p-4 rounded-xl flex flex-col justify-between">
                      <h1 className="text-2xl font-bold">{element.heading}</h1>
                      <div className="flex items-center gap-1 text-lg">
                        <AiOutlineHeart />
                        <p>{element.like}</p>
                      </div>
                    </div>
                  </div>
                </div>

              )
            })
          }
        </div>
      </div>
      <div className="flex justify-end mt-5 mb-5">
        <p className="flex items-center text-lg gap-2 text-green-600">See All Posts <AiOutlineArrowRight /></p>
      </div>
    </section>
  )
}

export default Posts