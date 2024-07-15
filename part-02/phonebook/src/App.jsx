import { useState, useEffect } from "react";
import personService from "./services/persons.js";

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

const Notification = (props) => {
  if (props.message === null) {
    return null;
  }

  const className = props.alertType === 'success' ? 'success' : 'error';
  return (
    <div className={className}>
      {props.message}
    </div>
  );
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
            <li key={person.id}>
              {person.name} {person.number}
              <Button
                onClick={() => props.onDelete(person.id)}
                text="delete"
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [showAll, setShowAll] = useState('')
  const [alertMessage, setAlertMessage] = useState(null)
  const [alertType, setAlertType] = useState(null)
 

  // Get all persons from the database
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  },[])

  // Add persons to the phonebook or update their number if they already exist
  const addName = (event) => {
    event.preventDefault()
  
    // Check if the name already exists in the phonebook
    const person = persons.find(person => person.name === newName)
  
    // If the person exists, update their number
    if (person) {
      if (window.confirm(`${person.name} is already in the phonebook. Do you want to update their number?`)) {
        const updatedPerson = { ...person, number: newNumber };
        personService
          .update(updatedPerson.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id === returnedPerson.id ? returnedPerson : p))
          })
          .catch(error => {
            console.log('Error updating:', error)
            setAlertMessage(`Information of ${person.name} has already been removed from the server`)
            setAlertType('error')
            setTimeout(() => {
              setAlertMessage(null)
              setAlertType(null)
            }, 5000)
          })
      }
    } else {
      // If the person doesn't exist, add them to the phonebook
      const nameObject = {
        name: newName,
        number: newNumber,
      }
  
      personService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
        .then(() => {
          setAlertMessage(`Added ${nameObject.name}`)
          setAlertType('success')
          setTimeout(() => {
            setAlertMessage(null)
            setAlertType(null)
          }, 5000)
        })
    }
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

  // Handle the deletion of a person from the phonebook
  const handleDeletion = id => {
    const person = persons.find(person => person.id === id)

    if (window.confirm(`Delete ${person.name}?`)) {
      personService
      .remove(id)
      .then(removedPerson => {
          setPersons(persons.filter(person => person.id !== id))
          console.log(removedPerson)
      })
      .catch(error => {
        console.log('Error deleting this person', error)
        setAlertMessage(`Information of ${person.name} has already been removed from the server`)
        setAlertType('error')
        setTimeout(() => {
          setAlertMessage(null)
          setAlertType(null)
        }, 5000)
      })
    }
  }

  // Filter the persons to show based on the search input. If the search input is empty, show all persons in the phonebook
  const personToShow = showAll === ""
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(showAll.toLowerCase()))

  // Render the application UI
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={alertMessage} alertType={alertType} />
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
      <Persons
        persons={personToShow}
        onDelete={handleDeletion}
        id={persons.id}
      />
    </div>
  )
}

export default App
