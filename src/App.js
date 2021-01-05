import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./screens/Home";
import Main from "./sections/Main";
import Navigation from "./sections/Navigation";
import SideDrawer from "./sections/SideDrawer";

const App = () => {
  const [menuClose, setMenuClose] = React.useState(true);
  const handleClose = (value) => {
    console.log(value);
    setMenuClose(value);
  };
  return (
    <div>
      <Router>
        <SideDrawer handleClose={handleClose} menuClose={menuClose} />
        <Navigation handleClose={handleClose} />
        <Main>
          <Home />
        </Main>
      </Router>
    </div>
  );
};

export default App;
