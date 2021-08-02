//REACT
import React from "react";

//COMPONENTS
import PersonalInformation from "./personal-information/personal-information.component";
import SettingsOfChannel from "./settings-of-channel/setting-of-channel.component";
import Notifications from "./notifications/notifications.component"
import ChangePassword from "./change-password/change-password.component";

//MaterialUI
import AppBar from "@material-ui/core/AppBar";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

//React Router
import { Link, Switch, Route, useParams } from "react-router-dom";

//STYLES
import "./Tab.styles.scss";
import "../../../root-styles/variables.scss";

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



export default function LabTabs(props) {
  let {tab} = useParams();
  let my_tab = [ 'personal-info', 'settings-channel', 'notifications', "change-password"];
  
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
     let index = my_tab.indexOf(tab);
     setValue(index);
   }, [my_tab, tab]);
  
   const handleChange = (event, newValue) => {
        setValue(newValue);
    };

      const classes = useStyles();

    return (
      <div className="tabs">
      <ThemeProvider theme={theme}>
        <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{style:{backgroundColor: "#EFA00B", color:"#000"}}}
      >
                <Tab label="اطلاعات شخصی" component={Link} to={`/account/personal-info`}/>
                <Tab label="تنظیمات کانال" component={Link} to={`/account/settings-channel`}/>
                <Tab label="اعلان ها" component={Link} to={`/account/notifications`}/>
                <Tab label="تغییر رمز عبور" component={Link} to={`/account/change-password`}/>
      </Tabs>
      </Paper>
          <div>
            <Switch>
              <Route path={`/account/personal-info`}>
                  <PersonalInformation/>
              </Route>
              <Route path={`/account/settings-channel`}>
                  <SettingsOfChannel/>
              </Route>
              <Route path={`/account/notifications`}>
                  <Notifications/>
              </Route>
              <Route path={`/account/change-password`}>
                  <ChangePassword/>
              </Route>
            </Switch>
          </div>
        </ThemeProvider>
      </div>
    );
}
