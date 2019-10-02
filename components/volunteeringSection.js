import Link from 'next/link';
import Cards from '../components/cards'

const VolunteeringSection = (props) => (
      <div class={`items-center justify-center h-screen ${props.bgColor}`}>
            <div class="container mx-auto flex items-center content-center"> 
                <div class={` flex flex-col my-32 w-full self-center justify-center items-start text-center sm:text-left ${props.textColor}`}>
                    <p class="uppercase tracking-loose w-full text-base m-2">{props.smallTitle}</p>
                    <h1 class="my-4 font-bold leading-tight text-6xl m-2">{props.bigTitle}</h1>
                    <p class="leading-normal mb-8 text-lg m-2">
                        {props.description} 
                    </p>
                    <Cards projects={[
                        {
                            image: "/static/stemprogram.jpeg",
                            alt: "Primary School STEM Program",
                            name: "UTS Primary STEM Program",
                            tech: "STEM tutor for primary school students",
                            description:
                                "The most rewarding thing I have ever put my hand up for is to tutor STEM for primary school students. I was very fortunate to have given a chance to inspire these young students to get involved in Tech.",
                            url: "https://www.uts.edu.au/partners-and-community/initiatives/social-justice-uts/social-impact-grants/news/building-stem",
                            urlDescription: "Website"
                        },
                        {
                            image: "/static/progsoccode2change.jpg",
                            alt: "Code2Change 2019",
                            name: "Code2Change Hackathon",
                            tech: "Event Organiser ",
                            description:
                                "While I was the president, I organised one of the biggest events of the year for ProgSoc: the annual Hackathon. This was a hackathon centered around the issue of urban planning.",
                            url: "https://www.facebook.com/events/1161737503998764/",
                            urlDescription: "Facebook Event"
                        },
                        {
                            image: "/static/arduinoproject.jpeg",
                            alt: "UTS Build 2019",
                            name: "UTS Build Abroad @ TUB",
                            tech: "Studied abroad in Berlin!",
                            description:
                                "As a part of my degree, I decided to go overseas and study some electronics while retaining the knowledge I had of physical prototyping, so I created this thing while I was there.",
                            url: "https://www.instagram.com/p/B0A8PjJAWbb/",
                            urlDescription: "Instagram Post"
                        },
                        {
                            image: "/static/gamesjam.jpeg",
                            alt: "IxG Games Jam 2019",
                            name: "IxG Games Jam 2019",
                            tech: "Event organiser",
                            description:
                                "I volunteered to help assist and run the event alongside other student societies. This has been a highlight for IxGSoc as this was our first ever Games Jam run by students.",
                            url: "https://itch.io/jam/interactive-media-jam?fbclid=IwAR1FuozxQsHdQWzUGs1wZNAaKWUIkg5KsO4upEMWt3t0TnS8q4qjcfvlVNM",
                            urlDescription: "Projects"
                        },
                        {
                            image: "/static/hackaus.jpeg",
                            alt: "Hackathons Australia",
                            name: "HackAus 5th Birthday!",
                            tech: "Hackathon organiser and veteran",
                            description:
                                "I volunteered to talk a bit about the 'Code2Change' hackathon experience both with planning and allocating the resources to run smoothly.",
                            url: "https://www.facebook.com/groups/hackathonsaustralia/",
                            urlDescription: "Group"
                        },
                        {
                            image: "/static/legomindstorms.jpeg",
                            alt: "Feedback from STEM Students",
                            name: "Feedback from the STEM Program",
                            tech: "Impactful video showing the results.",
                            description:
                                "This video shows the impact of what the program outcomes are for the outreach that UTS and my team are doing. We are thrilled to be receiving such support and feedback from the students!",
                            url: "https://www.uts.edu.au/about/faculty-engineering-and-information-technology/women-engineering-and-it/school-students-and-1",
                            urlDescription: "Video"
                        },
                        {
                            image: "/static/ethcon.jpeg",
                            alt: "Edcon",
                            name: "EDCON 2019",
                            tech: "Panelist for Community in Blockchain",
                            description:
                                "I volunteered to be a part of the panelist to drive changes in community and the way people perceive the blockchain developer community in general. This was my first time going on as a speaker in a conference.",
                            url: "https://www.edcon.io/",
                            urlDescription: "Website"
                        },
                        {
                            image: "/static/daoblockathon.jpeg",
                            alt: "DAO Blockathon Blocumenta",
                            name: "Blocumenta Blockathon 2019",
                            tech: "Blockchain hackathon using DAO",
                            description:
                                "We created a unique 'geocaching' game using Tokenscript from AlphaWallet for artworks in local art spaces in Sydney. We called it the infamous binchicken because we couldn't think of anything else... haha.",
                            url: "https://medium.com/bitfwd/jenny-in-wonderland-my-debut-in-the-blockchain-world-b3dc2f760e4",
                            urlDescription: "Blog"
                        },
                        {
                            image: "/static/perspektwysummit.jpg",
                            alt: "Women in Tech Summit",
                            name: "Women in Tech Summit 2018",
                            tech: "UTS goes to Warsaw!",
                            description:
                                "I was very fortunate to be one of four UTS students to be invited to this Women in Tech summit in Warsaw, Poland in 2018. It's a wonderful pleasure to be able to meet other females in tech in Europe and around the world.",
                            url: "https://womenintechsummit.pl/",
                            urlDescription: "Website"
                        },
                        
                        
                        
                    ]}/>
                </div>
            </div>
        </div>
);

export default VolunteeringSection;