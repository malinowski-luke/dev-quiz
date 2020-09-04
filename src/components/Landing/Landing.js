import React, { useEffect, useState, useRef } from 'react'
import Card from '../Card/Card'
import Carousel from 'react-material-ui-carousel'
import getData from '../../services/getData'
import NavButton from '../NavButton/NavButton'
import './Landing.css'

export default function Landing() {
  const [quizzes, setQuizzes] = useState([])

  useEffect(() => {
    getData('/landing', setQuizzes)
  }, [])

  const getQuizesJSX = (hoverable = false) =>
    quizzes.map((elm) => (
      <Card key={elm.id} hoverable={hoverable}>
        {/* creat logo class  */}
        <img src={elm.logo} className='logo' />
        <h2>{elm.title}</h2>
        <NavButton path={`/quiz/${elm.subject}`}>Take Quiz!</NavButton>
      </Card>
    ))

  return (
    <div style={{ width: '100%' }}>
      <div id='landing-desktop' className='Landing'>
        {getQuizesJSX(true)}
      </div>
      <div id='landing-mobile'>
        <Carousel animation='slide' timeout={300}>
          {getQuizesJSX()}
        </Carousel>
      </div>
    </div>
  )
}
