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
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";

//STYLES
import "./videos.styles.scss";
import UploadedVideos from "./uploaded-videos/uploaded-videos.component";

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
    }
  }
})

const Videos = () => {
  const classes = useStyles();
  const {url, path} = useRouteMatch()
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
    <div className="admin-pages-layout videos">
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
      <div className="videos-detail">
        <h5>
          لیست ویدیو های آپلود شده
        </h5>
        <Link to={`${url}/upload-video`}>
          <div className="button upload-video">
            آپلود ویدیو های جدید
          </div>
        </Link>
      </div>
    <div className="content-holder">
      <Switch>
        <Route exact path={`${path}`} component={UploadedVideos}/>
        <Route path={`${path}/upload-video`}>
          <h3>Upload Video</h3>
        </Route>
        <Route path={`${path}/courses`}>
        <h3>Courses</h3>
        </Route>
        <Route path={`${path}/bought-videos`}>
        <h3>bought Videos</h3>
        </Route>
        <Route path={`${path}/liked-videos`}>
          <h3>Liked Videos</h3>
        </Route>
      </Switch>
    </div>
    </div>
    </ThemeProvider>
    );
};

export default Videos;
