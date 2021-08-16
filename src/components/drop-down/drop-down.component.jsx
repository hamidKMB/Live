import React from "react";

import "./drop-down.styles.scss";

const DropDown = (props) => {
    return(
        <select name={props.name} onChange={props.onChange} className="drop-down">
            {
                props.items.map((item, index) => (
                    <option value={item} key={index}>
                        {item}
                    </option>
                ))
            }
        </select>
    )
}

export default DropDown;