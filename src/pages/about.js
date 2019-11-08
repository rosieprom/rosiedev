import Layout from "../components/layout";

function About() {
  return (
    <Layout>
      <div className="flex justify-start pt-32">
        <h1 className="font-bold font-mono text-6xl">
          About Rosalie
        </h1>
      </div>
      <div className="flex justify-start pt-8">
        <p className="font-normal font-mono text-xl">
          I'm a recent university graduate who studied Information Technology at the University of Technology, Sydney.
        </p>
      </div>
      <div className="flex justify-start pt-8">
        <p className="font-normal font-mono text-xl">
          I'm currently working at {" "}
            <a href="https://alphawallet.com/" target="_blank" className="text-blue-700">
              AlphaWallet 
            </a> as a StoryTeller and Junior web developer.
        </p>
      </div>
      <div className="flex justify-start pt-8">
        <p className="font-normal font-mono text-xl">
            I aspire to become a {" "}
            <text className="text-green-700">
              Full Stack developer
            </text>. 
        </p>
      </div>
      <div className="flex justify-start pt-8">
        <p className="font-normal font-mono text-indigo-700 text-xl">
          I can do Front-End Development and UX/UI Design.
        </p>
      </div>
      <div className="flex justify-start pt-8">
        <p className="font-normal font-mono text-red-700 text-l">
          Feel free to contact me at rosalinda.prom@gmail.com
        </p>
      </div>
    </Layout>
  );
}

export default About;