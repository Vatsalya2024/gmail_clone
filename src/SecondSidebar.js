import React from "react";
import "./SecondSidebar.css";
import SecondSidebarOption from "./SecondSidebarOption";

import CreateIcon from "@mui/icons-material/Create";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InboxIcon from "@mui/icons-material/Inbox";
import AddIcon from "@mui/icons-material/Add";
import BookmarkIcon from "@mui/icons-material/Bookmark";
function SecondSidebar() {
  return (
    <div className="secondSidebar">
      <div className="secondSidebar__compose">
        <div className="secondSidebar__composeIcon">
          <SecondSidebarOption Icon={CreateIcon} text="Compose" />
        </div>
      </div>
      <div className="secondSidebar__textOptions">
        <SecondSidebarOption Icon={InboxIcon} text="Inbox" />
        <SecondSidebarOption Icon={StarIcon} text="Starred" />
        <SecondSidebarOption Icon={AccessTimeIcon} text="Snoozed" />
        <SecondSidebarOption Icon={SendIcon} text="Sent" />
        <SecondSidebarOption Icon={FindInPageIcon} text="Drafts" />
        <SecondSidebarOption Icon={KeyboardArrowDownIcon} text="More" />
      </div>
      <div className="secondSidebar__WidgetTitle">
        <SecondSidebarOption text={"Label"} Icon={AddIcon} />
      </div>
      <div className="secondSidebar__WidgetComponent">
        <SecondSidebarOption Icon={BookmarkIcon} text={"Scrum"} />
      </div>
    </div>
  );
}

export default SecondSidebar;
