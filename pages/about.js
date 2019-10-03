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
            descriptionOne="My journey started off in Blogging on Tumblr when I was fifthteen. I enjoyed it so much that I didn't perform 
            well in my other subjects. I saw this as an opportunity to break through and get into tech. Post HSC, I went to TAFE to study 
            web development, networking and programming from scratch for two years and then I chose to study IT at UTS. I'm now about to graduate
            with some experience and have had opportunity to volunteer and encourage younger people to take on a career in tech. "
            descriptionTwo="Some of my experience has been primarily web development and front end things, however, I aspire to be a full stack developer."
            descriptionThree="Feel free to catch up on either of my social media channels."
          />
        </Layout>
      </>
    )
  }
  
  export default AboutPage;