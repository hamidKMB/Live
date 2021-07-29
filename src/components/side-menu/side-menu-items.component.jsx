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
              <object
                data={`./Dashboard_Menu/${props.logo}.svg`}
                type="image/svg+xml"
                className="dashboard-icon"
              >
              </object>
            </NavLink>
            </li>
        );
}

export default MenuItem