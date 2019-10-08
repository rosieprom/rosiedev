/* eslint-disable no-unused-vars */
import Layout from '../components/Layout'
import Navigation from '../components/Navigation'
import VolunteeringSection from '../components/VolunteeringSection'

function VolunteeringPage () {
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

export default VolunteeringPage
