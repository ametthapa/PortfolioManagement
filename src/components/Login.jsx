import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const history = useHistory();
  const [errorValidation, setErrorValidation] = useState(false);

  const validate = Yup.object({
    email: Yup.string().required("Provide Correct Email"),
    password: Yup.string().required("provide correct password"),
  });
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        remember: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        const previousUser = window.localStorage.getItem("email");
        const userPassword = window.localStorage.getItem("password");

        if (values.email === previousUser && values.password === userPassword) {
          history.push("/");
          window.localStorage.setItem("loggedIn", "yes");
        } else {
          setErrorValidation(true);
        }
      }}
    >
      {(formik) => {
        return (
          <div className="h-full flex flex-col justify-center items-center relative">
            <div className="text-left font-bold text-2xl">Account Login</div>
            <Form>
              <TextField
                label="E-mail"
                name="email"
                type="email"
                placeholder="E-mail"
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
              />
              {errorValidation && (
                <div className="text-sm text-red-600 ml-2">
                  Invalid E-mail or Password
                </div>
              )}
              <input
                onChange={(e) => {
                  formik.setFieldValue("remember", e.target.checked);
                }}
                className="mt-8 mr-3"
                name="remember"
                type="checkbox"
                checked={formik.values.remember}
              />

              <label>Remember me</label>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold mt-5 py-2 px-4 rounded w-full"
              >
                Sign in
              </button>
              {/* <button
                type="button"
                onClick={() => {
                  console.log(formik.values);
                  if (formik.values.email !== "amrit.thapa@gmail.com") {
                    // formik.setFieldTouched("email", true);
                    formik.setFieldError("email", "You are not authorised");
                  }
                }}
              >
                Validate
              </button> */}
            </Form>
            <button className="text-green-500 hover:text-green-600 font-semibold text-lg transform hover:scale-125 transition duration-200 ease-in rounded absolute bottom-0">
              <Link to="/signup">Register</Link>
            </button>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;
