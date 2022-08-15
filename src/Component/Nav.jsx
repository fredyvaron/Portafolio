import React, { useState } from "react";
import { Navbar, Button, DarkThemeToggle } from "flowbite-react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-scroll";
import useDarkMode from '../Hooks/UseDarkMode';
function Nav() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div  className="sticky top-0">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />

          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Fredy Alberto
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button onClick={() => setTheme(colorTheme)}>
            
            {colorTheme==="dark"?<svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>:<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>}
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
          /*       href="/"
      active={true} */
          >
            <Link to={"home"} smooth duration={500} className="cursor-pointer">
              Inicio
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to={"sobremi"} smooth duration={500} className="cursor-pointer">
              Sobre mi
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to={"skill"} smooth duration={500} className="cursor-pointer">
              Skill
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to={"proyectos"} smooth duration={500} className="cursor-pointer">
              Proyectos
            </Link>
          </Navbar.Link>

          <Navbar.Link>
            <Link to={"contactame"} smooth duration={500} className="cursor-pointer">
            Contactame
            </Link>
            </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Nav;
