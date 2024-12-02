function InputCompenent(title, onChangeHandler) {
    return (<>
        <div className="inputContainer">
            <p>{title}</p>
            <input type="number" onChange={(e) => onChangeHandler(e.target.value)} />
        </div>
    </>)
}

export default InputCompenent;