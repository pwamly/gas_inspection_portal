import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isValidUser } from "../client";

const isloged = isValidUser();
export const ProtectRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      render={(props) =>
        isloged ? (
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
