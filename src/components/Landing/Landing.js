import React from 'react'
import Card from '../Card/Card'
import logo from '../../logo.svg'
import './Landing.css'

export default function Landing() {
  const quizzes = [
    { title: 'Front End Quiz', logo, id: 1 },
    { title: 'JavaScript Quiz', logo, id: 2 },
    { title: 'Data Structures & Algorithms', logo, id: 3 },
    { title: 'React.js Quiz', logo, id: 4 },
  ]
  return (
    <div className='Landing'>
      {quizzes.map((elm) => {
        return <Card key={elm.id} title={elm.title} logo={elm.logo} hoverable />
      })}
    </div>
  )
}
