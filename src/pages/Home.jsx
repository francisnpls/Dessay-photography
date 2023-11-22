import React from 'react'
import Hero from '../components/Home/Hero'
import Message from '../components/Home/Message'
import Featured from '../components/Home/Featured'
import Card from '../components/Home/Card'
import Everything from '../components/Home/Everything'
import Studio from '../components/Home/Studio'
import Cat from '../components/Home/Cat'
import Amira from '../components/Home/Amira'

const Home = () => {
  return (
    <main className='z-0'>
      <Hero />
      <Message />
      <Featured />
      <Card />
      <Everything />
      <Studio />
      <Cat />
      <Amira />
    </main>    
  )
}

export default Home