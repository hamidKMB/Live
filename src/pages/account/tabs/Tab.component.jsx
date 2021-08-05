//REACT
import React from "react";

//COMPONENTS
import PersonalInformation from "./personal-information/personal-information.component";
import SettingsOfChannel from "./settings-of-channel/setting-of-channel.component";
import Notifications from "./notifications/notifications.component"
import ChangePassword from "./change-password/change-password.component";

//React Router
import { Switch, Route } from "react-router-dom";

import TabSlider from "../../../components/tab-slider/tab-slider.component";

//STYLES
import "./Tab.styles.scss";
import "../../../root-styles/variables.scss";


export default function LabTabs(props) {
    return (
      <div className="tabs">
      <TabSlider 
        routeParameters= {[ 'personal-info', 'settings-channel', 'notifications', "change-password"]}
        tabDetails={
          [
            {
              label: "اطلاعات شخصی",
              link: "/account/personal-info",
            },
            {
              label: "تنظیمات کانال",
              link: "/account/settings-channel",
            },
            {
              label: "اعلان ها",
              link: "/account/notifications",
            },
            {
              label: "تغییر رمز عبور",
              link: "/account/change-password",
            },
          ]
        }
      />
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
    </div>
    );
}
