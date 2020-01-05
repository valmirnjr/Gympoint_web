import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import AuthLayout from "~/pages/_layouts/auth";
import DefaultLayout from "~/pages/_layouts/default";

import store from "~/store/index";

export default function RouteWrapper({
  component: Component,
  isPublic,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && !isPublic) {
    return <Redirect to="/" />;
  }

  if (signed && isPublic) {
    return <Redirect to="/list/students" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPublic: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPublic: false,
};
