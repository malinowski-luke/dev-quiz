import React, { useEffect, useRef } from 'react'
import fadeIn from '../../utils/animations/fadeIn'

function Result() {
  const domElm = useRef()
  useEffect(() => {
    fadeIn(domElm.current)
  })
  return <div ref={domElm}>Result</div>
}

export default Result
