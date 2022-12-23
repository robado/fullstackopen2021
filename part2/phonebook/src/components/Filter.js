const Filter = ({ filter, onChange }) => {
    return (
        <form>
            <div>
                Filter shown with: <input
                    value={filter}
                    onChange={onChange}
                />
            </div>
        </form>
    )
}

export default Filter