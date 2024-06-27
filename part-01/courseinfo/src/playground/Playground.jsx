const Greeting = ({name, age}) => {

    // const name = props.name
    // const age = props.age
    // const {name, age} = props
    const yearBorn = () => {
        return new Date().getFullYear() - age
    }
    return (
        <div>
            <p>Hello {name}!</p>
            <p>I'm born at {age}</p>
            <p>So, you are now {yearBorn()} years old.</p>

        </div>
    )
}

const Playground = () => {
    return (
        <div>
        <h1>Playground</h1>
        <Greeting name="Peter" age={1988} /> 
        </div>
    )
}

export default Playground