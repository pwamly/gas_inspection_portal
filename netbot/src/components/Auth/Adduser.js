import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { EXIT_ADD_FORM, ADD_USER } from "../../actions";

function Adduser({ data, adduser, dispatch }) {
  const fname = useRef("");
  const lname = useRef("");
  const email = useRef("");
  const phone = useRef("");
  const password = useRef("");

  const hundleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_USER,
      payload: {
        fname: fname.current.value,
        lname: lname.current.value,
        email: email.current.value,
        phone: phone.current.value,
        password: password.current.value,
      },
    });
  };

  console.log(adduser);
  return (
    <div className="form-adduser">
      <h4 className="add-user-title">Add New User</h4>
      <form className="form" action="">
        <input type="text" name="fname" ref={fname} placeholder="First Name" />
        <input type="text" name="lname" ref={lname} placeholder="Last Name" />
        <input type="email" name="email" ref={email} placeholder="Email" />
        <input type="text" name="phone" ref={phone} placeholder="Phone" />
        <input
          type="text"
          name="password"
          ref={password}
          placeholder="Password"
        />
        <button className="btn" onClick={(e) => hundleSubmit(e)}>
          Save
        </button>
        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: EXIT_ADD_FORM });
          }}
        >
          Exit
        </button>
      </form>
    </div>
  );
}
function mapStateToprops(store) {
  const { data, adduser } = store;
  return { ...store, data: data, adduser: adduser };
}

export default connect(mapStateToprops)(Adduser);
