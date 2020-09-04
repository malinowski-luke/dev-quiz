import React from 'react'
import './InputGroup.css'

function InputGroup({ answers, userAnswer, setUserAnswer }) {
  const handleUserAnswer = (e) => setUserAnswer(e.target.value)

  const getAnswersJSX = () =>
    Object.keys(answers).map((key, index) => {
      return (
        <tr key={index}>
          <td>
            <label htmlFor={key}>
              <span className='label'>{key}</span>: {answers[key]}
            </label>
          </td>
          <td>
            <input
              type='radio'
              id={key}
              value={key}
              name='answers'
              checked={userAnswer === key}
              onChange={handleUserAnswer}
            />
          </td>
        </tr>
      )
    })

  return (
    <table>
      <tbody>{getAnswersJSX()}</tbody>
    </table>
  )
}

export default InputGroup
