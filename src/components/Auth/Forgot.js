import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { getCode } from "../../client";
import { postCode } from "../../client";

function Forgot() {
  const [data, setData] = useState(null);
  const [code, setCode] = useState(null);
  const [showcode, setShowcode] = useState(null);

  const email = useRef("");
  const usercode = useRef("");
  const newpassword = useRef("");

  let formdata;

  const handleSubmitf = async (e) => {
    e.preventDefault();
    formdata = { email: email.current.value };
    let responsecode = await getCode(formdata);
    setCode(responsecode.code);
    setShowcode(true);
    setData(email);
  };
  const handleSubmits = async (e) => {
    e.preventDefault();
    formdata = { email: data, newpassword, usercode };
    let responsecode = await postCode(formdata);
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
        <form className="form" action="">
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
        <form className="form" action="">
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

export default Forgot;
