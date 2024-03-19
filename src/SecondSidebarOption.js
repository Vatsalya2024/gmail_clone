import React from "react";
import "./SecondSidebarOption.css";

function SecondSidebarOption({ Icon, text,  iconFirst}) {
  return (
    <div className="secondSidebarOption">
      {iconFirst ? (
        <>
          <Icon />
          <h4>{text}</h4>
        </>
      ) : (
        <>
          <h4>{text}</h4>
          <Icon />
        </>
      )}
    </div>
  );
}

export default SecondSidebarOption;
