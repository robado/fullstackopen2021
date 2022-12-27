import { useState, useEffect } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons' 

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")

  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const handlePersonChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)

  const addPerson = (event) => {
    event.preventDefault()
    
    const personObject = {
      name: newName,
      number: newNumber
    }

    const existingItem = persons.find(human => human.name === newName)
    if (existingItem) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const filterPersons = filter ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())) : persons;

  const removePerson = (person) => {
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService
      .deletePerson(person.id)
      personService
      .getAll().then(persons => {
        setPersons(persons)
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <h2>Add A new</h2>
      <PersonForm
        onSubmit={addPerson}
        name={newName}
        onNameChange={handlePersonChange}
        number={newNumber}
        onNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons filterPersons={filterPersons} removePerson={removePerson} />
    </div>
  )
}

export default App