//REACT
import React from "react";
import {NavLink} from "react-router-dom";

//STYLES
import "./side-menu.styles.scss";

const MenuMultiActiveItem = (props) => {

    return (
        <li>
            <NavLink exact={props.routeName === "/"}
                     to={props.routeName}
                     isActive={() => props.multi_pages.includes(props.pathname)
                     }

            >
                {props.title}
                {props.logo}
            </NavLink>
        </li>
    );
}

export default MenuMultiActiveItem
