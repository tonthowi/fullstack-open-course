const Notification = (props) => {
    
    // If the value of the message prop is null, then nothing is rendered to the screen, and in other cases, the message gets rendered inside of a div element.
    if (props.message === null) {
        return null
    }

    return (
        <div className="error">
            {props.message}
        </div>
    )
}

export default Notification