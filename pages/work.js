import Layout from '../components/Layout';
import SectionHeader from '../components/sectionHeader'
import Navigation from '../components/Navigation';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

function WorkPage() {
    return (
      <>
        <Layout>
            <Navigation />
            <SectionHeader 
                bgColor="bg-white"
                textColor="text-black"
                bigTitle="Work Experience and Projects"
            />
            
        </Layout>
      </>
    )
  }
  
  export default WorkPage;