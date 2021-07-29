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
              <object
                data={`./Dashboard_Menu/${props.logo}.svg`}
                type="image/svg+xml"
                className="dashboard-icon"
              >
              </object>
            </li>
          </Link>
        );
}

export default MenuItem