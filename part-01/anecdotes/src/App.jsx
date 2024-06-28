import { useState } from 'react'
import './App.css'

const Button = ({handleClick, text}) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
      <button onClick={handleClick} style={{ display: 'block' }}>
        {text}
      </button>
    </div>
  )
}

const MostVotedAnecdote = ({anecdotes, votes}) => {
  const mostVoted = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <h2>Anecdote with most votes</h2>
      <p><strong>&quot;{anecdotes[mostVoted]}&quot;</strong></p>
      <p>has <strong>{votes[mostVoted]} votes</strong></p>
    </div>
  )
}
function App() {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const generateRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const vote = () => {  
    console.log('Voting:', selected, anecdotes[selected])
    
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  }
  console.log('Generating:', selected, anecdotes[selected])
  return (
    <div>
      <p><strong>&quot;{anecdotes[selected]}&quot;</strong></p>
      <p>This anecdote has {votes[selected]} votes</p>
      <Button handleClick={generateRandomAnecdote} text={'Next Anecdote'} />
      <Button handleClick={vote} text={"vote"}/>
      <MostVotedAnecdote anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App

