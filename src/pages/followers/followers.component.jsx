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
import {ReactComponent as FollowerLogoPage} from "./follower-logo.svg";
import FakeData from "./follower-following-test";

const Followers = () => {
  const items = React.useMemo(
    () => [...FakeData], []
  )
  const [data, setData] = React.useState(items)
  const [search , setSearch] = React.useState("")

  const handleChange = (value) => {
    setSearch(value)
  }

  React.useEffect (() => {
    setData(
      [...items.filter((item) => item.nickName.includes(search))]
    )
  },[items  ,search])

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
        <div className="main-holder d-flex flex-column ms-md-auto mx-auto">
          <div className="search bg-white shadow-sm pe-4  py-2 mb-3">
            <div className="search-box">
              <SearchIcon className="icon-color"/>
              <input
                type="text"
                placeholder="کانال مورد نظر خود را جستجو کنید"
                className="border-0"
                onKeyUp={(e) => handleChange(e.target.value)}
              />
            </div>
          </div>
          <div className="content-holder">
            <Switch>
              <Route path="/follow/followers">
                {
                  data.map((item,index) => {
                    return(
                      <Follower 
                        key={index}
                        name={item.nickName}
                        followersNumber={item.followersNumber}
                        videosNumber={item.videosNumber}
                        /> 
                    )
                  })
                }
              </Route>
              <Route path="/follow/followings">
                {
                  data.map((item, index) => {
                    return(
                      <Following
                        key={index}
                        name={item.nickName}
                        isUserFollowedBack={item.isUserFollowedBack}
                        followersNumber={item.followersNumber}
                        videosNumber={item.videosNumber}
                        />
                    )
                  })
                }  
              </Route>
            </Switch>
          </div>
        </div>
        <FollowerLogoPage className="follower-logo-holder mx-auto my-auto d-md-block d-none"/>
      </div>
    </div>
  );
};

export default Followers;
