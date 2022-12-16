import Part from "./Part"

const Content = (props) => {
    const { course } = props
    return (
        <div>
            {course.parts.map(course =>
                <Part key={course.id} part={course.name} exercise={course.exercises} />
                )}
        </div>
    )
}

export default Content