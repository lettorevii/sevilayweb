'use client';


import React from 'react';
import HeroSection from '../components/Hero.jsx'
import AboutSection from '../components/About.jsx'
import PodcastSection from '../components/Podcast.jsx'
import WorkAreasSection from '../components/WorkAreas.jsx'
import NewLifeSection from '../components/New.jsx'
import BlogSection from '../components/Blog.jsx'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PodcastSection />
      <WorkAreasSection />
      <NewLifeSection />
      <BlogSection />
    </>
  );
};

export default HomePage;
