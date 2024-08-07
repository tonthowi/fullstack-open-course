const Note = (props) => {
  const label = props.note.important ?
  'make not important' : 'make important'
  return (
      <li className="note">
        {props.note.content}
        <button onClick={props.toggleImportant}>{label}</button>
      </li>
    )
  }
  
  export default Note