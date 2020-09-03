import React from 'react'
import './ButtonGroup.css'

function ButtonGroup({ buttons }) {
  const getButtonsJSX = () =>
    buttons.map((elm) => {
      const { type, action } = elm
      return (
        <button key={type} onClick={action}>
          {type}
        </button>
      )
    })
  return <div>{getButtonsJSX()}</div>
}

export default ButtonGroup
