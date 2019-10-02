import Layout from '../components/Layout';
import SectionHeader from '../components/sectionHeader'
import Navigation from '../components/Navigation';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

function VolunteeringPage() {
    return (
      <>
        <Layout>
            <Navigation />
            <SectionHeader 
                bgColor="bg-white"
                textColor="text-black"
                bigTitle="Volunteering"
            />
        </Layout>
      </>
    )
  }
  
  export default VolunteeringPage;