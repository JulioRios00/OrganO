import "./Dropdown.css";

const Dropdown = (props) => {
  
  const onInserted = (e) => {
    props.onChanged(e.target.value);
  };
  return (
    <div className="Dropdown">
      <label>{props.label}</label>
      <select
        onChange={onInserted}
        required={props.required}
        value={props.value}
      >
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
