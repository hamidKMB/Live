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
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

//React Router
import { Link, Switch, Route, useParams } from "react-router-dom";

//STYLES
import "./Tab.styles.scss";
import "../../../root-styles/variables.scss";

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

    return (
      <div className="tabs">
      <ThemeProvider theme={theme}>
        <TabContext
          value={value}
          className="tab-context"
          >
          <AppBar position="static" className="bottom-slider">
            <TabList indicatorColor="primary" textColor="primary" onChange={handleChange} aria-label="simple tabs example" className='tab-list'>
                <Tab label="اطلاعات شخصی" component={Link} to={`/account/personal-info`}/>
                <Tab label="تنظیمات کانال" component={Link} to={`/account/settings-channel`}/>
                <Tab label="اعلان ها" component={Link} to={`/account/notifications`}/>
                <Tab label="تغییر رمز عبور" component={Link} to={`/account/change-password`}/>
            </TabList>
          </AppBar>
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
        </TabContext>
        </ThemeProvider>
      </div>
    );
}
