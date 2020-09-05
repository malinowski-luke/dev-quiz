import React from 'react'
import Button from '../Button/Button'
import './ButtonGroup.css'

function ButtonGroup({ buttons }) {
  const getButtonsJSX = () =>
    buttons.map((elm) => {
      const { type, action } = elm
      return (
        <Button key={type} onClick={action} size='sm'>
          {type}
        </Button>
      )
    })
  return <div className='ButtonGroup'>{getButtonsJSX()}</div>
}

export default ButtonGroup
