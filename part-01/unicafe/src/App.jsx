import { useState } from 'react'
import './App.css'

const Button = (props) => {

  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const FeedbackPart = (props) => {

  return (
      <p>
        {props.label} <strong>{props.value}</strong>
      </p>
  )
}

const Statistic = (props) => {

  return (
   <div>
    {props.feedbacks.map((feedback, index) => (
      <FeedbackPart key={index} label={feedback.label} value={feedback.value} />
    ))}
   </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    console.log('Good button clicked', updatedGood)
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    console.log('Neutral button clicked', updatedNeutral)
  }

  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    console.log('Bad button clicked', updatedBad)
  }

  const feedbacks = {
    results: [
      {label:'Good', value: good},
      {label:'Neutral', value: neutral},
      {label:'Bad', value: bad}
    ]
  }
    

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text={'Good'}/>
      <Button handleClick={handleNeutral} text={'Neutral'}/>
      <Button handleClick={handleBad} text={'Bad'}/>
      <h2>Statistic</h2>
      <Statistic feedbacks={feedbacks.results}  />
    </div>
  )
}

export default App
