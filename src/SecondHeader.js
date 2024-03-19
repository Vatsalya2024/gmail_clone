import React from 'react'
import "./SecondHeader.css";
import InboxIcon from "@mui/icons-material/Inbox";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import InfoIcon from "@mui/icons-material/Info";
function SecondHeader() {
  return (
    <div className="secondHeader">
      <div className="secondHeader__first">
        <InboxIcon/>
        <h3>Primary</h3>
      </div>
      <div className="secondHeader__second">
        <LocalOfferIcon/>
        <h3>Promotion</h3>
      </div>
      <div className="secondHeader__third">
        <InfoIcon/>
        <h3>Updates</h3>
      </div>
      <div></div>
    </div>
  );
}

export default SecondHeader;
