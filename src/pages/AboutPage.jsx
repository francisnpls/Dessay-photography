import React from 'react'
import Personal from '../components/About/Personal'
import Film from '../components/About/Film'
import Video from '../components/About/Video'
import Dogs from '../components/About/Dogs'
import Book from '../components/About/Book'

const About = () => {
  return (
    <main className="z-0">
      <Personal/>
      <Film/>
      <Video/>
      <Dogs/>
      <Book/>
    </main>
  )
}

export default About