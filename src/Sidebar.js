import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import MailIcon from "@mui/icons-material/Mail";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import GroupsIcon from '@mui/icons-material/Groups';
import VideocamIcon from "@mui/icons-material/Videocam";
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarOption Icon={MailIcon} text={"Mail"} />
      <SidebarOption Icon={ChatBubbleIcon} text={"Chat"} />
      <SidebarOption Icon={GroupsIcon} text={"Spaces"}/>
      <SidebarOption Icon={VideocamIcon} text={"Meet"}/>
    </div>
  );
}

export default Sidebar;
