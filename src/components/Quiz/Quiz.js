import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import fadeIn from '../../utils/animations/fadeIn'

export default function Quiz() {
  const params = useParams()
  const domElm = useRef()
  useEffect(() => {
    fadeIn(domElm.current)
  }, [])
  return <div ref={domElm}>Quiz {params.subject}</div>
}
