import React from "react";

import "./drop-down.styles.scss";

const DropDown = (props) => {
    return(
        <select name="myselect" onchange="this.form.submit()" className="drop-down">
            {
                props.items.map(item => (
                    <option value={item}>
                        {item}
                    </option>
                ))
            }
        </select>
    )
}

export default DropDown;