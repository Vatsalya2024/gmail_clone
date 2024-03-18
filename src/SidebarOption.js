import React from 'react'
import './SidebarOption.css'
function SidebarOption({Icon,text}) {
  return (
    <div className="sidebarOption">
      <Icon className="sidebarOption__icons" />
      <h4 className="sidebarOption__text">{text}</h4>
    </div>
  );
}

export default SidebarOption;
