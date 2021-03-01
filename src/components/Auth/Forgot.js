import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { SAVE_FORM_DATA } from "../../actions";
import { getCode } from "../../client";
import { postCode } from "../../client";

function Forgot({ formdata, dispatch }) {
  const [data, setData] = useState(null);
  const [code, setCode] = useState(null);
  const [showcode, setShowcode] = useState(null);

  const formRef = useRef();

  let email = useRef("");
  let usercode = useRef("");
  let newpassword = useRef("");

  let fdata;

  const handleSubmitf = async (e) => {
    e.preventDefault();
    fdata = { email: email.current.value };
    dispatch({ type: SAVE_FORM_DATA, payload: { ...fdata } });
    let responsecode = await getCode(fdata);
    formRef.current.reset();
    setCode(responsecode.code);
    setShowcode(true);
    setData(formdata);
  };

  const handleSubmits = async (e) => {
    e.preventDefault();
    fdata = {
      newpassword: newpassword.current.value,
      usercode: usercode.current.value,
    };

    fdata.email = formdata.email;
    let responsecode = await postCode(fdata);
    formRef.current.reset();
    // setCode(responsecode.code);
    // setShowcode(true);
    // setData(email);
  };
  // useEffect(() => {
  //   (async function () {
  //     let responsecode = await getCode(formdata);
  //   })();
  // }, [code]);

  return (
    <div className="form-wrapper-forgot">
      {!data ? (
        <form className="form" action="" ref={formRef}>
          <input
            type="email"
            placeholder="phone / email"
            name="email"
            ref={email}
          />
          <button className="btn" onClick={handleSubmitf}>
            Submit
          </button>
        </form>
      ) : code ? (
        <form className="form" action="" ref={formRef}>
          <input
            type="text"
            placeholder="Enter code"
            name="code"
            ref={usercode}
          />
          <input
            type="text"
            placeholder="New password"
            name="newpassword"
            ref={newpassword}
          />
          <button className="btn" onClick={handleSubmits}>
            Submit{" "}
          </button>
          {code
            ? showcode && <h4>Your code is: {code}</h4>
            : showcode && <h4>email is incorrect</h4>}
        </form>
      ) : (
        <form className="form" action="">
          <input type="text" name="code" value={usercode} />
          <input type="text" name="newpassword" value={newpassword} />

          {code
            ? showcode && <h4>Your code is: {code}</h4>
            : showcode && <h4>email is incorrect</h4>}
        </form>
      )}
    </div>
  );
}
function mapStateToprops(store) {
  return { ...store };
}
export default connect(mapStateToprops)(Forgot);
