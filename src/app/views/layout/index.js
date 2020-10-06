import React, { useState } from "react";
import NoMatchRoute from "app/views/components/NoMatchRoute";
import { PAGE_URLS } from "app/routes/app";
import { Switch } from "react-router-dom";
import { Dashboard } from "app/views/pages";
import { Account } from "app/views/pages";
import PrivateHeader from "app/views/layout/header/PrivateHeader";
import PrivateRoute from "app/views/components/PrivateRoute";

// import SideMenu from "./side-menu";

function DefaultLayout() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <>
      <PrivateHeader
        onTriggerClick={() => setIsCollapsed(!isCollapsed)}
        sideMenuCollapsed={isCollapsed}
      />
      {/* {!isCollapsed && <SideMenu />} */}
      <Switch>
        <PrivateRoute
          path={PAGE_URLS.DASHBOARD}
          exact={true}
          component={Dashboard}
        />
        <PrivateRoute
          path={PAGE_URLS.ACCOUNT}
          exact={true}
          component={Account}
        />
        <NoMatchRoute />
      </Switch>
    </>
  );
}

export default DefaultLayout;
