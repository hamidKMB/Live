import { CameraAlt } from "@material-ui/icons";
import SettingsIcon from "@material-ui/icons/Settings";
import ViewAgendaOutlinedIcon from "@material-ui/icons/ViewAgendaOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import userPicture from "./WhatsApp Image 2021-06-22 at 13.15.45.jpeg"
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import ConfirmationNumberOutlinedIcon from "@material-ui/icons/ConfirmationNumberOutlined";
import GroupIcon from "@material-ui/icons/Group";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
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
          <img src={userPicture} alt="user" />
          <CameraAlt className="camera-icon" />
          <SettingsIcon className="settings-icon" />
        </div>
        <div className="list-of-dashboard">
          <ul>
            {
              menuItemsData.map((item, index) => {
                return(
                  <MenuItem 
                    key={index}
                    id={index}
                    title={item.title}
                    onSelect={handleClick}
                    classValue= {activeIndex === index ? "on-click" : undefined}
                  />
                )
              })
            }
          </ul>
        </div>
      </div>
    );
}

export default SideMenu;

            {
              /* <li>
              داشبورد <ViewAgendaOutlinedIcon className="dashboard-icon" />
            </li>
            <li
              className={isClicked ? "on-click-theme" : undefined}
              onClick={onClickHandler}
              id= '1'
            >
              حساب کاربری
              <PermIdentityOutlinedIcon className="dashboard-icon" />
            </li>
            <li
            // className={isClick ? "on-click-theme" : undefined}
            // onClick={onClickHandler}
            >
              رویداد ها <EventOutlinedIcon className="dashboard-icon" />
            </li>
            <li
            // className={isClick ? "on-click-theme" : undefined}
            // onClick={onClickHandler}
            >
              ویدیو ها <VideocamOutlinedIcon className="dashboard-icon" />
            </li>
            <li
            // className={isClick ? "on-click-theme" : undefined}
            // onClick={() => setIsClick(true)}
            >
              آمار بازدید <TrendingUpOutlinedIcon className="dashboard-icon" />
            </li>
            <li
            // className={isClick ? "on-click-theme" : undefined}
            // onClick={() => setIsClick(true)}
            >
              مالی <MonetizationOnOutlinedIcon className="dashboard-icon" />
            </li>
            <li
            // className={isClick ? "on-click-theme" : undefined}
            // onClick={() => setIsClick(true)}
            >
              بلیط ها
              <ConfirmationNumberOutlinedIcon className="dashboard-icon" />
            </li>
            <li
            // className={isClick ? "on-click-theme" : undefined}
            // onClick={() => setIsClick(true)}
            >
              تخفیف ها
            </li>
            <li
            // className={isClick ? "on-click-theme" : undefined}
            // onClick={() => setIsClick(true)}
            >
              دنبال کنندگان/دنبال شدگان <GroupIcon className="dashboard-icon" />
            </li>
            <li
            // className={isClick ? "on-click-theme" : undefined}
            // onClick={() => setIsClick(true)}
            >
              پشتیبانی <HeadsetMicIcon className="dashboard-icon" />
            </li>
            <li
            // className={isClick ? "on-click-theme" : undefined}
            // onClick={() => setIsClick(true)}
            >
              خروج از حساب کاربری <ExitToAppIcon className="dashboard-icon" />
            </li> */
            }