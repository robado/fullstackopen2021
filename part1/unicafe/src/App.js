import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

// oikea paikka komponentin määrittelyyn
const Statistics = (props) => {
  // ...
  const totalFeedback = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / totalFeedback
  const positivePercent = props.good / totalFeedback * 100

  if (totalFeedback == 0) {
    return (
      <div>No feedback given</div>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={props.good} />
        <StatisticLine text="Neutral" value={props.neutral} />
        <StatisticLine text="Bad" value={props.bad} />
        <StatisticLine text="All" value={totalFeedback} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Positive" value={positivePercent} />
      </tbody>
    </table>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text} {props.value}</td>
    </tr>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <h1>statictics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App