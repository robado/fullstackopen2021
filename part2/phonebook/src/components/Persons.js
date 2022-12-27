import Person from "./Person";

const Persons = ({ filterPersons, removePerson }) => {
    return (
        <div>
            {filterPersons.map(person =>
                <Person key={person.name} person={person} removePerson={removePerson} />
            )}
        </div>
    )
}

export default Persons