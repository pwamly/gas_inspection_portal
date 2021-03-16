import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogged } from "../client";

export const ProtectRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      render={(props) =>
        isLogged() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
};
