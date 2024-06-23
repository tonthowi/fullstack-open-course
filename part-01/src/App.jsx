
import viteLogo from '/vite.svg'
import './App.css'

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <p>You are {props.age}. And you are a {props.gender}</p>
    </div>
  )
}

const Footer = (props) => {
  return (
    <div>
      <p>This is a footer. Copyright {props.year}</p>
    </div>
  )
}

const App = () => {

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const now = new Date();
  const a = 20;
  const b = 30;
  const name = 'tonthowi';
  const age = now.getFullYear() - 1988;
  const friends = [
    { name: 'isa', age: 12, gender: "male" },
    { name: 'ali', age: 15, gender: "female" },
    { name: 'wien', age: 20, gender: "male" },
  ]
  return (
    <div>
        <Hello name={capitalizeFirstLetter(name)} age={age} gender="male" />
        <Hello name={capitalizeFirstLetter("peter")} age="12" />
        <Hello name = {capitalizeFirstLetter(friends[0].name)}
                      age={friends[0].age}
                      gender = {friends[0].gender}
                      />
        <Hello name = {capitalizeFirstLetter(friends[1].name)}
                      age={friends[1].age}
                      gender = {friends[1].gender}
                      />
        <Hello name = {capitalizeFirstLetter(friends[2].name)}
                      age={friends[2].age}
                      gender = {friends[2].gender}
                      />

        <img src={viteLogo} className="App-logo" alt="logo" />
        <p>Fullstack Open Course Part 1.</p>
        <p>Hello world, it is {now.toString()}</p>
        <p> {a} plus {b} equals {a + b} </p>
        <Footer year = {now.getFullYear()} />
    </div>
  )
}

export default App
