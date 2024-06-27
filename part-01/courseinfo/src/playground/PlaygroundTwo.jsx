import { useState } from "react"

const Display = ({counter}) => <div><h1>{counter}</h1></div>


const Button = ({onSomething, text}) => {
    return (
        <button onClick={onSomething}>
            {text}
        </button>
    )

}

const PlaygroundTwo = () => {

        const [counter, setCounter] = useState(0)
        console.log("Rendering with counter value", counter)

        const increaseByOne = () => {
            console.log('increasing, value before' , counter)
            setCounter(counter + 1)}
        const decreaseByOne = () => {
            console.log('decreasing, value before' , counter)
            setCounter(counter - 1)}
        const setToZero = () => {
            console.log('reset to zero, value before' , counter)
            setCounter(0)}

        return (
            <div>
                <Display counter={counter} />
                <Button onSomething={increaseByOne} text="Plus" />
                <Button onSomething={decreaseByOne} text="Minus" />
                <Button onSomething={setToZero} text="Zero" />
            </div>
        )
    }

export default PlaygroundTwo