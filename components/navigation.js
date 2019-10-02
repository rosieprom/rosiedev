import Link from "next/link"
import React from "react"

function Navigation() {

  return (
    <>
      <nav class="flex items-center justify-between flex-wrap bg-transparent p-6">
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-black border-black hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <Link href="/">
              <a class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-500 mr-4">
                Home
              </a>
            </Link> 
            <Link href="/work">
              <a class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-500 mr-4">
                Work
              </a>
            </Link>
            <Link href="/volunteering">
              <a class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-500 mr-4">
                Volunteering
              </a>
            </Link>
            <Link href="/about">
              <a class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-500 mr-4">
                About
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
