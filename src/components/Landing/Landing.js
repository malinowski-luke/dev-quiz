import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import getData from '../../services/getData'
import Button from '../Button/Button'
// slider imports
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// slider imports
import './Landing.css'

export default function Landing() {
  const [quizzes, setQuizzes] = useState([])

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
  }

  return (
    <>
      <div id='landing-desktop' className='Landing'>
        {getQuizesJSX(true)}
      </div>
      <div id='landing-mobile' style={{ width: '80%' }}>
        <Slider {...sliderSettings}>{getQuizesJSX()}</Slider>
      </div>
    </>
  )
}
