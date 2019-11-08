import Layout from "../components/layout";

function Home() {
  return (
    <Layout>
      <div className="flex justify-center pt-32">
        <h1 className="font-bold font-mono text-6xl">
          I'm Rosalie
        </h1>
      </div>
      <div className="flex justify-center pt-8">
        <p className="font-normal font-mono text-xl">
          and I do Front-End Development and UX/UI Design.
        </p>
      </div>
    </Layout>
  );
}

export default Home;