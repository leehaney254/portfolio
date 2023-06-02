import React, { ChangeEvent } from 'react'
import { socilaMedia } from '../data/data';
import emailjs from 'emailjs-com';

const Message: React.FC = () => {
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_32o15ew', 'template_wmb2vmh', e.target, 'DeF4bbsnMMS2DaOY9')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <section className="p-4 bg-black h-screen text-white">
      <div className="flex flex-col gap-2 items-center">
        <p className="text-green-600">LETS CHAT!</p>
        <h2 className="text-xl font-bold text-center">Got questions or proposal, or just want to say hello? Go ahead</h2>
        <form onSubmit={sendEmail}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="inputborder bg-black rounded-md px-4 py-2 w-full"
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
              name="email"
              className="inputborder bg-black rounded-md px-4 py-2 w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="inputborder bg-black rounded-md px-4 py-2 w-full"
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
            socilaMedia.map((element, index) => {
              return (
                <a key={index} className="text-2xl text-green-400" target="_blank" href={element.link}><element.icon /></a>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Message