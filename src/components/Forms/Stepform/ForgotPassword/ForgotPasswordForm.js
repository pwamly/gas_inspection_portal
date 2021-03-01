import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import ForgotPass from "./ForgotPass";
import ResetPass from "./ResetPass";

function StepForm() {
  const Default = {
    email: "",
    code: "",
    newpass: "",
    confirmpass: "",
  };

  const steps = [{ id: "forgotPassword" }, { id: "resetpassword" }];
  const [formData, setForm] = useForm(Default);
  const { step, navigation } = useStep({ steps, initialStep: 0 });
  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "forgotPassword":
      return <ForgotPass {...props} />;
    case "resetpassword":
      return <ResetPass {...props} />;
  }

  return <div> </div>;
}

export default StepForm;
