import Layout from '../components/layout';
import Navigation from '../components/navigation';
import VolunteeringSection from '../components/volunteeringSection';

function VolunteeringPage() {
    return (
      <>
        <Layout>
            <Navigation />
            <VolunteeringSection
                bgColor="bg-white"
                textColor="text-black"
                bigTitle="Volunteering and Acheivements"
                description="As a student and a young technologist, I've always found myself immersed with the developer community in some way. Here are some of the photos that I've kept over the years to remember these tiny wins."
            />
        </Layout>
      </>
    )
  }
  
  export default VolunteeringPage;