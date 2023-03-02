import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarContent,
} from "react-pro-sidebar";

import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";

const Header = () => {
  const [menuCollapse, setMenuCollapse] = useState(true);

  const menuIconClick = () => {
    setMenuCollapse(!menuCollapse);
  };

  return (
    <>
      <div id="header">
        <ProSidebar
          className={`border-r-2 ${
            menuCollapse ? "border-white" : "border-blue-50"
          }`}
          collapsed={menuCollapse}
        >
          <div className="h-20 mt-2">
            <div className="logotext">
              <p className="">
                {menuCollapse ? (
                  <i className="bi bi-yelp text-blue-800">A&amp;C</i>
                ) : (
                  <i className="bi bi-yelp text-blue-800 p-2 text-xl font-bold">
                    Anal Co.
                  </i>
                )}
              </p>
            </div>
            <div className="closemenu text-center" onClick={menuIconClick}>
              {menuCollapse ? (
                <i className="bi bi-list text-3xl text-blue-800"></i>
              ) : (
                <div>
                  <i className="bi bi-reply-fill text-3xl text-blue-800"></i>
                </div>
              )}
            </div>
          </div>
          <SidebarContent>
            <Menu>
              <MenuItem className={`hover:bg-white ${
              menuCollapse ? "hover:bg-white" : "hover:bg-slate-50"
              } ${menuCollapse ? "" : "hover-with-shadow"} h-20 mt-8`}>
                <Link to="/">
                  <i className="bi-house-door-fill text-3xl px-2 text-blue-800"></i>
                  <span className="text-blue-800">Home</span>
                </Link>
              </MenuItem>
              <MenuItem className={`hover:bg-white ${
              menuCollapse ? "hover:bg-white" : "hover:bg-slate-50"
              } ${menuCollapse ? "" : "hover-with-shadow"} h-20`}>
                <Link to="/candidates" className="text-blue-800">
                  <i className="bi bi-people-fill text-3xl px-2 text-blue-800"></i>
                  <span className="text-blue-800">Candidates</span>
                </Link>
              </MenuItem>
              <MenuItem className={`hover:bg-white ${
              menuCollapse ? "hover:bg-white" : "hover:bg-slate-50"
              } ${menuCollapse ? "" : "hover-with-shadow"} h-20`}>
                <Link to="/fetchDataUsers" className="">
                  <i className="bi bi-person-fill-add text-3xl px-2 text-blue-800"></i>
                  <span className="text-blue-800">Add Candidates</span>
                </Link>
              </MenuItem>
              <MenuItem className={`hover:bg-white ${
              menuCollapse ? "hover:bg-white" : "hover:bg-slate-50"
              } ${menuCollapse ? "" : "hover-with-shadow"} h-20`}>
                <Link to="/list" className="">
                  <i className="bi bi-file-text-fill text-3xl px-2 text-blue-800"></i>
                  <span className="text-blue-800">List</span>
                </Link>
              </MenuItem>
              <MenuItem className={`hover:bg-white ${
              menuCollapse ? "hover:bg-white" : "hover:bg-slate-50"
              } ${menuCollapse ? "" : "hover-with-shadow"} h-20`}>
                <Link to="/settings" className="">
                  <i className="bi bi-gear-fill text-3xl px-2 text-blue-800"></i>
                  <span className="text-blue-800">Settings</span>
                </Link>
                </MenuItem>
                <MenuItem className={`hover:bg-white ${
              menuCollapse ? "hover:bg-white" : "hover:bg-slate-50"
              } ${menuCollapse ? "" : "hover-with-shadow"} h-20`}>
                <Link to="/settings" className="">
                <i className="bi bi-translate text-3xl px-2 text-blue-800"></i>
                <span className="text-blue-800">Translate</span>
                </Link>
                </MenuItem>
                </Menu>
                </SidebarContent>
                <Menu>
                <MenuItem className={`hover:bg-white ${
              menuCollapse ? "hover:bg-white" : "hover:bg-slate-50"
              } ${menuCollapse ? "" : "hover-with-shadow"} h-20`}>
                <Link to="/settings" className="">
                <i className="bi bi-box-arrow-right text-3xl px-2 text-blue-800"></i>
                <span className="text-blue-800">Logout</span>
                </Link>
                </MenuItem>
                </Menu>
                </ProSidebar>
                </div>
                </>
                  );
                  };

                  export default Header;


