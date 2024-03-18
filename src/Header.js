import React from 'react'
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { Avatar } from '@mui/material';
function Header() {
  return (
    <div className="header">
      <div className="header__logoMenuIcon ">
        <MenuIcon />
      </div>
      <div className="header__logo">
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png"
          alt="Gmail Logo"
          height="40px"
          width="109px"
        />
      </div>
      <div className="header__search">
        <SearchIcon className="header__searchIcon" />
        <input type="text" placeholder="Search in emails" />
        <TuneIcon className="header__searchTune" />
      </div>
      <div className="header__status">
        <FiberManualRecordIcon className="headerStatus__icon" />
        <h3>Active</h3>
        <KeyboardArrowDownIcon />
      </div>
      <div className="header__widgets">
        <HelpOutlineIcon className="header__widgets1" />
        <SettingsIcon className="header__widgets1" />
        <WidgetsIcon className="header__widgets1" />
        <Avatar
          className="header__widgetsAvatar"
          src="https://avatars.githubusercontent.com/u/158306110?v=4"
        />
      </div>
    </div>
  );
}

export default Header;
