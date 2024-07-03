import { useState } from "react"

const DisplayResults = (props) => {
    return (
        <div>
            <h3>Final Price: {props.result}</h3>
            <p>Price is {props.price}</p>
            <p>Discount Amount is {props.discount}</p>
        </div>
    )
}

const Button = ({ onCalculate, text }) => {  
    return (
        <button onClick={onCalculate}>
            {text}
        </button>
    )
}

const PlaygroundFour = () => {
    const [price, setPrice] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [result, setResult] = useState(0)

    const handlePriceChange = (props) => {
        console.log('Price changed to:', props.target.value);
        setPrice(props.target.value)
    }

    const handleDiscountChange = (props) => {
        console.log('Discount changed to:', props.target.value);
        setDiscount(props.target.value)
    }

    const calculateDiscount = () => {
        const discountedPrice = (price - (price * discount / 100))
        setResult(discountedPrice)
    }

    return (
        <div>
            <h1>Playground Four</h1>
            <p>Calculate final price after discount</p>
            <input
                type="text"
                onChange={handlePriceChange}
                value={price}
                placeholder="Enter Price"
            />
            <input
                type="text"
                onChange={handleDiscountChange}
                value={discount}
                placeholder="Enter Discount"
            />
            <DisplayResults result={result} price={price} discount={discount} />
            <Button onCalculate={calculateDiscount} text="Calculate" />
        </div>
    )
}

export default PlaygroundFour
