import React, { useState, useRef, useContext } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Badge from "./Badge";
import Field from "./Field";
import Button from "./Button";
import { updateBasicProfileApi } from "../utils/ApiUtils";
import { AppContext } from "../context/applicationContext";



const UpdateBasicProfile = ({
  password = "",
  emailId = "",
  firstName = "",
  lastName = "",
  phone = "",
}) => {

  const formikRef = useRef();

const [isFetching, setIsFetching] = useState(false);

const appContext = useContext(AppContext);
const token = appContext.getSession();

const onFormSubmit = async (values) => {
  if (!isFetching) {
    setIsFetching(true);
  
    const apiResponse = await updateBasicProfileApi(
      token,
      values.password,
      values.emailId,
      values.firstName,
      values.lastName,
      values.phone
    );
  
    if (apiResponse.status === 1) {
      appContext.setUserData(apiResponse.payLoad);
      formikRef.current.setFieldValue("formMessage", "Basic profile saved.");
    } else {
      formikRef.current.setFieldValue("formMessage", apiResponse.payLoad);
    }
    setIsFetching(false);
  }
};

const UpdateBasicProfileSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  phone: Yup.number().required("Required"),
  emailId: Yup.string().email().required("Required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Required"),
});


  return (
       <Formik
    innerRef={formikRef}
    initialValues={{
      firstName,
      lastName,
      phone,
      emailId,
      password,
      formMessage: undefined,
    }}
    validationSchema={UpdateBasicProfileSchema}
    onSubmit={onFormSubmit}
  >
    {({ values }) => (
      <Form className="bg-white shadow rounded-lg mb-6 p-5">
        <div className="text-gray-600 text-lg font-semibold mt-2 mb-7">
          Basic Profile
        </div>

        {values.formMessage && (
          <div>
            <Badge text={values.formMessage} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Field
              label="First Name"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <Field
              label="Last Name"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter your last name"
            />
          </div>

          <div>
            <Field
              label="Email"
              type="text"
              name="emailId"
              id="emailId"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <Field
              label="Password"
              type="password"
              name="password"
              id="password"
              placeholder="Enter current or new password"
            />
          </div>
          <div>
            <Field
              label="Phone"
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone"
            />
          </div>
        </div>

        <footer className="flex justify-end mt-8">
          <Button text="Save" fullWidth={false} />
        </footer>
      </Form>
    )}
  </Formik>
  );
};

export default UpdateBasicProfile;