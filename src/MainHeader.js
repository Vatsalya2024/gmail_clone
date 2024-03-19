import React from "react";
import "./MainHeader.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CachedIcon from "@mui/icons-material/Cached";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import RectangleIcon from "@mui/icons-material/Rectangle";
function MainHeader() {
  return (
    <div className="mainHeader">
      <div className="mainHeaderLeft">
        <CheckBoxOutlineBlankIcon />
        <KeyboardArrowDownIcon />
        <CachedIcon />
        <MoreVertIcon />
      </div>
      <div className="mainHeaderRight">
        <h6>1-50 0f 550</h6>
        <KeyboardArrowLeftIcon/>
        <KeyboardArrowRightIcon/>
        <RectangleIcon/>
        <KeyboardArrowDownIcon/>
      </div>
    </div>
  );
}

export default MainHeader;
