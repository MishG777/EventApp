import React from "react";

import MainNavigation from "../components/MainNavigation";
import { Outlet, useNavigation } from "react-router-dom";

const RootLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation);

  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === "loading" && <h4>Loading...</h4>}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
