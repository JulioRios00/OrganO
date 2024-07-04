import "./FormField.css";

const FormField = (props, ) => {
  const modifyedPlaceholder = `${props.placeholder}...`;

  const onInserted = (e) => {
    props.onChanged(e.target.value);
  };

  return (
    <>
      <div className={`FormField FormField-${props.type}`}>
        <label>{props.label}</label>
        <input
          type={props.type}
          value={props.value}
          onChange={onInserted}
          required={props.required}
          placeholder={modifyedPlaceholder}
        />
      </div>
    </>
  );
};

export default FormField;
