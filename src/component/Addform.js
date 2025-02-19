import { useFormik } from "formik";
import React from "react";
import { signUpSchema } from "./schemas/Main";
import { useDispatch } from "react-redux";
import { addItem } from "./Slice/Datamanagement";

const initialValues = {
  title: "",
  address: "",
  information: "",
  image: "",
};

const Addform = ({ visible }) => {
  const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log("values", values);
        alert("you clicked submit button");
        visible();
        action.resetForm();
        dispatch(addItem(values));
      },
    });

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div className="Add-element">
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:-</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="here,enter title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.title && touched.title ? (
              <>
                <p>{errors.value}</p>
              </>
            ) : (
              ""
            )}
            <br />
            <label htmlFor="address">Adress:-</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="here,enter address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.address && touched.address ? (
              <>
                <p>{errors.address}</p>
              </>
            ) : (
              ""
            )}
            <br />
            <label hrmlfor="information">Information:-</label>
            <input
              type="text"
              id="information"
              name="information"
              placeholder="here,enter information"
              value={values.information}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.information && touched.information ? (
              <>
                <p>{errors.information}</p>
              </>
            ) : (
              ""
            )}
            <br />
            <label htmlFor="image">Image:-</label>
            <input
              type="text"
              id="image"
              name="image"
              placeholder="here,enter image"
              value={values.image}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <br />
            {errors.image && touched.image ? (
              <>
                <p>{errors.image}</p>
              </>
            ) : (
              ""
            )}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Addform;
