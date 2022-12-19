import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }

    const existingItem = persons.find(ihminen => ihminen.name === newName)
    if (existingItem) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const filterPersons = filter ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())) : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          Filter shown with: <input
            value={filter}
            onChange={handleFilterChange}
          />
        </div>
      </form>
      <h2>Add A new</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input
            value={newName}
            onChange={handlePersonChange} />
        </div>
        <div>
          Number: <input
            value={newNumber}
            onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filterPersons.map(person =>
        <Person key={person.name} person={person} />
      )}
{/*       <h2>Numbers</h2>
      {persons.map(person =>
        <Person key={person.name} person={person} />
      )} */}
    </div>
  )
}

export default App