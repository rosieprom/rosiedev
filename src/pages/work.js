import Layout from "../components/layout";
import Cards from "../components/cards";

function Work() {
  return (
    <Layout>
      <div className="flex justify-start pt-10">
        <h1 className="font-bold font-mono text-6xl">
          Achievements, Projects and Work.
        </h1>
      </div>
      <Cards
       items ={[
           {
                src: "/static/triangle.png",
                alt: "Triangle of Lights",
                title: "Triangle of Lights",
                shortDescription: "Arduino physical prototype to reflect touch and light feedback. This project was made for the UTS FEIT BUILD Program",
                linkName:"Github",
                url: "https://github.com/developerpeachy/TrianglesOfLight",
                linkNameTwo: "Instagram",
                urlTwo: "https://www.instagram.com/p/Bz0WP_Og_A9/"
           },
           {
                src: "/static/LiftOffDiversity.png",
                alt: "YBF Student Leader of the Year",
                title: "YBF Ventures Student Leader of the Year 2019.",
                shortDescription: "I was nominated and won Student Leader of the Year as a part of YBF Ventures' Lift Off Awards.",
                linkName:"Medium",
                url: "https://medium.com/@ybfventures.ad/winners-announced-for-australias-second-annual-fintech-diversity-awards-the-2019-lift-off-awards-42abe8e4c0bd",
                linkNameTwo: "LinkedIn",
                urlTwo:"https://www.linkedin.com/embed/feed/update/urn:li:share:6605002335485853696"
           },
           {
                src: "/static/alphawallet.png",
                alt: "AlphaWallet.com",
                title: "AlphaWallet",
                shortDescription: "AlphaWallet's website was made with React, TailwindCSS and hosted off Github and Netlify.",
                linkName:"Website",
                url: "https://alphawallet.com/",
           },
           {
                src: "/static/SIGGRAPHAsiaSV.jpg",
                alt: "SIGGRAPH Asia Student Volunteer",
                title: "SIGGRAPH Asia SV 2019",
                shortDescription: "SIGGRAPH is the biggest Computer Animation and Interactive Techniques Conference in the world and it FINALLY came to Australia!",
                linkName:"LinkedIn",
                url: "https://www.linkedin.com/embed/feed/update/urn:li:share:6602996100746092545",
           },
           {
                src: "/static/UTSPilotSTEM.png",
                alt: "UTS WiEIT STEM",
                title: "UTS Pilot STEM Primary Program",
                shortDescription: "As a part of the UTS Outreach program, I volunteered and mentored STEM to some primary school students",
                linkName:"Video",
                url: "https://www.uts.edu.au/about/faculty-engineering-and-information-technology/women-engineering-and-it/primary-and-high-0-0",
                linkNameTwo: "Article",
                urlTwo: "https://www.uts.edu.au/partners-and-community/initiatives/social-justice-uts/social-impact-grants/news/building-stem"
           },
           {
                src: "/static/ProgSoc2019.png",
                alt: "ProgSocUTS",
                title: "ProgSoc UTS Netlify Site",
                shortDescription: "As a part of the UTS Programmers' Society, I volunteered some time to reconstruct a home page as part of an ongoing community project.",
                linkName:"Website",
                url: 'https://progsoc.netlify.com/'
           },
           {
                src: "/static/UIDesign.png",
                alt: "Portfolio Piece",
                title: "Final Portfolio - Interactive Design",
                shortDescription: "I graduated from UTS and compiled the best work I could in this PDF Presentation. Download and take a look!",
                linkName:"Presentation",
                url: '/static/Rosie_Design_Portfolio.pdf'
           },
           {
                src: "/static/ethviewer.JPG",
                alt: "ETHViewer XR",
                title: "ETHViewer - Interactive Design",
                shortDescription: "Did a DataVis project to demonstrate how Ethereum mining works in Blockchain on a low-level. I used Unity C#, EPICentre UNSW and VR Equipment.",
                linkName:"Ethviewer",
                url: 'http://ethviewer.live/'
           }
       ]}
      />
    </Layout>
  );
}

export default Work;