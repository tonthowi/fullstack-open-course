// Header component that takes a course title as a prop and displays it in an h1 tag.
const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    );
  };
  
  // Part component that takes the name and number of exercises for a part as props and displays them in a paragraph tag.
  const Part = (props) => {
    return (
      <div>
        <p>{props.name} {props.exercises}</p>
      </div>
    );
  };
  
  // Content component that takes an array of parts as a prop and maps over it to render each part using the Part component.
  const Content = (props) => {
    return (
      <div>
        {props.parts.map((part) => (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
      </div>
    );
  };
  
  // Total component that takes the total number of exercises as a prop and displays it in a paragraph tag.
  const Total = (props) => {
    return (
      <p>
        Number of exercises: {props.total}
      </p>
    );
  };
  
  // Courses component that takes an array of courses as a prop and maps over it to render each course.
  // For each course, it calculates the total number of exercises using the reduce method and passes it to the Total component.
  const Courses = (props) => {
    return (
      <div>
        {props.courses.map((course) => { 
          // Calculate the total number of exercises for the current course
          const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);
          
          return (
            <div key={course.id}>
              {/* Render the course title */}
              <Header course={course.title} />
              {/* Render the course parts */}
              <Content parts={course.parts} />
              {/* Render the total number of exercises */}
              <Total total={total} />
            </div>
          );
        })}
      </div>
    );
  };
  
  export default Courses;