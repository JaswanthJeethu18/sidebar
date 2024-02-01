import React, { useState } from "react";
import "./Sidebar.css";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { data } from "./data";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Sidebar = () => {
  const [selected, setselected] = useState(0);

  return (
    <div className="Sidebar-main">
      <div className="Sidebar-header">
        <div className="logo">
          <AnalyticsIcon className="logo-icon" />
        </div>
        <p>
          <span>D</span>ash<span>b</span>oard
        </p>
      </div>
      <div className="menu">
        {data.map((item, index) => {
          return (
            <div
              className={selected === index ? "menu-item active" : "menu-item"}
              key={index}
              onClick={() => setselected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}

        <div className="signout">
          <ExitToAppIcon className="logout" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
