const App = () => {
  const course = 'Half Stack application development'
  const courseItems = [
    {
      part: 'Fundamentals of React',
      exercises: 10
    },
    {
      part: 'Using props to pass data',
      exercises: 7
    },
    {
      part: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={courseItems} />
      <Total total={courseItems} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].part + ' ' + props.parts[0].exercises} />
      <Part part={props.parts[1].part + ' ' + props.parts[1].exercises} />
      <Part part={props.parts[2].part + ' ' + props.parts[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part}</p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</p>
    </div>
  )
}


export default App