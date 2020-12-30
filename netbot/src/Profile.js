import React from "react";

export default function Profile({ id, name, username, email }) {
  const zoom = (email) => {
    alert(email);
  };
  return (
    <div>
      name:{name} <br />
      username:{username} <br />
      email:{email}
      <button type="button" onClick={() => zoom(email)}>
        Zoom email
      </button>
    </div>
  );
}
