import React from 'react'
import { socilaMedia } from '../data/data';

const Message = () => {
  return (
    <section className="p-4 bg-black text-white">
      <div className="flex flex-col gap-2 items-center">
        <p className="text-green-600">LETS CHAT!</p>
        <h2 className="text-xl font-bold text-center">Got questions or proposal, or just want to say hello? Go ahead</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
        <div className="flex flex-row gap-2">
          {
            socilaMedia.map((element) => {
              return (
                <a className="text-2xl text-green-400" target="_blank" href={element.link}><element.icon /></a>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Message