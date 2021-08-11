//REACT
import React from "react";
import { Switch, Route, useLocation} from "react-router-dom";

//COMPONENTS
import Header from "./components/header/header.component";
import SideMenu from "./components/side-menu/side-menu.component";

import routes from "./routes";
import PrivateRoute from "./PrivateRoute";
//STYLES
import "./App.css";
import "./root-styles/__dark-mode.scss"

function App() {
  const [toggled, setToggled] = React.useState(false);
  const {pathname} = useLocation();
  
  React.useEffect(() => {
    window.onresize = () => {
      // prevent from toggled State on True
      if (toggled) setToggled(false);
    };
  });

  const handleClick = () => {
    // hamburger Menu Toggle
    setToggled((prevValue) => {
      return !prevValue;
    });
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
  })

  return (
    <div className={`App ${isDark ? `dark` : ` `}`}>
      {
        pathname !== "/login" &&
        <>
          <Header 
            toggleSideBar={handleClick} 
            onToggleDarkMode={onToggledDarkMode} 
            dark={isDark}
          />
          <SideMenu 
            display={toggled ? "toggle-side-menu" : " "} 
          />
        </>
      }
        <Switch>
            {routes.map((route) => (
              route.private ? 
              <PrivateRoute {...route}/> : 
              <Route {...route}/>
              ))
            }
        </Switch>
    </div>
    );
}

export default App;
