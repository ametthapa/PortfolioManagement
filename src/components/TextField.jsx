import { ErrorMessage, useField } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="pt-4">
      <input
        className={`p-1 border w-full shadow focus:outline-white ${
          meta.touched && meta.error && "is-invalid"
        } `}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage
        name={field.name}
        component="div"
        className="text-red-400 text-sm font-semibold"
      />
    </div>
  );
};

export default TextField;
