import Link from 'next/link';

const SectionHeader = (props) => (
      <div class={`items-center justify-center h-screen ${props.bgColor}`}>
            <div class="container mx-auto flex items-center content-center"> 
                <div class={` flex flex-col my-64 w-full self-center justify-center items-start text-center sm:text-left ${props.textColor}`}>
                    <p class="uppercase tracking-loose w-full text-base m-2">{props.smallTitle}</p>
                    <h1 class="my-4 font-bold leading-tight text-6xl m-2">{props.bigTitle}</h1>
                    <p class="leading-normal mb-8 text-lg m-2">
                        {props.description} 
                    </p>
                </div>
            </div>
        </div>
);

export default SectionHeader;