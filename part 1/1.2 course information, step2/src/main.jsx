import React from 'react'
import ReactDOM from 'react-dom/client'

const Part = (props) => {
  return (
    <>
      <p>
        {props.part}
      </p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.text1} />
      <Part part={props.text2} />
      <Part part={props.text3} />
    </>
  )
}

const App = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Content text1={part1 + " " + exercises1} text2={part2 + " " + exercises2} text3={part3 + " " + exercises3} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
