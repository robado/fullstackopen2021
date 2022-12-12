import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

// oikea paikka komponentin määrittelyyn
const Statistics = (props) => {
  // ...
  const totalFeedback =  props.good + props.neutral + props.bad
  const average =(props.good - props.bad) / totalFeedback
  const positivePercent = props.good / totalFeedback * 100

  if (totalFeedback == 0) {
    return (
      <div>No feedback given</div>
    )
  }

  return (
    <div>
      <div>good {props.good}</div>
      <div>neutral {props.neutral}</div>
      <div>bad {props.bad}</div>
      <div>All {totalFeedback}</div>
      <div>Average {average}</div>
      <div>Positive {positivePercent} %</div>
    </div>
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
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App