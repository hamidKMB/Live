import React from "react";

import "./text-input.styles.scss";
import {ReactComponent as PencilLogo} from "./pencil.svg";


const TextInput = (props) => {
  return (
    <>
      <fieldset className={`field-set position-relative ${props.disable && "disable"}`}>
        <legend className="legend">{props.label}</legend>
        {
          props.input?
          <input id={props.id} disabled={props.disable ? true : false} required onChange={props.onChange}/>
          :
          props.dropDown ?
          <select name="myselect" className="drop-down-city-country">
            {
                props.dropItems.map((item, index) => (
                    <option value={item} key={index}>
                        {item}
                    </option>
                ))
            }
          </select>
          :
          props.textArea &&
          <textarea name="video-description" rows="6" cols="70" maxLength={props.maxLength}/>
        }
        {
          props.disable && <PencilLogo className="pencil"/>
        }
      </fieldset>
    </>
  );
};

export default TextInput;