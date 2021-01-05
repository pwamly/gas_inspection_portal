import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isValidUser } from "../client";

export const ProtectRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      render={(props) => {
        if (isValidUser()) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
