import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const MostVotes = ({anecdotes, votes}) => {
  const highest = Math.max.apply(Math, votes)
  const placement = votes.indexOf(highest)

  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[placement]}</p>
      <p>has {votes[placement]} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const random = Math.floor(Math.random() * anecdotes.length);
  const points = [0, 0, 0, 0, 0, 0, 0]
  const copy = [...points]
  const [selected, setSelected] = useState(random)
  const [votes, setVote] = useState([...copy])

  const handleVotes = (props) => {
    const copy = [...votes]
    copy[props] += 1
    setVote(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes </p>
      <Button handleClick={() => handleVotes(selected)} text='Vote' />
      <Button handleClick={() => setSelected(random)} text='Next Anecdote' />
      <MostVotes anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App;
