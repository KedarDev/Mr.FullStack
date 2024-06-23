import React, { useEffect, useRef, useState, useContext } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Badge from "./Badge";
import Field from "./Field";
import AddFeedField from "./AddFeedField";
import ImageCropper from "./ImageCropper";

import { addFeedApi } from "../utils/ApiUtils";
import { AppContext } from "../context/applicationContext";
import { convertBase64 } from "../utils/Helper";

const AddFeed = () => {

  const formikRef = useRef();
const imageSelectRef = useRef();

const [isFetching, setIsFetching] = useState(false);
const [modalIsOpen, setIsOpen] = React.useState(false);
const [uploadImageData, setUploadImageData] = React.useState(undefined);
const [imageSrc, setImageSrc] = React.useState(undefined);

const appContext = useContext(AppContext);
const token = appContext.getSession();

useEffect(() => {
  if (imageSrc) {
    formikRef.current.setFieldValue("picture", imageSrc);
  }
}, [imageSrc]);

const closeModal = () => {
  setUploadImageData(undefined);
  formikRef.current.setFieldValue("picture", undefined);
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

    const apiResponse = await addFeedApi(
      token,
      values.content,
      values.picture
    );

    if (apiResponse.status === 1) {
      formikRef.current.setFieldValue("formMessage", "Feed has been added.");
      formikRef.current.setFieldValue("content", "");
      formikRef.current.setFieldValue("picture", "");
      setUploadImageData(undefined);
      setImageSrc(undefined);
    } else {
      formikRef.current.setFieldValue("formMessage", apiResponse.payLoad);
    }
    setIsFetching(false);
  }
};

const AddFeedSchema = Yup.object().shape({
  content: Yup.string().required("Feed content/image is missing"),
  picture: Yup.string().required("Required"),
});

  return (

      <>
      {modalIsOpen && uploadImageData && (
        <ImageCropper
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          uploadImageData={uploadImageData}
          setImageSrc={setImageSrc}
        />
      )}

      {/* {#AddFeedForm} */}
      <Formik
      innerRef={formikRef}
      initialValues={{
        content: "",
        picture: "",
        formMessage: "",
      }}
      validationSchema={AddFeedSchema}
      onSubmit={onFormSubmit}
    >
      {({ values }) => (
        <Form className="bg-white shadow rounded-lg mb-6 p-4">
          {values.formMessage && (
            <div>
              <Badge text={values.formMessage} />
            </div>
          )}

          {imageSrc && (
            <img
              className="h-36 w-36 bg-white p-1 rounded-md shadow mb-4"
              src={imageSrc}
            />
          )}
          <AddFeedField
            name="content"
            id="content"
            placeholder="Type something..."
          />

          <input
            type="file"
            accept="image/jpeg"
            onChange={onSelectFile}
            ref={imageSelectRef}
            className="hidden"
          />

          <div className="hidden">
            <Field type="text" name="picture" id="picture" />
          </div>

          <footer className="flex justify-between mt-2">
            <div className="flex gap-2">
              <span
                className="flex items-center transition ease-out duration-300 hover:bg-purple-500 hover:text-white bg-purple-100 w-8 h-8 px-2 rounded-full text-purple-400 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  imageSelectRef.current.click();
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="css-i6dzq1"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    ry="2"
                  ></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </span>
            </div>
            <button
              type="submit"
              className="flex items-center py-2 px-4 rounded-lg text-sm bg-purple-600 text-white shadow-lg"
            >
              Send
              <svg
                className="ml-1"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </footer>
        </Form>
      )}
    </Formik>
</>
  );
};

export default AddFeed;