import React, { useEffect, useState, useContext } from 'react'
import Card from '../Card/Card'
import getData from '../../services/getData'
import Button from '../Button/Button'
import ThemeContext from '../../context/DarkModeContext'
import Colors from '../../utils/jsStyle/colorsConfig'
// slider imports
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// slider imports
import './Landing.css'

export default function Landing() {
  // state
  const [quizzes, setQuizzes] = useState([])

  // context
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    getData('/landing', setQuizzes)
  }, [])

  const getQuizesJSX = (hoverable = false) =>
    quizzes.map((elm) => (
      <Card key={elm.id} hoverable={hoverable} size={hoverable ? 'sm' : 'lg'}>
        <img src={elm.logo} className='quiz-img' alt={elm.title + ' logo'} />
        <h2 className='text-center'>{elm.title}</h2>
        <Button path={`/quiz/${elm.subject}`} size='lg'>
          Take Quiz!
        </Button>
      </Card>
    ))

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: `slick-dots customDotsTheme`,
  }

  const dotsTheme = theme ? Colors.black : Colors.white

  return (
    <>
      <style>
        {`
        .customDotsTheme li button:before{color: ${dotsTheme} !important;}
        .customDotsTheme li.slick-active button:before{color: ${dotsTheme} !important;}`}
      </style>
      <div id='landing-desktop' className='Landing'>
        {getQuizesJSX(true)}
      </div>
      <div id='landing-mobile' style={{ width: '90%' }}>
        <Slider {...sliderSettings}>{getQuizesJSX()}</Slider>
      </div>
    </>
  )
}
