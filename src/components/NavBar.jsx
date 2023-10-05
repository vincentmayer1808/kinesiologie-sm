"use client";

import { Navbar } from "flowbite-react";
import RV from "./RV"

export default function NavBar() {
  return (
    <>
      <Navbar fluid rounded className='fixed w-full z-30'>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-2xl text-rose-400 font-semibold">
            Kinésiologie SM
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
          <RV/>
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/">
            <p>Accueil</p>
          </Navbar.Link>
          <Navbar.Link href="/kinesiologie">
            Kinésiologie c&#8217;est quoi?
          </Navbar.Link>
          <Navbar.Link href="/about">Qui suis-je?</Navbar.Link>
          <Navbar.Link href="/services">Services</Navbar.Link>
          <Navbar.Link href="contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
