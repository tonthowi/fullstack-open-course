
const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    return (
        <p key={props.id}> {props.name} {props.exercises}</p>
    )
}

const Content = (props) => {
    return (
        props.parts.map((part) =>{
            return (
                <Part key={part.id} name={part.name} exercises={part.exercises} />
            )
        })
    )
}

const Total = (props) => {

    return (
        <p>Number of exercises: {props.total}</p>
    )
}

const Courses = (props) => {
    
    return (
        props.courses.map( (course) => {
            return (
                <div key={course.id}>
                    <Header course={course.title} />
                    <Content parts={course.parts} />
                    <Total total={course.parts.reduce((acc, curr) => acc + curr.exercises, 0)} />
                </div>
            )
        } )
    )

}

export default Courses