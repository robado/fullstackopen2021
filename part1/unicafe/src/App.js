import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  // const [all, setAll] = useState(0)
  // const [average, setAverage] = useState(0)
  // const [positive, setPositive] = useState(0)
  
  const handleGood = () => setGood(good + 1)

  const handleNeutral = () => setNeutral(neutral + 1)

  const handleBad = () => setBad(bad + 1)

  const totalFeedback =  good + neutral + bad

  const average =(good - bad) / totalFeedback
  
  const positivePercent = good / totalFeedback * 100

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => handleGood()} text='good' />
      <Button handleClick={() => handleNeutral()} text='neutral' />
      <Button handleClick={() => handleBad()} text='bad' />
      <h1>statictics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {totalFeedback}</div>
      <div>average {average}</div>
      <div>positive {positivePercent} %</div>
    </div>
  )
}

export default App