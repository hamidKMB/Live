//REACT
import React from "react";

//COMPONENTS
import PersonalInformation from "./personal-information/personal-information.component";
import SettingsOfChannel from "./settings-of-channel/setting-of-channel.component";
import Notifications from "./notifications/notifications.component"
import ChangePassword from "./change-password/change-password.component";

//MaterialUI
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

//React Router
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";

//STYLES
import "./Tab.styles.scss"
import "../../../root-styles/variables.scss"



const theme = createTheme({ //overriding the classes of the material UI
  overrides:{
    MuiTab:{
      root:{
        minWidth: 0,
        '@media (min-width: 0px)':{
          minWidth:0
        }
      }
    },
  },
  palette: {
    primary: {
      main: '#EFA00B',
    },
  },
})



export default function LabTabs(props) {
  let { path, url } = useRouteMatch();  
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
      <div className="tabs">
      <ThemeProvider theme={theme}>
        <TabContext 
          value={value} 
          className="tab-context"
          >
          <AppBar position="static" className="bottom-slider">
            <TabList indicatorColor="primary" onChange={handleChange} aria-label="simple tabs example" className='tab-list'>
              <Link to={`${url}/personal-info`}>
                <Tab label="اطلاعات شخصی" value="1"/>
              </Link>  
              <Link to= {`${url}/settings-channel`}>
                <Tab label="تنظیمات کانال" value="2"/>
              </Link>
              <Link to= {`${url}/notifications`}>
                <Tab label="اعلان ها" value="3"/>
              </Link>
              <Link to= {`${url}/change-password`}>
                <Tab label="تغییر رمز عبور" value="4"/>
              </Link>
            </TabList>
          </AppBar>

          <div>
            <Switch>
              <Route path={`${path}/personal-info`}>
                  <PersonalInformation/>
              </Route>
              <Route path={`${path}/settings-channel`}>
                  <SettingsOfChannel/>
              </Route>
              <Route path={`${path}/notifications`}>
                  <Notifications/>
              </Route>
              <Route path={`${path}/change-password`}>
                  <ChangePassword/>
              </Route>
            </Switch>          
          </div>
       

        </TabContext>
        </ThemeProvider>
      </div>
    );
}
