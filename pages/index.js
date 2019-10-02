import Layout from '../components/Layout'
import MainHeader from '../components/MainHeader'
function IndexPage() {
    return (
      <>
        <Layout>
          <MainHeader 
            bgColor="bg-black"
            textColor="text-white"
            smallTitle="Junior Front-End Developer, University graduate."
            bigTitle="Rosalinda Prom"
            description="A university graduate with passion for tech, front end and digital design. 
            Volunteers most of her (spare) time in the UTS student societies, developer community, tech conferences and at hackathons.
            She is currently doing Front-End development at AlphaWallet, STEM tutor and advocate with UTS and a Code Like a Girl AU Ambassador.
            Rosie listens to heavy metal and enjoys the great outdoors."
          />
        </Layout>
      </>
    )
  }
  
  export default IndexPage;