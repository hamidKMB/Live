import React from "react";

import "./text-input.styles.scss";

const TextInput = (props) => {
  return (
    <div>
      <fieldset className="field-set">
        <legend className="legend">{props.label}</legend>
        <input required />
      </fieldset>
    </div>
  );
};

export default TextInput;