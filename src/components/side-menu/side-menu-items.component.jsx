import React from "react";

import "./side-menu.styles.scss";

const MenuItem = (props) => {
        return(
            <li onClick={ () => {
                props.onSelect(props.id)
            }}
            className={props.classValue}
            >
                {props.title}
                {props.logo}
            </li>
        )
}

export default MenuItem