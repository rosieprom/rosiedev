/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Link from 'next/link'

function Navigation () {
  const [menuOpen, toggleMenu] = useState(false)
  return (
    <>
      <nav class="bg-white fixed w-full z-30 top-0 text-black p-6">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-end mt-0 py-2">
          <div class="block lg:hidden pr-4">
            <button class="flex items-center px-3 py-2 border rounded text-black border-black hover:text-purple-800 hover:border-purple-800 appearance-none focus:outline-none" onClick={() => toggleMenu(!menuOpen)}>
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
            </button>
          </div>
          <div class={`${
                  menuOpen ? 'block' : 'hidden'
                } w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20`} id="nav-content">
            <ul class="list-reset lg:flex justify-end flex-1 items-center">
              <li class="mr-3">
                <Link href="/">
                  <a class="inline-block text-black no-underline hover:text-purple-800 hover:text-underline py-2 px-4">Home</a>
                </Link>
              </li>
              <li class="mr-3">
                <Link href="/work">
                  <a class="inline-block text-black no-underline hover:text-purple-800 hover:text-underline py-2 px-4">Work</a>
                </Link>
              </li>
              <li class="mr-3">
                <Link href="/volunteering">
                  <a class="inline-block text-black no-underline hover:text-purple-800 hover:text-underline py-2 px-4">Volunteering</a>
                </Link>
              </li>
              {/* <li class="mr-3">
                <Link href="/about">
                  <a class="inline-block text-black no-underline hover:text-purple-800 hover:text-underline py-2 px-4">About</a>
                </Link>
              </li> */}
            </ul>
            <a href="/static/RosalindaProm_CV_Sept2019.pdf" target="_blank" rel="noopener noreferrer">
              <a class="block mt-4 lg:inline-block lg:mt-0 mr-4">
                <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                  Download Resume
                </button>
              </a>
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation
