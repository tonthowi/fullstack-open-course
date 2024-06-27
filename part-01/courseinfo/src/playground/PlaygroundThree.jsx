import { useState } from "react"

const Display = ({value}) => {
    return (
        <div>
            <h2>{value}</h2>
        </div>
    )
}

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }
    return (
        <div>
            <p>History: {props.allClicks.join(' ')}</p>
        </div>
    )
}

const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const FunctionThatReturnsFunction = () => {
    const [value, setValue] = useState(0)

    const setToValue = (newValue) => () => {
        console.log('value now', newValue)
        setValue(newValue)
    }
    return (
        <div>
            <h3>Function that returns function</h3>
            <Button handleClick={setToValue(1000)} text="1000" />
            <Button handleClick={setToValue(0)} text="0" />
            <Button handleClick={setToValue(value + 1)} text="Increment" />
            <Button handleClick={setToValue(0)} text="Reset" />
            <p>{value}</p>
        </div>
    )
}

const PlaygroundThree = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
    const [total, setTotal] = useState(0)
  
    const handleLeftClick = () => {
        console.log('Left before', left)
      setAll(allClicks.concat('L'))
      const updatedLeft = left + 1
      setLeft(updatedLeft)
      console.log('Left after', updatedLeft)
      setTotal(updatedLeft + right)
    }
  
    const handleRightClick = () => {
        console.log('Right before', right)
      setAll(allClicks.concat('R'))
      const updatedRight = right + 1
      setRight(updatedRight)
      console.log('Right after', updatedRight) 
      setTotal(left + updatedRight)
    }
  
    return (
      <div>
        {left}
        <Button handleClick={handleLeftClick} text={'left'} />
        <Button handleClick={handleRightClick} text={'right'} />
        {right}
        <p>{allClicks.join(' ')}</p>
        <History allClicks={allClicks} />
        <Display value={total} />
        <FunctionThatReturnsFunction />
      </div>
    )
  }

  export default PlaygroundThree