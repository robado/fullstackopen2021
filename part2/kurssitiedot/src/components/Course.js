const Header = ({ name }) => {
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

const Content = (props) => {
    const { course } = props
    return (
        <div>
            {course.parts.map(course =>
                <Part key={course.id} part={course.name} exercise={course.exercises} />)}
        </div>
    )
}

const Part = ({ part, exercise }) => {
    return (
        <div>
            <p>{part} {exercise}</p>
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</p>
        </div>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content course={course} />
        </div>
    )
}

export default Course