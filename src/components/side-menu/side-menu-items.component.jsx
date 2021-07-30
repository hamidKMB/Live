//REACT
import React from "react";
import { NavLink } from "react-router-dom";

//STYLES
import "./side-menu.styles.scss";

const MenuItem = (props) => {
        return (
          <li>
            <NavLink exact to={props.routeName} activeClassName="on-click">
              {props.title}
              
              {props.logo}
            </NavLink>
            </li>
        );
}

export default MenuItem