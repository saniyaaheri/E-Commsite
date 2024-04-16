import React from 'react'

const Demo = (props) => {
  return (
    <div>
      <h1>My Name is {props.name}</h1>
      <h1>My Address is {props.add}</h1>
      <p>Hobies {props.others.Hobies}</p>
    </div>
  )
}

export default Demo
