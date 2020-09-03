import React, { useEffect, useState, useRef } from 'react'
import Card from '../Card/Card'
import Carousel from 'react-material-ui-carousel'
import getData from '../../services/getData'
import fadeIn from '../../utils/animations/fadeIn'
import NavButton from '../NavButton/NavButton'
import './Landing.css'

export default function Landing() {
  const domElm = useRef()
  const [quizzes, setQuizzes] = useState([])
  useEffect(() => {
    fadeIn(domElm.current)
    getData('/landing', setQuizzes)
  }, [])
  const getQuizesJSX = (hoverable = false) =>
    quizzes.map((elm) => (
      // <Card
      //   key={elm.id}
      //   title={elm.title}
      //   logo={elm.logo}
      //   subject={elm.subject}
      //   hoverable={hoverable}
      // />
      <Card key={elm.id} hoverable={hoverable}>
        {/* creat logo class  */}
        <img src={elm.logo} className='logo' />
        <h2>{elm.title}</h2>
        <NavButton text='Take Quiz!' path={`/quiz/${elm.subject}`} />
      </Card>
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
