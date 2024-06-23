import "./TextField.css";

const TextField = (props) => {
  //just for learning how to concatenate things
  const modifyedPlaceholder = `${props.placeholder}...`;

  const onInserted = (e) => {
    props.onChanged(e.target.value);
  };

  return (
    <>
      <div className="TextField">
        <label>{props.label}</label>
        <input
          value={props.value}
          onChange={onInserted}
          required={props.required}
          placeholder={modifyedPlaceholder}
        />
      </div>
    </>
  );
};

export default TextField;
