import React from "react";
import "./SecondSidebarOption.css";

function SecondSidebarOption({ Icon, text,selected }) {
  return (
    <div className={`secondSidebarOption ${selected &&"selected"}`}>
     <Icon/>
      <h4>{text}</h4>
    </div>
  );
}

export default SecondSidebarOption;
