import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.label}</td>
      <td><strong>{props.value}</strong></td>
    </tr>
  )
}

const Statistic = (props) => {
  return (
    <table>
      <tbody>
        {props.feedbacks.map((feedback, index) => (
          <StatisticLine key={index} label={feedback.label} value={feedback.value} />
        ))}
      </tbody>
    </table>
  )
}

const Total = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>All</td>
          <td><strong>{props.total}</strong></td>
        </tr>
        <tr>
          <td>Average</td>
          <td><strong>{props.average}</strong></td>
        </tr>
        <tr>
          <td>Positive</td>
          <td><strong>{props.positive}%</strong></td>
        </tr>
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  const feedbacks = [
    {label: 'Good', value: good},
    {label: 'Neutral', value: neutral},
    {label: 'Bad', value: bad}
  ]

  const totalFeedback = good + neutral + bad
  const totalAverage = totalFeedback ? (good - bad) / totalFeedback : 0
  const totalPositive = totalFeedback ? (good / totalFeedback) * 100 : 0

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button handleClick={handleGood} text={'Good'} />
        <Button handleClick={handleNeutral} text={'Neutral'} />
        <Button handleClick={handleBad} text={'Bad'} />
      </div>

      <h2>Statistics</h2>
      <Statistic feedbacks={feedbacks} />
      <Total total={totalFeedback} average={totalAverage} positive={totalPositive} />
    </div>
  )
}

export default App
