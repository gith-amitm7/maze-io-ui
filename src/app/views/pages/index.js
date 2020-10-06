import React from "react";
import Fallback from "app/views/components/Fallback";

const DashboardComponent = React.lazy(() =>
  import("app/views/pages/Dashboard")
);

const AccountComponent = React.lazy(() => import("app/views/pages/Account"));

const LoginComponent = React.lazy(() => import("app/views/pages/Login"));

const RegistrationComponent = React.lazy(() =>
  import("app/views/pages/Registration")
);

const PageNotFoundComponent = React.lazy(() => import("app/views/pages/Login"));

export const Dashboard = (props) => (
  <React.Suspense fallback={<Fallback />}>
    <DashboardComponent {...props} />
  </React.Suspense>
);

export const Account = (props) => (
  <React.Suspense fallback={<Fallback />}>
    <AccountComponent {...props} />
  </React.Suspense>
);

export const Login = (props) => (
  <React.Suspense fallback={<Fallback />}>
    <LoginComponent {...props} />
  </React.Suspense>
);

export const Registration = (props) => (
  <React.Suspense fallback={<Fallback />}>
    <RegistrationComponent {...props} />
  </React.Suspense>
);

export const PageNotFound = (props) => (
  <React.Suspense fallback={<Fallback />}>
    <PageNotFoundComponent {...props} />
  </React.Suspense>
);
