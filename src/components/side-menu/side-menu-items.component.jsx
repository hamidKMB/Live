//REACT
import React from "react";
import { Link } from "react-router-dom";

//STYLES
import "./side-menu.styles.scss";

const MenuItem = (props) => {
        return (
          <Link to={props.routeName}>
            <li
              onClick={() => {
                props.onSelect(props.id);
              }}
              className={props.classValue}
            >
            {props.title}
            <img src={`./Dashboard_Menu/${props.logo}.svg`} alt={`icon${props.routeName}`} className="dashboard-icon"/>
            </li>
          </Link>
        );
}

export default MenuItem