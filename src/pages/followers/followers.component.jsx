//REACT
import React from "react";
import TabSlider from "../../components/tab-slider/tab-slider.component";
import { ReactComponent as SearchIcon } from "../../components/header/Header/Search.svg";
//STYLES
import "../../root-styles/layout.scss";
import "./followers.page.style.scss"
import { Route, Switch } from "react-router-dom";
import Follower from "../../components/account follower/follower.component";
import Following from "../../components/account follower/following.component";

const Followers = () => {
  return (
    <div className="admin-pages-layout followers-layout">
      <TabSlider
        routeParameters={["followings", "followers"]}
        tabDetails={[
          {
            label: "دنبال شدگان",
            link: "/follow/followings",
          },
          {
            label: "دنبال کنندگان",
            link: "/follow/followers",
          },
        ]}
      />
      <div className="d-flex flex-row">
        <div className="d-flex flex-column">
          <div className="search bg-white shadow-sm pe-4  py-2">
            <div className="search-box">
              <SearchIcon className="icon-color" />
              <input
                type="text"
                placeholder="کانال مورد نظر خود را جستجو کنید"
                className="border-0"
              />
            </div>
          </div>
          <div>
            <Switch>
              <Route path="/follow/followers">
                <Follower/>
              </Route>
              <Route path="/follow/followings">
                <Following/>
              </Route>
            </Switch>
          </div>
        </div>
        <div className="logo-container"></div>
      </div>
    </div>
  );
};

export default Followers;
