import React from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import { name, profession, catchPhrase, socilaMedia, menu } from '../data/data';
import imageIntro from '../assets/intro.png';
import { Link, animateScroll as scroll } from 'react-scroll';


const Intro: React.FC = () => {
  const toogleMenu = (toogled: any) => {
    if (toogled) {
      console.log("menu")
    } else {
      console.log("not menu")
    }
  }

  return (
    <section className="p-4 bg-black text-white h-screen flex flex-col gap-6 md:items-center md:justify-center md: lg:flex-row">
      <div className="flex justify-end md:fixed md:top-30 md:left-0 md:right-0">
        <div className="md:hidden">
          <Hamburger onToggle={toogleMenu} />
        </div>
        <div className="hidden md:flex md:flex-col gap-10 items-end md:mr-2">
          {
            menu.map((item, index) => {
              return (
                <Link
                  to={item.name}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  spy={true}
                  exact="true"
                  activeClass="active"
                >
                  <div className="flex gap-2" key={index}>
                    <p>{item.name}</p>
                    <item.icon className="text-2xl text-green-400" />
                  </div>
                </Link>
              )
            })
          }

        </div>
      </div>
      <div className="mt-38 flex flex-col gap-1 md:flex-row-reverse md:gap-4 md:mt-0">
        <div>
          <h1 className="text-3xl font-bold lg:text-5xl">{name}</h1>
          <p className="text-xl">{profession}</p>
          <p className="text-lg">{catchPhrase}</p>
        </div>
        <div className="flex flex-row gap-2 md:flex-col">
          {
            socilaMedia.map((element, index) => {
              return (
                <a className="text-2xl text-green-400" key={index} target="_blank" href={element.link}><element.icon /></a>
              )
            })
          }
        </div>
      </div>
      <div>
        <img className="w-96 h-96" src={imageIntro} alt="dev image" />
      </div>
    </section>
  )
}

export default Intro