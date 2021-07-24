import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";

import "./Tab.styles.scss"

export default function LabTabs() {
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
      <div className="tipper">
        <TabContext value={value}>
            <AppBar position="static">
            <TabList onChange={handleChange} aria-label="simple tabs example" className="tab-list">
                <Tab label="اطلاعات شخصی" value="1" />
                <Tab label="تنظیمات کانال" value="2" />
                <Tab label="اعلان ها" value="3" />
                <Tab label="تغییر رمز عبور" value="4" />
            </TabList>
          </AppBar>
          <TabPanel value="1">اطلاعات شخصی</TabPanel>
          <TabPanel value="2">تنظیمان</TabPanel>
          <TabPanel value="3">اعلان ها</TabPanel>
          <TabPanel value="4">تغییر رمز عبور</TabPanel>
        </TabContext>
      </div>
    );
}
