import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Spin as Hamburger } from 'hamburger-react';
import { menu } from '../data/data';

const Navbar: React.FC = () => {
  const [displayMenu, setDisplayMenu] = useState<string>("hidden");

  const toogleMenu = (toogled: any) => {
    if (toogled) {
      setDisplayMenu("flex flex-col items-center content-center justify-center");
    } else {
      setDisplayMenu("hidden");
    }
  }
  return (
    <header>
      <nav className="md:hidden">
        <div className="flex justify-end bg-black text-white fixed top-0 right-0 left-0">
          <Hamburger onToggle={toogleMenu} />
        </div>
        <div>
          <div className={`${displayMenu} menuColor`}>
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
                    key={index}
                    className="hover:cursor-pointer"
                  >
                    {item.name}
                  </Link>
                )
              })
            }
          </div>
        </div>
      </nav>
      <nav className="flex justify-end md:fixed md:top-30 md:right-0">
        <div className="hidden md:flex md:flex-col gap-10 items-end md:mr-2 bg-black p-3 rounded-2xl">
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
                  key={index}
                  className="hover:cursor-pointer"
                >
                  <item.icon className="text-2xl text-green-400" />
                </Link>
              )
            })
          }

        </div>
      </nav>
    </header>
  )
}

export default Navbar