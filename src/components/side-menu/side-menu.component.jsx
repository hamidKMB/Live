import { CameraAlt } from "@material-ui/icons";
import SettingsIcon from "@material-ui/icons/Settings";
// import ViewAgendaOutlinedIcon from "@material-ui/icons/ViewAgendaOutlined";
// import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import userPicture from "./WhatsApp Image 2021-06-22 at 13.15.45.jpeg"
import React from "react";
import { menuItemsData } from "./menu-items";
import MenuItem from "./side-menu-items.component";

import "./side-menu.styles.scss"

const SideMenu = (props) => {

    const [activeIndex, setActiveIndex] = React.useState(null);

    const handleClick = (i) => {
        setActiveIndex(i);
      };

    return (
      <div className={`side-menu ${props.display}`}>
        <div className="user-profile">
          <div className="user-profile-holder">
            <div className="user-image-holder">
              <img src={userPicture} alt="user" />
              <CameraAlt className="camera-icon" />
              <SettingsIcon className="settings-icon" />
            </div>
            <div className="user-details">
              <h3>علی رجبی</h3>
              <p>{`0933 333 3333`}</p>
            </div>
          </div>
        </div>

        <div className="list-of-dashboard">
          <ul>
            {menuItemsData.map((item, index) => {
              return (
                <MenuItem
                  key={index}
                  id={index}
                  title={item.title}
                  routeName={item.routeName}
                  logo={item.logo}
                  onSelect={handleClick}
                  classValue={activeIndex === index ? "on-click" : undefined}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
}

export default SideMenu;