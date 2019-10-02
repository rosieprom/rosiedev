import Cards from '../components/cards'

const WorkSection = (props) => (
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
                            image: "/static/alphawalletweb.png",
                            alt: "AlphaWallet",
                            name: "AlphaWallet",
                            tech: "JAM Stack Website",
                            description:
                                "AlphaWallet is one of the first native blockchain cryptocurrency wallets adopting TokenScript. I had the pleasure of designing and developing their website and SEO.",
                            url: "https://alphawallet.com",
                            urlDescription: "Website"
                        },
                        {
                            image: "/static/wieitsymposiumweb.png",
                            alt: "Women in Engineering and IT Symposium",
                            name: "Women in Engineering and IT Symposium",
                            tech: "HTML/CSS Website",
                            description:
                                "This was a joint inter-university event hosted by UTS and UQ to bring together Female leaders in tech and educate on diversity and things.",
                            url: "http://womeninenganditsymposium.org.au/",
                            urlDescription: "Website"
                        },
                        {
                            image: "/static/progsocweb.png",
                            alt: "ProgSoc",
                            name: "ProgSoc 2019",
                            tech: "Gatsby ReactJS Markdown",
                            description:
                                "This was a hobby project I did with my Executive team in hopes it would bring a fresh new look to ProgSoc's current website.",
                            url: "https://progsoc.netlify.com",
                            urlDescription: "Website"
                        },
                        {
                            image: "/static/developerpeachyweb.png",
                            alt: "Developerpeachy",
                            name: "DeveloperPeachy",
                            tech: "Jekyll Ruby Markdown",
                            description:
                                "I was looking for a fresh new website and did this using a Jekyll theme, Github pages guide and some cool markdown.",
                            url: "https://developerpeachy.github.io",
                            urlDescription: "Website"
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
                        
                    ]}/>
                </div>
            </div>
        </div>
);

export default WorkSection;