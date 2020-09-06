import React, { useRef } from 'react'
import './SmileyFace.css'

function SmileyFace({ smileyExpression }) {
  // refs
  const leftEye = useRef()
  const rightEye = useRef()

  const animateEyes = (event, eyes) => {
    eyes.forEach((eye) => {
      eye = eye.current
      let x = eye.getBoundingClientRect().left + eye.clientWidth / 2
      let y = eye.getBoundingClientRect().top + eye.clientHeight / 2
      let radian = Math.atan2(event.pageX - x, event.pageY - y)
      let rot = radian * (180 / Math.PI) * -1 + 270
      eye.style.transform = `rotate(${rot}deg)`
    })
  }

  return (
    <div
      className='face'
      onMouseMove={(event) => animateEyes(event, [leftEye, rightEye])}
    >
      <div className='eyes'>
        <div ref={leftEye} className='eye'></div>
        <div ref={rightEye} className='eye'></div>
      </div>
      <div className={smileyExpression}></div>
    </div>
  )
}
export default SmileyFace
