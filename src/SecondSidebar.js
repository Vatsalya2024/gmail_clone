import React from "react";
import "./SecondSidebar.css";
import SecondSidebarOption from "./SecondSidebarOption";
import CreateIcon from "@mui/icons-material/Create";

function SecondSidebar() {
  return (
    <div className="secondSidebar">
      <div className="secondSidebar__compose">
        <SecondSidebarOption selected Icon={CreateIcon} text="Compose" />
      </div>
      <div className="secondSidebar__textOptions"></div>
    </div>
  );
}

export default SecondSidebar;
