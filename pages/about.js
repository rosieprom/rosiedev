import Layout from '../components/Layout';
import SectionHeader from '../components/sectionHeader'
import Navigation from '../components/Navigation';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

function AboutPage() {
    return (
      <>
        <Layout>
          <Navigation />
          <SectionHeader 
            bgColor="bg-white"
            textColor="text-black"
            bigTitle="About Rosalinda"
            description="Rosalinda is a very motivated individual...."
          />
        </Layout>
      </>
    )
  }
  
  export default AboutPage;