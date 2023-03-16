import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <div className={classes.mainNav}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Event Details
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MainNavigation;
