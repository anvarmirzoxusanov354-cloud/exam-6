import React from 'react'
import HeroSection from '../sections/hero/HeroSection'
import StorySection from '../sections/story/StorySection'
import PartnersBar from '../sections/partners/LogoBar'
import ExpertiseSection from '../sections/expertise/ExpertiseSection'
import VisionSection from '../sections/vision/VisionSection'
import TeamSection from '../sections/team/TeamSection'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <StorySection />
      <PartnersBar />
      <ExpertiseSection />
      <VisionSection />
      <TeamSection />
    </div>
  )
}

export default Home


