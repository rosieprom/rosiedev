/* eslint-disable no-unused-vars */
import Layout from '../components/Layout'
import Navigation from '../components/Navigation'
import WorkSection from '../components/WorkSection'

function WorkPage () {
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

export default WorkPage
