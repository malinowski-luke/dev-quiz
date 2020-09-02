import React, { useEffect, useState, useRef } from 'react'
import Card from '../Card/Card'
import Carousel from 'react-material-ui-carousel'
import getData from '../../services/getData'
import './Landing.css'
import fadeIn from '../../utils/animations/fadeIn'

export default function Landing() {
  const domElm = useRef()
  const [quizzes, setQuizzes] = useState([])
  useEffect(() => {
    fadeIn(domElm.current)
    getData('/landing', setQuizzes)
  }, [])
  const getQuizesJSX = (hoverable = false) =>
    quizzes.map((elm) => (
      <Card
        key={elm.id}
        title={elm.title}
        logo={elm.logo}
        subject={elm.subject}
        hoverable={hoverable}
      />
    ))

  return (
    <div ref={domElm} style={{ width: '100%' }}>
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
