import React from "react";

export default function Profile({ id, name, username, email }) {
  return (
    <div>
      name:{name} <br />
      username:{username} <br />
      email:{email}
    </div>
  );
}
