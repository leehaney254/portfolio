import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Spin as Hamburger } from 'hamburger-react';
import { menu } from '../data/data';

const Navbar: React.FC = () => {
  const [displayMenu, setDisplayMenu] = useState<string>("hidden");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setOpen] = useState(false)

  const removeMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      setOpen(true);
      document.body.style.overflow = 'hidden';
      setDisplayMenu("flex flex-col items-center content-center justify-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40");
    } else {
      setOpen(false);
      document.body.style.overflow = 'auto';
      setDisplayMenu("hidden");
    }
  }

  return (
    <header>
      <nav className="md:hidden relative">
        <div className="flex justify-end bg-black text-white fixed top-0 right-0 left-0 z-50">
          <Hamburger toggled={isOpen} onToggle={removeMenu} />
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
                    className="hover:cursor-pointer size"
                    onClick={removeMenu}
                  >
                    {item.name}
                  </Link>
                )
              })
            }
          </div>
        </div>
      </nav>
      <nav className="flex justify-end md:fixed md:top-60 md:right-0">
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
                  className="hover:cursor-pointer size"
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