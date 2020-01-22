import Layout from "../components/layout";
import SocialBar from "../components/socialBar";

function Home() {
  return (
    <Layout>
      <div className="flex justify-center pt-32">
        <h1 className="font-bold font-mono text-6xl text-center">
          Rosalie Prom
        </h1>
      </div>
      <div className="flex justify-center p-8">
        <p className="font-normal font-mono text-xl text-center">
          A Junior Software Engineer with a passion for UX/UI design, blockchain, emerging technologies and creative coding. Based in Sydney. Community building, weightlifting and food enthusiast.
        </p>
      </div>
      <SocialBar />
    </Layout>
  );
}

export default Home;