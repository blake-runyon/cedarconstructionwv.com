"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 bg-black">
        <div className="container px-4 flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-center text-center lg:w-auto lg:static lg:block lg:justify-start mr-4 my-2 p-3 rounded-3xl">
            <Link
              className="text-sm font-bold leading-relaxed inline-block whitespace-nowrap uppercase text-white bg-white p-3 rounded-3xl"
              href="/"
              onClick={() => setNavbarOpen(false)}
            >
              <Image 
                src="/logo.png"
                alt='logo'
                width={125}
                height={100}
              />
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={navbarOpen ? faX : faBars}/>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/about"
                  onClick={() => setNavbarOpen(false)}
                >
                  <span className="ml-2">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/work"
                  onClick={() => setNavbarOpen(false)}
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Our Work</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/contact"
                  onClick={() => setNavbarOpen(false)}
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}