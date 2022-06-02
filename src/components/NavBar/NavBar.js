import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [value, setValue] = useState(0);
  const [isBusy, setIsBusy] = useState(false);
  const location = useLocation();

  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setIsBusy(true);
    location.pathname === '/favorites' && setValue(1);
    setIsBusy(false);
  }, [])

  return (
    <AppBar position="static" color="transparent" style={{ position: "fixed", top: 0 }}>
      {!isBusy &&
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Home" index={0} component={Link} to={'/'} />
        <Tab label="Favorites" index={1} component={Link} to={'/favorites'} />
      </Tabs>
      }
    </AppBar>

  );
};

export default NavBar;
