import TextField from "./TextField";
import { Formik, Form } from "formik";

const Insert = () => {
  return (
    <div className=" h-screen p-10">
      <Formik>
        <div className="w-2/4">
          <div className="text-left font-bold text-2xl">Add Stocks</div>
          <Form>
            <div className="flex justify-center items-center w-1/1">
              <label className="">StockName : </label>
              <TextField
                className=""
                label="Name"
                name="name"
                type="text"
                placeholder="Full Name"
              />
            </div>

            <TextField
              label="E-mail"
              name="email"
              type="email"
              placeholder="Email"
            />

            <TextField
              label="Mobile Number"
              name="number"
              type="number"
              placeholder="Mobile Number"
            />
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
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold mt-5 py-2 px-4 rounded w-full"
            >
              Insert
            </button>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default Insert;
