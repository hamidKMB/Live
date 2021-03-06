import React from "react";

import "./text-input.styles.scss";
import {ReactComponent as PencilLogo} from "./pencil.svg";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from "react-modern-calendar-datepicker";
import TimePicker from "./time-picker/time-picker.component";

const TextInput = (props) => {
  const [selectedDay, setSelectedDay] = React.useState(null);
  const [isClicked, setIsClicked] = React.useState(false)
  return (
    <>
      <fieldset className={`field-set position-relative ${props.disable && "disable"}`}>
      {
        props.textArea &&
        <span className="helper-text">
          {props.helperText}
        </span>
      }
        <legend className="legend">{props.label}</legend>
        {
          props.input?
          <input 
            id={props.id} 
            disabled={props.disable ? true : false} 
            required 
            onChange={props.onChange}
            placeholder={props.placeholder}
            />
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
          props.textArea ?
          <textarea 
            name="video-description" 
            rows={props.rows? props.rows : "6"} 
            cols={props.cols ? props.cols : "70"} 
            maxLength={props.maxLength} 
            style={{resize: `${props.resize ? "vertical" : "none" }`}}
          />
          :
          props.datePicker ?
          <DatePicker
            value={selectedDay}
            onChange={setSelectedDay}
            inputPlaceholder=" "
            shouldHighlightWeekends
            locale="fa"
          />
          :
          props.timePicker &&
          <TimePicker
            disable={props.disable}
          />
        }
        {
          (props.disable && props.information) && <PencilLogo className="pencil"/>
        }
      </fieldset>
    </>
  );
};

export default TextInput;