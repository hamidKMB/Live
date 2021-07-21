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

  return (
    <div className="App">
      <Header toggleSideBar={() => handleClick()} />
      <SideMenu display={toggled ? "toggle-side-menu" : " "} />
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/videos" component={Videos} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/views" component={Views} />
        <Route exact path="/finance" component={Finance} />
        <Route exact path="/tickets" component={Tickets} />
        <Route exact path="/discounts" component={Discounts} />
        <Route exact path="/follow" component={Followers} />
        <Route exact path="/backup" component={BackUp} />
      </Switch>
    </div>
  );
}

export default App;
