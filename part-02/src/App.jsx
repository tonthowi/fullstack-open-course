import Courses from "./Courses"

const App = () => {
  // Define an array of courses
  const courses = [
    {
      id: 1,
      title: "Half Stack application development",
      parts: [
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
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4
        }
      ]
    },

    {
      id: 2,
      title: "Node JS",
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2
        },
        {
          name: "GraphQL",
          exercises: 10,
          id: 3
        }
      ]
    }
  ]

  return (
    <>
      {/* Render the Courses component and pass the courses array as a prop */}
      <Courses courses={courses} />
    </>
  )
}

export default App
