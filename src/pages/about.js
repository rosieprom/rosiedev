import Layout from "../components/layout";
import SocialBar from "../components/socialBar";

function About() {
  return (
    <Layout>
      <div className="flex justify-start pt-20 px-4">
        <h1 className="font-bold font-mono md:text-4xl text-3xl">
          About Rosalie
        </h1>
      </div>
      <div className="flex justify-start p-4">
        <p className="font-normal font-mono text-l">
          I'm a university graduate who studied {" "}
            <text className="text-red-500">
            Information Technology at the University of Technology, Sydney.
            </text> As a student, I have also been a leader of student societies and an active member of Women in Engineering and IT.
        </p>
      </div>
      <div className="flex justify-start md:pt-8 p-4">
        <p className="font-normal font-mono text-l">
          I'm currently working as a <text className="text-red-500">Graduate Software Engineer </text> at the Innovation Labs by Commonwealth Bank.
        </p>
      </div>
      <div className="flex justify-start p-4">
        <p className="font-normal font-mono text-x">
            I aspire to become a Full Stack Developer or a Solutions Architect or a Blockchain enthusiast of some kind.
            I'm passionate about current trends in technology, community and education. 
            I volunteer some of my spare time helping local communities thrive. I enjoy being active, going to the gym regularly and eating healthy!
        </p>
      </div>
      <div className="flex p-4">
        <p className="font-normal font-mono text-x">
            <text className="text-red-500"> I'm no longer accepting any Freelance work at the moment. </text>
             However, please do keep in touch with me on my social media if you'd like to get to know me :)
        </p>
      </div>
      <div className="flex justify-center p-4">
            <div class="flex sm:flex-wrap justify-center">
                {/* Resume  */}
                <div class="w-2/9 pr-2">
                    <a href="/static/RosalindaProm_CV.pdf" target="_blank" rel="noopener noreferrer">
                    <button class="bg-black hover:bg-red-600 font-sans text-white font-bold py-2 px-4 rounded-full inline-flex items-center">
                        <span>Download Resume</span>
                    </button>
                    </a>
                </div>  
            </div>
      </div>
      <div className="flex justify-center p-4">
          <SocialBar />
      </div>
      
    </Layout>
  );
}

export default About;