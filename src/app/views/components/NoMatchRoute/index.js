import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PAGE_URLS } from 'app/routes/app';

function NoMatchRoute() {
  return (
    <Route>
      <Redirect push to={{ pathname: PAGE_URLS.PAGE_NOT_FOUND }} />
    </Route>
  );
}

export default NoMatchRoute;
