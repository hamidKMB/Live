//REACT
import React from "react";
import { Switch, Route } from "react-router-dom";

//COMPONENTS
import Header from "./components/header/header.component";
import SideMenu from "./components/side-menu/side-menu.component";

//PAGES
import Dashboard from "./pages/dashboard/dashboard.component";
import Account from "./pages/account/account.component";
import Videos from "./pages/videos/videos.component";
import Events from "./pages/events/events.component";
import Views from "./pages/views/views.component";
import Finance from "./pages/finance/finance.component";
import Tickets from "./pages/tickets/tickets.component";
import Discounts from "./pages/discounts/discounts.component";
import Followers from "./pages/followers/followers.component";
import BackUp from "./pages/back-up/back-up.component";


//STYLES
import "./App.css";
import "./root-styles/__dark-mode.scss"

function App() {
  const [toggled, setToggled] = React.useState(false);

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
      <Header toggleSideBar={handleClick} onToggleDarkMode={onToggledDarkMode} dark={isDark}/>
      <SideMenu display={toggled ? "toggle-side-menu" : " "} />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/account/:tab" component={Account} />
        <Route path="/videos/:tab" component={Videos} />
        <Route path="/events" component={Events} />
        <Route path="/views" component={Views} />
        <Route path="/finance" component={Finance} />
        <Route path="/tickets" component={Tickets} />
        <Route path="/discounts" component={Discounts} />
        <Route path="/follow" component={Followers} />
        <Route path="/backup" component={BackUp} />
      </Switch>
    </div>
  );
}

export default App;
