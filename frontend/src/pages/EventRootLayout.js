import React from "react";
import { Outlet } from "react-router-dom";
import EventNavigation from "../components/EventsNavigation";

const EventRootLayout = () => {
  return (
    <>
      <EventNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default EventRootLayout;
