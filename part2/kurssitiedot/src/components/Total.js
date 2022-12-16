const Total = ({ parts }) => {
    const sum = parts.reduce((total, currentValue) => total + currentValue.exercises, 0);

    /* With arrow function. Now console.log is possible to insert inside
     const sum = parts.reduce((total, currentValue) => {
        return total + currentValue.exercises
    }, 0); */
    /* Can insert console.log inside reduce
    const sum1 = parts.reduce((total, currentValue) => console.log('Terve', total, currentValue) || total + currentValue, 0)
    console.log('sum1...', sum1)
    */
    
    return (
        <div>
            <p><b>Total of {sum} exercises</b></p>
        </div>
    )
}

export default Total