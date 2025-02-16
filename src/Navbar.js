import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import EmailIcon from "@mui/icons-material/Email";

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Notifications App</span>
      <div className="icons">
        <div className="icon">
          <NotificationsIcon></NotificationsIcon>
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <EmailIcon></EmailIcon>
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <SettingsIcon className="iconImage"></SettingsIcon>
          <div className="counter">2</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
