import Layout from "../components/layout";

function Home() {
  return (
    <Layout>
      <div className="flex justify-center pt-32">
        <h1 className="font-bold font-mono text-6xl text-center">
          Rosalie Prom
        </h1>
      </div>
      <div className="flex justify-center pt-8">
        <p className="font-normal font-mono text-xl text-center">
          a University Graduate, aspiring front-end developer and UX/UI designer.
        </p>
      </div>
    </Layout>
  );
}

export default Home;