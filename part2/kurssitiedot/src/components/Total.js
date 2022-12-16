const Total = ({ parts }) => {
    const sum = parts.reduce((total, currentValue) => total + currentValue.exercises, 0);
    
    return (
        <div>
            <p><b>Total of {sum} exercises</b></p>
        </div>
    )
}

export default Total