import React from "react";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";

const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 chars or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 chars or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Must be at least 6 chars")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
          <Form>
            <TextField label="First name" name="firstName" type="text" />
            <TextField label="Last name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <button className="btn btn-dark mt-3 " type="submit">
              Register
            </button>
            <button type="reset" className="btn btn-danger ml-3 mt-3">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Signup;
