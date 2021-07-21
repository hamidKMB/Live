import './App.css';
import React from "react"
import Header from './components/header/header.component';
import SideMenu from './components/side-menu/side-menu.component';
import Dashboard from './pages/dashboard/dashboard.component';

function App() {
  const [toggled, setToggled] = React.useState(false)
  
  React.useEffect(() => {
    window.onresize = () => { // prevent from toggled State on True 
      if (toggled) setToggled(false);
    };
  });

  const handleClick = () => { // hamburger Menu Toggle
    setToggled((prevValue) => {
      return(!prevValue)
    })
  }

  return (
    <div className="App">
      <Header toggleSideBar={() => handleClick()} />
      <SideMenu display={toggled ? "toggle-side-menu" : " "}/>
      <Dashboard/>
    </div>
  );
}

export default App;
