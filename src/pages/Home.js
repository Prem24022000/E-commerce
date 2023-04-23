import React from 'react'
import './Home.scss'
import Hero from '../components/Hero'
import Showcase from '../components/Showcase'
import Brands from '../components/Brands'
import FeatureProducts from '../components/FeatureProducts'


const Home = () => {
  return (
    <>
      <Hero />
      <FeatureProducts />
      <Showcase />
      <Brands />
    </>
  )
}

export default Home