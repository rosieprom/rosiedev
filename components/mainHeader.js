/* eslint-disable no-unused-vars */
import Link from 'next/link'

function MainHeader (props) {
  return (
    <div class={`items-center justify-center min-h-screen ${props.bgColor}`}>
      <div class="container mx-auto flex items-center content-center">
        <div class={` flex flex-col sm:my-32 md:my-64 w-full self-center justify-center items-start text-center sm:text-left ${props.textColor}`}>
          <p class="uppercase tracking-loose w-full text-base sm:p-4 md:px-8">{props.smallTitle}</p>
          <h1 class="my-4 font-bold leading-tight text-6xl sm:p-4 md:px-8">{props.bigTitle}</h1>
          <p class="leading-normal mb-4 text-lg sm:p-4 md:px-8">
            {props.description}
          </p>
          <div class="flex flex-wrap">
            <div class="w-full sm:p-4 md:px-8">
              <Link href="/work">
                <button class="bg-purple-300 hover:bg-purple-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8.293 6.293L2.586 12 8.293 17.707 9.707 16.293 5.414 12 9.707 7.707zM15.707 17.707L21.414 12 15.707 6.293 14.293 7.707 18.586 12 14.293 16.293z"/></svg>
                  <span>Work</span>
                </button>
              </Link>
            </div>
            <div class="w-full sm:p-4 md:px-8">
              <Link href="/volunteering">
                <button class="bg-purple-300 hover:bg-purple-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20.205,4.791c-1.137-1.131-2.631-1.754-4.209-1.754c-1.483,0-2.892,0.552-3.996,1.558 c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412L12,21.414 l8.207-8.207C22.561,10.854,22.562,7.158,20.205,4.791z"/></svg>
                  <span>Volunteering</span>
                </button>
              </Link>
            </div>
            <div class="w-full sm:p-4 md:px-8">
              <a href="/static/RosalindaProm_CV_Sept2019.pdf" target="_blank" rel="noopener noreferrer">
                <button class="bg-purple-300 hover:bg-purple-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19 9L15 9 15 3 9 3 9 9 5 9 12 17zM4 19H20V21H4z"/></svg>
                  <span>Resume</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHeader
