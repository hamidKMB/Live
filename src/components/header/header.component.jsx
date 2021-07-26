//REACT
import React from "react"

//test picture
import userPicture from "../side-menu/WhatsApp Image 2021-06-22 at 13.15.45.jpeg"

//COMPONENTS

//Styles
import "./header.styles.scss"
import "../../root-styles/variables.scss"
import { Container } from "@material-ui/core";


///ICONS
import { MenuItem } from "@material-ui/core";
import { ReactComponent as VideoCameraIcon } from "./Header/camera_video.svg";
import { ReactComponent as NotificationsIcon } from "./Header/notification1.svg";
import { ReactComponent as LiveIcon } from "./Header/live.svg";
import { ReactComponent as HeadsetIcon } from "./Header/support.svg";
import { ReactComponent as SearchIcon } from "./Header/Search.svg";
import { ReactComponent as HamburgerMenuIcon } from "./Header/hamburger_menu.svg";
import { ReactComponent as PlusIcon } from "./Header/plus.svg";
import Brightness4OutlinedIcon from "@material-ui/icons/Brightness4Outlined";
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';

const Header = (props) => {
    return (
      <div className="header">
        <Container>
          <div className="items-holder">
            <div className="right">
              <HamburgerMenuIcon 
                className="ham-menu"
                onClick={props.toggleSideBar}
              />
              <div className="brand-logo" />
            </div>
            {props.dark ? (
              <BrightnessHighIcon
                style={{
                  color: "#EFB13C",
                  cursor: "pointer",
                }}
                className="icon-color"
                onClick={props.onToggleDarkMode}
              />
            ) : (
              <Brightness4OutlinedIcon
                style={{
                  cursor: "pointer",
                }}
                className="icon-color"
                onClick={props.onToggleDarkMode}
              />
            )}
            <div className="middle">
              <div className="input-box">
                <SearchIcon className="icon-color" />
                <input
                  type="text"
                  placeholder="عبارت مورد نظر خود را جستجو کنید"
                />
              </div>
            </div>
            <div className="left">
              <span>
                <NotificationsIcon className="icon-color"/>
                <span className="gooshe" />
                <div className="hover-state">نمایش اعلان ها</div>
              </span>
              <span>
                <VideoCameraIcon className="icon-color" />
                <span className="gooshe" />
                <div className="hover-state">ویدیوها</div>
              </span>
              <span>
                <LiveIcon className="icon-color" />
                <span className="gooshe" />
                <div className="hover-state">لایو</div>
              </span>
              <span>
                <HeadsetIcon className="icon-color" />
                <span className="gooshe" />
                <div className="hover-state">پشتیبانی</div>
              </span>
              <span>
                <p>تومان2500</p>
                <PlusIcon className="icon-color" />
              </span>
              <span className="profile-photo">
                <img src={userPicture} alt="profile" />
              </span>
            </div>
          </div>
        </Container>
      </div>
    );
}

export default Header