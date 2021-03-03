const InputClass = ({ handleChange, handleClick, inputValue }) => {
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Enter a new Task"
        onChange={handleChange}
        value={inputValue}
      />
      <input type="submit" value="Submit" onClick={handleClick} />
    </div>
  );
};
export default InputClass;
