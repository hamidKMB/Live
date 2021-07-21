import React from "react"

//test picture
import userPicture from "../side-menu/WhatsApp Image 2021-06-22 at 13.15.45.jpeg"

//Styles
import "./header.styles.scss"
import { Container } from "@material-ui/core";

///ICONS
import VideocamIcon from "@material-ui/icons/Videocam";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";

const Header = (props) => {
    return (
      <div className="header">
        <Container>
          <div className="items-holder">
            <div className="right">
              <MenuIcon className="ham-menu" onClick={props.toggleSideBar}/>
              <span className="brand-logo">
                <img src="#" alt="brand-logo" />
              </span>
            </div>
            <div className="middle">
              <div className="input-box">
                <SearchIcon className="icon-color" />
                <input type="text" placeholder="عبارت مورد نظر خود را جستجو کنید"/>
              </div>
            </div>
            <div className="left">
              <span>
                <NotificationsNoneIcon className="icon-color" />
              </span>
              <span>
                <VideocamIcon className="icon-color" />
              </span>
              <span>
                <LiveTvIcon className="icon-color" />
              </span>
              <span>
                <HeadsetMicIcon className="icon-color" />
              </span>
              <span>
                <p>تومان2500</p>
                <AddIcon className="icon-color" />
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