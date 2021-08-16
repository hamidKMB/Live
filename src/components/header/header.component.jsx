//REACT
import React from "react"

//test picture
import userPicture from "../side-menu/WhatsApp Image 2021-06-22 at 13.15.45.jpeg"

//COMPONENTS

//Styles
import "./header.styles.scss"
import "../../root-styles/variables.scss"


///ICONS
import { ReactComponent as VideoCameraIcon } from "./Header/camera_video.svg";
import { ReactComponent as NotificationsIcon } from "./Header/notification1.svg";
import { ReactComponent as LiveIcon } from "./Header/live.svg";
import { ReactComponent as HeadsetIcon } from "./Header/support.svg";
import { ReactComponent as SearchIcon } from "./Header/Search.svg";
import { ReactComponent as HamburgerMenuIcon } from "./Header/hamburger_menu.svg";
import { ReactComponent as PlusIcon } from "./Header/plus.svg";
import Brightness4OutlinedIcon from "@material-ui/icons/Brightness4Outlined";
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
      <div className="header">
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
                <Link to={`/account/notifications`}>
                  <NotificationsIcon className="icon-color" />
                </Link>
                <span className="gooshe" />
                <div className="hover-state">نمایش اعلان ها</div>
              </span>
              <span>
                <Link to="/videos/uploaded">
                  <VideoCameraIcon className="icon-color" />
                </Link> 
                <span className="gooshe" />
                <div className="hover-state">ویدیوها</div>
              </span>
              <span>
                <Link to='/events'>
                  <LiveIcon className="icon-color" />
                </Link>
                <span className="gooshe" />
                <div className="hover-state">لایو</div>
              </span>
              <span>
                <Link to="/backup">
                  <HeadsetIcon className="icon-color" />
                </Link>
                <span className="gooshe" />
                <div className="hover-state">پشتیبانی</div>
              </span>
            <span>
              <p>
                <span>2500</span> تومان
              </p>
              <PlusIcon className="icon-color" />
            </span>
            <span className="profile-photo">
              <img src={userPicture} alt="profile" />
            </span>
          </div>
        </div>
      </div>
    );
}

export default Header