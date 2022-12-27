const Person = ({ person, removePerson }) => {
    return (
        <div>{person.name} {person.number} <button onClick={() => removePerson(person)}>Delete </button></div>
    )
}

export default Person