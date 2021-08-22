import {CameraAlt} from "@material-ui/icons";
import SettingsIcon from "@material-ui/icons/Settings";
// import ViewAgendaOutlinedIcon from "@material-ui/icons/ViewAgendaOutlined";
// import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import userPicture from "./WhatsApp Image 2021-06-22 at 13.15.45.jpeg"
import React from "react";
import {menuItemsData} from "./menu-items";
import MenuItem from "./side-menu-items.component";
import {useLocation} from 'react-router-dom'
import "./side-menu.styles.scss"
import MenuMultiActiveItem from "./side-menu-multi-active-items.component";

const SideMenu = (props) => {
    let {pathname} = useLocation();

    return (
        <div className={`side-menu ${props.display}`}>
            <div className="user-profile">
                <div className="user-profile-holder">
                    <div className="user-image-holder">
                        <img src={userPicture} alt="user"/>
                        <CameraAlt className="camera-icon"/>
                        <SettingsIcon className="settings-icon"/>
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
                        let pages;
                        let account_pages = [
                            '/account/personal-info',
                            '/account/settings-channel', 
                            '/account/notifications', 
                            '/account/change-password'
                            ];
                        let videos_pages = [
                            "/videos/uploaded",
                            "/videos/courses",
                            "/videos/bought-videos",
                            "/videos/liked-videos",
                            "/videos/upload-video",
                            "/videos/video-info",
                            ];
                        let finance_pages = [
                            "/finance/wallet",
                            "/finance/payments",
                            "/finance/tasfie",
                            "/finance/sheba",
                            ];
                        let followers_pages = [
                            "/follow/followings",
                            "/follow/followers"
                        ]
                        pages = item.routeName.includes('account') ? account_pages : [];
                        pages = item.routeName.includes('videos') ? videos_pages : pages;
                        pages = item.routeName.includes('finance') ? finance_pages : pages;
                        pages = item.routeName.includes('follow') ? followers_pages : pages;
                        if (pages.length > 0) {
                            return (
                                <MenuMultiActiveItem
                                    multi_pages={pages}
                                    pathname={pathname}
                                    key={index}
                                    id={index}
                                    title={item.title}
                                    routeName={item.routeName}
                                    logo={item.logo}
                                />
                            );
                        } else {
                            return (
                                <MenuItem
                                    pathname={pathname}
                                    key={index}
                                    id={index}
                                    title={item.title}
                                    routeName={item.routeName}
                                    logo={item.logo}
                                />
                            );
                        }

                    })}
                </ul>
            </div>
        </div>
    );
}

export default SideMenu;
