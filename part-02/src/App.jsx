
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {

  return (
    <div>
      {props.parts.map((part) => {
        return (
          <Part key = {part.id} name = {part.name} exercises = {part.exercises} />
        )
      })}
    </div>
  )

}

const App = () => {
  const course = {
    id: 1,
    title: "Half Stack application development",
    parts : [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <>
      <Header course = {course.title} />
      <Content parts = {course.parts} />
    </>
  )
}

export default App
