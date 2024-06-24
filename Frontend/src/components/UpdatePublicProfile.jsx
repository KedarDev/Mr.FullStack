import React, { useEffect, useState, useRef, useContext } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import NoProfileImage from "../assets/no-profile.png";

import Badge from "./Badge";
import Field from "./Field";
import BigTextField from "./BigTextField";
import Button from "./Button";
import ImageCropper from "./ImageCropper";

import {updatePublicProfileApi} from "../utils/ApiUtils";
import {AppContext} from "../context/applicationContext";
import {convertBase64} from "../utils/Helper";

const UpdatePublicProfile = ({
  bio = "",
  city = "",
  country = "",
  headline = "",
  picture = "",
}) => {
  const formikRef = useRef();
  const imageSelectRef = useRef();

  const [isFetching, setIsFetching] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [uploadImageData, setUploadImageData] = React.useState(undefined);
  const [imageSrc, setImageSrc] = React.useState(NoProfileImage);

  const appContext = useContext(AppContext);
  const token = appContext.getSession();

  useEffect(() => {
    if (picture) {
      setImageSrc(picture);
    }
  }, []);

  useEffect(() => {
    if (imageSrc && imageSrc !== NoProfileImage) {
      formikRef.current.setFieldValue("picture", imageSrc);
    }
  }, [imageSrc]);

  const closeModal = () => {
    setUploadImageData(undefined);
    if (!picture) {
      formikRef.current.setFieldValue("picture", undefined);
    }
    setIsOpen(false);
  };

  const onSelectFile = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const base64 = await convertBase64(file);
      setUploadImageData(base64);
      setIsOpen(true);
    }
  };

  const onFormSubmit = async (values) => {
    console.log(values);
    if (!isFetching) {
      setIsFetching(true);

      const apiResponse = await updatePublicProfileApi(
        token,
        values.bio,
        values.city,
        values.country,
        values.headline,
        values.picture 
      );

      if (apiResponse.status === 1) {
        appContext.setUserData(apiResponse.payLoad);
        formikRef.current.setFieldValue("formMessage", "Public profile saved.");
      } else {
        formikRef.current.setFieldValue("formMessage", apiResponse.payLoad);
      }
      setIsFetching(false);
    }
  };

  const UpdateBasicProfileSchema = Yup.object().shape({
    bio: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    headline: Yup.string().required("Required"),
    picture: Yup.string().required("Required"),
  });

  return (
    // This component allows the user to update there public profile
    // if modalIsopen is True & uploadImageData is present it will render image Cropper
    <>
      {modalIsOpen && uploadImageData && (
        <ImageCropper
          // inside of the imageCropper tag we provide values
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          uploadImageData={uploadImageData}
          setImageSrc={setImageSrc}
        />
      )}
      <Formik
        // Then we have our formik element to handle all of our form logic
        // the formilref is used to access the formik instance from the outside
        innerRef={formikRef}
        // Then we initialiaze the forms values

        initialValues={{
          bio,
          city,
          country,
          headline,
          picture,
          formMessage: undefined,
        }}
        // Validate sceama prop set to the updatebasicprofileSchema
        validationSchema={UpdateBasicProfileSchema}
        // onSubmit function that we wrote eariler is set to onFormSubmit function
        onSubmit={onFormSubmit}
      >
        {({ values }) => (
          <Form className="black-gradient shadow rounded-lg mb-6 p-5">
            <div className="text-white text-lg font-semibold mt-2 mb-7">
              Public Profile
            </div>
            {values.formMessage && (
              // if formMessages is present then we render a badge component
              <div>
                <Badge text={values.formMessage} />
              </div>
            )}

            <div className="flex flex-col mb-10">
              <img
                className="h-36 w-36 bg-white p-2 rounded-full shadow mb-4 mx-auto"
                // imgScr  displays an image with
                src={imageSrc}
              />

              <button
                className="mx-auto px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-800 focus:ring focus:ring-purple-300 focus:ring-opacity-50"
                //onchange is an event that effects onSelectfile fuction when a single file is selected
                onClick={(e) => {
                  // e.preventDefault stops the browser from going back to its defualt settings
                  e.preventDefault();
                  imageSelectRef.current.click();
                }}
              >
                Upload Photo
              </button>

              <input
                // the form has 4 text feild
                type="file"
                accept="image/jpeg"
                onChange={onSelectFile}
                ref={imageSelectRef}
                className="hidden"
              /> 

              <div className="hidden">
                <Field type="text" name="picture" id="picture" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <BigTextField
                  label="Headline"
                  name="headline"
                  id="headline"
                  placeholder="Enter a headline"
                />
              </div>

              <div>
                <BigTextField
                  label="Bio"
                  name="bio"
                  id="bio"
                  placeholder="Enter your bio"
                />
              </div>
              <div>
                <Field
                  label="City"
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Enter your city"
                />
              </div>

              <div>
                <Field
                  label="Country"
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Enter your country"
                />
              </div>
            </div>

            <footer className="flex justify-end mt-8">
              <Button text="Save" fullWidth={false} />
            </footer>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default UpdatePublicProfile;
