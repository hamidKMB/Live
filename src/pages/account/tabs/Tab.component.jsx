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

//STYLES
import "./Tab.styles.scss"
import "../../../root-styles/variables.scss"
import { Route, Switch } from "react-router-dom";


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
                <Tab label="اطلاعات شخصی" value="1" indicatorColor="primary" onClick={() => props.history.push("/personal-information")}/>
                <Tab label="تنظیمات کانال" value="2" />
                <Tab label="اعلان ها" value="3" />
                <Tab label="تغییر رمز عبور" value="4" />
            </TabList>
          </AppBar>
            <TabPanel value="1"> 
            <Switch>
              <Route path='/personal-information'>
                <PersonalInformation/> 
              </Route>
            </Switch>
            </TabPanel>
          <TabPanel value="2"> <SettingsOfChannel/> </TabPanel>
          <TabPanel value="3"> <Notifications/> </TabPanel>
          <TabPanel value="4"> <ChangePassword/> </TabPanel>
        </TabContext>
        </ThemeProvider>
      </div>
    );
}
