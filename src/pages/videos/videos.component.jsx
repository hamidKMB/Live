//REACT
import React from "react";

//Material-ui
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createTheme, ThemeProvider } from "@material-ui/core";
//Components


//React-router-dom
import { Link, Switch, Route, useParams, useRouteMatch } from "react-router-dom";

//STYLES
import "./videos.styles.scss";
import UploadedVideos from "./uploaded-videos/uploaded-videos.component";
import Courses from "./courses/courses.component";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width:"50vw",
    backgroundColor:"inherit",
    border: "none",
    boxShadow: "none",
    fontFamily: "inherit",
  },
}
)

const theme = createTheme({
  overrides:{
    MuiTab:{
      root:{
        fontFamily:"inherit",
        fontSize: "80%",
        borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
        padding: "0 10px 0 10px",
        '@media (min-width: 600px)':{
          minWidth: 'fit-content'
        }
      }
    } ,
    MuiTabs:{
      root:{
        marginBottom: "2.5rem"
      }
    } 
  } 
})

const Videos = () => {
  let my_tabs = ['uploaded', 'courses', 'bought-videos', 'liked-videos']
  let { tab } = useParams()
  let {url} = useRouteMatch()

  React.useEffect(() => {
    let index = my_tabs.indexOf(tab);
    setValue(index);
  }, [my_tabs, tab]);

  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
    <div className="admin-pages-layout videos-layout">
      <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{style:{backgroundColor: "#EFA00B", color:"#000"}}}
      >
        <Tab label="ویدیو های آپلود شده" component={Link} to={`/videos/uploaded`}/>
        <Tab label="دوره ها" component={Link} to={`/videos/courses`}/>
        <Tab label="ویدیوهای خریداری شده" component={Link} to={`/videos/bought-videos`}/>
        <Tab label="ویدیوهای پسندیده شده" component={Link} to={`/videos/liked-videos`}/>
      </Tabs>
      </Paper>
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
    </ThemeProvider>
    );
};

export default Videos;
