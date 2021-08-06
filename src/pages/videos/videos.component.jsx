//REACT
import React from "react";

//Material-ui

//Components


//React-router-dom
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";

//STYLES
import "./videos.styles.scss";
import UploadedVideos from "./uploaded-videos/uploaded-videos.component";
import Courses from "./courses/courses.component";
import TabSlider from "../../components/tab-slider/tab-slider.component";

const Videos = () => {
  let {url} = useRouteMatch()
  return (
    <div className="admin-pages-layout videos-layout">
      <TabSlider
        routeParameters= {['uploaded', 'courses', 'bought-videos', 'liked-videos']}
        tabDetails={
          [
            {
              label: "ویدیو های آپلود شده" ,
              link: "/videos/uploaded"
            } ,
            {
              label: "دوره ها" ,
              link: "/videos/courses"
            } ,
            {
              label: "ویدیوهای خریداری شده" ,
              link: "/videos/bought-videos"
            } ,
            {
              label: "ویدیوهای پسندیده شده" ,
              link: "/videos/liked-videos"
            } ,
          ]
        }
      />
      {
        url === "/videos/uploaded" ?
            <div className="videos-detail">
              <h5>
                لیست ویدیو های آپلود شده
              </h5>
              <Link to={`/videos/upload-video`}>
                <div className="button upload-video">
                  آپلود ویدیو های جدید
                </div>
              </Link>
            </div>
            :
        url === "/videos/courses" ?
           <div className="videos-detail">
              <h5>
                همه دوره های ایجاد شده
              </h5>
              <Link to={`/videos/upload-video`}>
                <div className="button upload-video">
                  آپلود دوره جدید
                </div>
              </Link>
            </div>
          : 
        url === "/videos/courses/:courseTitle" ?
        <div className="videos-detail">
              <h5>
                New Title
              </h5>
              <Link to={`/videos/upload-video`}>
                <div className="button upload-video">
                  آپلود ویدیو جدید
                </div>
              </Link>
          </div>
          :
          null
      }
      <div className="content-holder">
        <Switch>
          <Route path={`/videos/uploaded`}>
            <UploadedVideos/>
          </Route>
          <Route path={`/videos/courses/:courseTitle`}>
            <h3>HelloWorld</h3>
          </Route>
          <Route exact path={`/videos/courses`}>
            <Courses/>
          </Route>
          <Route path={`/videos/bought-videos`}>
          <h3>bought Videos</h3>
          </Route>
          <Route path={`/videos/liked-videos`}>
            <h3>Liked Videos</h3>
          </Route>
        </Switch>
      </div>
    </div>
    );
};

export default Videos;
