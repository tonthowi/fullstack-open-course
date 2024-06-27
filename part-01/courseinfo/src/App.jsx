import PlaygroundTwo from './playground/PlaygroundTwo.jsx'
import PlaygroundThree from './playground/PlaygroundThree.jsx'
import PlaygroundFour from './playground/PlaygroundFour.jsx'
import Playground from './playground/Playground.jsx'


const Header = ({title}) => {
  console.log(title)
  return (
    <div>
      <h1>
       {title}
      </h1>
    </div>
  )
}

const Part = ({name, exercises}) => {
  return (
    <div>
      <p>
        {name} {exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

const Total = ({number}) => {
  console.log(number)
  return (
    <div>
      <p>
        Number of exercises {number}
      </p>
    </div>
  )
}

const App = () => {
  const course =  {
    title: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of component',
        exercises: 14,
      },
    ]
  }

  console.log(course.name)
  let totalExercises = 0
  course.parts.forEach((part) => {
    totalExercises += part.exercises
  })

  return (
    <div>
      <Header title={course.title}  />
      <Content parts={course.parts} />
      <Total number={totalExercises} />
      <br />
      <Playground />
      <br />
      <PlaygroundTwo />
      <br />
      <PlaygroundThree />
      <br />
      <PlaygroundFour />
    </div>
  )
}
export default App
