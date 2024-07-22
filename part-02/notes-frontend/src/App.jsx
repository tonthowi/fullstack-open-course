import { useState, useEffect } from 'react'
import Note from './components/Note'
import Notification from './components/Notification'

import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('Add a new note')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    console.log('effect')
    noteService
    .getAll()
    .then(initialNotes => {
      console.log('Notes fetched:', initialNotes)
      setNotes(initialNotes)
    })
  }, [])

  const toggleImportanceOf = id => {
    console.log(`importance of ${id} needs to be toggled`)
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
     .update(id, changedNote)
     .then(returnedNote => {
       console.log('Note updated:', returnedNote)
       setNotes(notes.map(n => n.id !== id? n : returnedNote))
     })
     .catch(error => {
       console.log('Error updating note:', error)
       setErrorMessage(
        `the note '${note.content}' was already deleted from server`
       )
       setTimeout(() => {
         setErrorMessage(null)
       }, 5000)
       setNotes(notes.filter(n => n.id !== id))
     })
  }

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5
    }

    noteService
     .create(noteObject)
     .then(returnedNote => {
       console.log('Note created:', returnedNote)
       setNotes(notes.concat(returnedNote))
       setNewNote('')
     })
    
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes Fullstack Open Course</h1>
      <Notification message={errorMessage} />
      <button
        onClick={() => {
          console.log("Show only important is: ", showAll)
          setShowAll(!showAll)
        }}
      >
        Click to { showAll ? "show only important" : "show all"}
      </button>
      <ul>
        {notesToShow.map(note => 
          <Note
            key={note.id}
            note={note}
            toggleImportant={() => toggleImportanceOf(note.id)}
            />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          type="text"
          value={newNote}
          onChange={event => {
            console.log('input changed', event.target.value)
            handleNoteChange(event)
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App