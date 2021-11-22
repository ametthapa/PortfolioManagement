import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [usedEmail, setUsedEmail] = useState(false);
  const history = useHistory();

  const validate = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Requiredl"),
    password: Yup.string()
      .required("Required")
      .min(8, "Passwords must be atleast 8 characters"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Password must match"
    ),
  });
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        const userLoggedInUser = window.localStorage.getItem(
          "email",
          values.email
        );
        if (userLoggedInUser === values.email) {
          setUsedEmail(true);
        } else {
          window.localStorage.setItem("loggedIn", "yes");
          window.localStorage.setItem("email", values.email);
          window.localStorage.setItem("name", values.name);
          window.localStorage.setItem("password", values.password);
          history.push("/");
        }
      }}
    >
      <div className="h-full w-2/4 p-10 relative">
        <div className="text-left font-bold text-2xl">Register</div>
        <Form>
          <TextField
            label="Name"
            name="name"
            type="text"
            placeholder="Full Name"
          />
          <TextField
            label="E-mail"
            name="email"
            type="email"
            placeholder="Email"
          />
          {usedEmail && (
            <div className="text-sm text-red-600 ml-2">E-mail already used</div>
          )}
          <TextField
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Repeat Your Password"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold mt-5 py-2 px-4 rounded w-full"
          >
            Sign up
          </button>
        </Form>
        <button className="text-blue-500 hover:text-blue-600 font-semibold text-lg transform hover:scale-125 transition duration-200 ease-in rounded absolute bottom-1">
          <Link to="/signin">Login</Link>
        </button>
      </div>
    </Formik>
  );
};

export default Register;
