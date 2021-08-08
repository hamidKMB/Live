//REACT
import React from "react";
import { Switch, Route} from "react-router-dom";

//COMPONENTS
import Header from "./components/header/header.component";
import SideMenu from "./components/side-menu/side-menu.component";

//PAGES
import Dashboard from "./pages/dashboard/dashboard.component";
import Account from "./pages/account/account.component";
import Videos from "./pages/videos/videos.component";
import Events from "./pages/events/events.component";
import ChartPage from "./pages/charts/chart-page.component";
import Finance from "./pages/finance/finance.component";
import Tickets from "./pages/tickets/tickets.component";
import Discounts from "./pages/discounts/discounts.component";
import Followers from "./pages/followers/followers.component";
import BackUp from "./pages/back-up/back-up.component";
import UploadVideo from "./pages/videos/uploaded-videos/upload-video/upload-video.component";
//STYLES
import "./App.css";
import "./root-styles/__dark-mode.scss"
import VideoInfo from "./pages/videos/uploaded-videos/video-info/video-info.component";
import ApiRequest from "./ApiRequest";
import Sign from "./pages/sign-in-up/sign-page.component";

function App() {
  const [toggled, setToggled] = React.useState(false);
  const [signed, setSigned] = React.useState(false)

  const signHandler = () => {
    setSigned(true)
  }

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
        signed ? 
          <div>
          <Header toggleSideBar={handleClick} onToggleDarkMode={onToggledDarkMode} dark={isDark}/>
          <SideMenu display={toggled ? "toggle-side-menu" : " "} />
          <Switch>
            {/* dashboard */}
            <Route exact path="/" component={Dashboard} />
    
            {/* account */}
            <Route path="/account/:tab" component={Account} />
    
            {/* Videos */}
            <Route path="/videos/video-info" component={VideoInfo}/>
            <Route path="/videos/upload-video" component={UploadVideo}/>
            <Route path="/videos/:tab" component={Videos} />
            
            {/* Events */}
            <Route path="/events" component={Events} />
            
            {/* Charts */}
            <Route path="/charts" component={ChartPage} />
            
            {/* Finance */}
            <Route path="/finance/:tab" component={Finance} />
            
            {/* Tickets */}
            <Route path="/tickets" component={Tickets} />
            
            {/* Discounts */}
            <Route path="/discounts" component={Discounts} />
            
            {/* Followers/Following */}
            <Route path="/follow" component={Followers} />
            
            {/* BackUp */}
            <Route path="/backup" component={BackUp} />
          </Switch>
          </div>
          :
          <Sign signed={signed} signHandler={signHandler}/>
      }
    </div>
    );
}

export default App;
