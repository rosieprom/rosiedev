import Layout from "../components/layout";

function About() {
  return (
    <Layout>
      <div className="flex justify-start pt-20">
        <h1 className="font-bold font-mono text-6xl">
          About Rosalie
        </h1>
      </div>
      <div className="flex justify-start pt-4">
        <p className="font-normal font-mono text-l">
          I'm a university graduate who studied {" "}
            <text className="text-red-500">
            Information Technology at the University of Technology, Sydney.
            </text> As a student, I have also been a leader of student societies and an active member of Women in Engineering and IT.
        </p>
      </div>
      <div className="flex justify-start pt-8">
        <p className="font-normal font-mono text-l">
          I'm currently working at {" "}
            <a href="https://alphawallet.com/" target="_blank" className="text-blue-700">
              AlphaWallet 
            </a> as a StoryTeller and Junior web developer.
        </p>
      </div>
      <div className="flex justify-start pt-8">
        <p className="font-normal font-mono text-x">
            I aspire to become a {" "}
            <text className="text-green-700">
              Full Stack developer
            </text>. 
            I'm passionate about current trends in technology, community and education. I volunteer some of my spare time doing 
            coding workshops, mentoring students and teaching STEM to children. 
        </p>
      </div>
      <div className="flex justify-start pt-8 pb-32">
          <a href="/static/RosalindaProm_CV.pdf" target="_blank" rel="noopener noreferrer">
            <button class="bg-black hover:bg-gray-800 font-sans text-white font-bold py-2 px-4 rounded-full inline-flex items-center">
                <span>Download Resume</span>
            </button>
          </a>
      </div>
    </Layout>
  );
}

export default About;