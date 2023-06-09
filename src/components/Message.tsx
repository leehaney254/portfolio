import React, { useState, ChangeEvent } from 'react'
import { socilaMedia } from '../data/data';
import emailjs from 'emailjs-com';
import massageImg from '../assets/message.png';
import kenya from '../assets/kenya.png';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Message: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [reply, setReply] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_32o15ew', 'template_wmb2vmh', e.target, 'DeF4bbsnMMS2DaOY9')
      .then((result) => {
        console.log(result.text);
        setReply(true);
      }, (error) => {
        console.log(error.text);
      });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  return (
    <section className="p-4 bg-black h-screen text-white" id="Contact">
      <div className="flex flex-col gap-2 items-center mt-8">
        <p className="text-green-600">LETS CHAT!</p>
        <h2 className="text-xl font-bold text-center mb-10">Got questions or proposal, or just want to say hello? Go ahead</h2>
        <div className="md:flex gap-24">
          <form onSubmit={sendEmail}>
            {reply && <p className="text-green-600">Thank you for your message!</p>}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
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
                value={formData.email}
                onChange={handleInputChange}
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
                value={formData.message}
                onChange={handleInputChange}
                className="inputborder bg-black rounded-md px-4 py-2 w-full"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white font-bold py-2 px-4 rounded size"
            >
              Submit
            </button>
          </form>
          <img className="hidden md:block w-96 h-96" src={massageImg} alt="message" />
        </div>
        <div className="flex flex-row gap-2 mt-10">
          {
            socilaMedia.map((element, index) => {
              return (
                <a key={index} className="text-2xl text-green-400 size" target="_blank" href={element.link}><element.icon /></a>
              )
            })
          }
        </div>
        <p className="flex items-center">&copy; made with ❤ by Leehaney <img src={kenya} alt="kenya flag" /></p>
      </div>
    </section>
  )
}

export default Message