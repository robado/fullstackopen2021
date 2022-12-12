import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const consolePrint = () => console.log('helloe')

  const handleGood = () => setGood(good + 1)

  const handleNeutral = () => setNeutral(neutral + 1)

  const handleBad = () => setBad(bad + 1)


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
    </div>
  )
}

export default App