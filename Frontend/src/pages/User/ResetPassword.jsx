import React, { useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import Field from "../../components/Field";
import Button from "../../components/Button";
import Badge from "../../components/Badge";

import MFLogo from "../../assets/MFLogo.png";

import { resetPasswordApi } from "../../utils/ApiUtils";

const ResetPassword = () => {

  const [searchParams] = useSearchParams();
const verifyToken = searchParams.get("token");
const formikRef = useRef();
const [isFetching, setIsFetching] = useState(false);
  
useEffect(() => {
  document.title = "Reset Password | Feed App";
}, []);

const onFormSubmit = async (values) => {
  
  console.log(values)
    
  if (!isFetching) {
    setIsFetching(true);

    const apiResponse = await resetPasswordApi(
      values.verifyToken,
      values.password
    );

    if (apiResponse.status === 1) {
      formikRef.current.setFieldValue(
        "formMessage",
        "Your password has been reset. Please login to continue."
      );
    } else {
      formikRef.current.setFieldValue("formMessage", apiResponse.payLoad);
    }
    setIsFetching(false);
}

 };

 const ResetPasswordSchema = Yup.object().shape({
  verifyToken: Yup.string().required("Required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Required"),
});

return (
  <div className="bg-white">
  <div className="flex justify-center h-screen">
    <div className="flex items-center w-full mx-auto lg:w-full mt-20 md:mt-0 px-10 md:px-36">
      <div className="flex-1">
        <div className="text-center">
          <Formik
            innerRef={formikRef}
            initialValues={{
              verifyToken,
              password: "",
              formMessage: undefined,
            }}
            validationSchema={ResetPasswordSchema}
            onSubmit={onFormSubmit}
          >
            {({ values }) => (
              <Form>
                {values.formMessage && (
                  <div className="w-full md:w-1/2 mx-auto">
                    <Badge text={values.formMessage} />
                  </div>
                )}
                <img src={MFLogo} width={400} className="mx-auto mb-2" />
                <h2 className="text-4xl font-bold text-center text-gray-700">
                  Reset Password
                </h2>

                <p className="mt-3 text-gray-500 mb-10">
                  Enter a new password below.
                </p>

                <div className="my-5 w-60 mx-auto">
                  <Field
                    name="password"
                    id="password"
                    placeholder=""
                    type="password"
                  />
                </div>
                <div className="my-5 w-60 mx-auto">
                  <Button text="Reset Password" />
                </div>
                <Link
                  to="/user/login"
                  className="text-sm text-gray-400 focus:text-red-600 hover:text-red-600 hover:underline"
                >
                  Back to Login
                </Link>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  </div>
</div>
);
};

export default ResetPassword;