import { useState } from "react";

const Filter = (props) => {

  return (
    <div>
      <p>
        Search: <input
          type={props.type}
          placeholder={props.palceholder}
          value={props.value}
          onChange={props.onChange}
        />
      </p>
    </div>
  )
}

const InputField = (props) => {

  return (
    <div>
      <p>
        <input
          type={props.type}
          placeholder={props.palceholder}
          value={props.value}
          onChange={props.onChange}
        />
      </p>
    </div>
  )
}

const Button = (props) => {

  return (
    <div>
      <button type={props.type} onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  )
}

const PersonForm = (props) => {

  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <InputField
          type="text"
          placeholder="Name"
          value={props.nameValue}
          onChange={props.handleChangeName}
        />

        <InputField
          type="text"
          placeholder="Number"
          value={props.numValue}
          onChange={props.handleChangeNumber}
        />
        <Button
          type="submit"
          onClick={props.onClick}
          text="Add Contact"
        />

      </form>
    </div>
  )
}

const Persons = (props) => {
  return (
    <div>
      <ul>
        {props.persons.map( person => {
          return (
            <li key={person.name}>
              {person.name} {person.number}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: "John Doe", number: "123-456-7890"},
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [showAll, setShowAll] = useState('')

  // Handle the form submission event
  const addName = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault()

    // Create a new object with the name and number to be added
    const nameObject = {
      name: newName,
      number: newNumber,
    }
    // Check if name already exists in the phonebook and alert the user if it does
    persons.find(person => person.name === nameObject.name) ?
    alert(`${nameObject.name} is already added to the phonebook`) :
    setPersons(persons.concat(nameObject))
    setNewName("")
    setNewNumber("")
  }

  // Handle the name input change event
  const handlePersonsChange = (event) => {
    setNewName(event.target.value)
  }

  // Handle the number input change event
  const handleNumChange = (event) => {
    setNewNumber(event.target.value)
  }

  // Handle the search input change event
  const handleSearchChange = (event) => {
    setShowAll(event.target.value)
  }

  // Filter the persons to show based on the search input. If the search input is empty, show all persons in the phonebook
  const personToShow = showAll === ""
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(showAll.toLowerCase()))

  // Render the application UI
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        type="text"
        placeholder="Search by name"
        value={showAll}
        onChange={handleSearchChange}
       />
      <h3>Add New</h3>
      <PersonForm
        onSubmit={addName}
        nameValue={newName}
        numValue={newNumber}
        handleChangeName={handlePersonsChange}
        handleChangeNumber={handleNumChange}
      />

      <h3>Numbers</h3>
      <Persons persons={personToShow} />
    </div>
  )
}

export default App
