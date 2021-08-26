//REACT
import React from "react";
import { Switch, Route, useLocation, Redirect, useHistory} from "react-router-dom";

//COMPONENTS
import Header from "./components/header/header.component";
import SideMenu from "./components/side-menu/side-menu.component";

import routes from "./routes";
import PrivateRoute from "./PrivateRoute";
//STYLES
import "./App.css";
import "./root-styles/__dark-mode.scss"
import ApiRequest from "./ApiRequest";
import Cookies from "js-cookie";
import logOut from "./logout";

function App() {
  const [toggled, setToggled] = React.useState(false);
  const {pathname} = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    window.onresize = () => {
      // prevent from toggled State on True
      if (toggled) setToggled(false);
      console.log("called-resize", toggled);
    };
  });
  const onSideMenuClickHandler = () => {
    if ( window.innerWidth < 768 ) setToggled(!toggled)
  }

  const handleClick = () => {
    // hamburger Menu Toggle
    if (window.innerWidth < 768) setToggled(!toggled)
    console.log("clicked", toggled);
  };

  const stored = localStorage.getItem("isDark");
  //saving dark mode to local storage
  const [isDark, setIsDark] = React.useState(
    stored === "true" ? true : false
  );

  const onToggledDarkMode = () => {
    // dark mode toggled
    setIsDark(!isDark);
    localStorage.setItem("isDark", !isDark);
  }

  React.useEffect(() => { // dark-mode of body
    isDark?
    document.querySelector("body").classList.add("dark") :
    document.querySelector("body").classList.remove("dark")

    pathname === "/logout" && logOut()
  })

  return (
    <div className={`App ${isDark ? `dark` : ` `}`}>
      {pathname !== "/login" && pathname !=="/limit_device_list" && (
        <>
          <Header
            toggleSideBar={handleClick}
            onToggleDarkMode={onToggledDarkMode}
            dark={isDark}
          />
          <SideMenu display={toggled ? "toggle-side-menu"  : " " } onClick={onSideMenuClickHandler}/>
        </>
      )}
      <Switch>
        {routes.map((route, index) =>
          route.private ? (
            <PrivateRoute key={index} {...route} />
          ) : (
            <Route key={index}  {...route} />
          )
        )}
      </Switch>
    </div>
  );
}

export default App;
