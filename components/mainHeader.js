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
        </div>
      </div>
    </div>
  )
}

export default MainHeader
