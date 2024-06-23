
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {

  const now = new Date()
  const nowString = now.toString()
  const a = 20;
  const b = 30;

  console.log('Hello from component ' + nowString, a, b)
  return (
    <div>
        <img src={viteLogo} className="App-logo" alt="logo" />
        <p>
          Fullstack Open Course Part 1
        </p>
        <p>
          {a} plus {b} equals {a + b}
        </p>
    </div>
  )
}

export default App
