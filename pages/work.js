import Layout from '../components/Layout';
import WorkSection from '../components/WorkSection'
import Navigation from '../components/Navigation';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

function WorkPage() {
    return (
      <>
        <Layout>
            <Navigation />
            <WorkSection 
                bgColor="bg-white"
                textColor="text-black"
                bigTitle="Work Experience and Projects"
                description="Some of these projects are voluntary and some are contract based work. Feel free to email me for more information."
            />
            
        </Layout>
      </>
    )
  }
  
  export default WorkPage;