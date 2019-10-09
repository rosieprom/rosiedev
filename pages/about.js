import Layout from '../components/Layout'
import AboutSection from '../components/AboutSection'
import Navigation from '../components/Navigation'
import React from 'react'

function AboutPage() {
    return (
      <>
        <Layout>
          <Navigation />
          <AboutSection 
            bgColor="bg-white"
            textColor="text-black"
            bigTitle="Hi, I'm Rosie."
            descriptionOne="My journey started off tinkering with Tumblr in high school. It turned into a hobby of which I was inspired to make a career out of. 
            I graduated high school and went straight into TAFE to study IT Support and Programming. I had then came to 
            the University of Technology, Sydney to study Bachelor of Science in IT. 
            University has opened up doors of opportunity for me and through this, I had become more empowered to become the best developer I could be."
            descriptionTwo="Some of my experience has been primarily web development and front end things, however, I aspire to be a full stack developer. 
            Blockchain technology interests me and so does Fintech, however, no matter the project, I'm mostly fascinated by anything."
            descriptionThree="My mission is to empower many people to get into tech. I envision that tech will be more diverse in the future, and I aspire to be a 
            change maker."
          />
        </Layout>
      </>
    )
  }
  
  export default AboutPage;