const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>
       {props.title}
      </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      {props.parts.map((part) => (
        <Part name={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Number of exercises {props.number}
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
    </div>
  )
}
export default App
