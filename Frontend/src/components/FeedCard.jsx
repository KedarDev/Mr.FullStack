import React, { useState, useEffect, useContext, useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Moment from "react-moment";

import { AppContext } from "../context/applicationContext";

import { addFeedMetaDataApi } from "../utils/ApiUtils";

const FeedCard = ({
  feedId,
  picture,
  content,
  createdOn,
  username,
  firstName,
  lastName,
  profilePicture,
  feedMetaData = [],
}) => {
  const formikRef = useRef();

  const appContext = useContext(AppContext);

  // get the token from cookies
  const token = appContext.getSession();

  // get the UserData from the appContext
  const userData = appContext.getUserData();

  const [isFetching, setIsFetching] = useState(false);
  const [noOfLikes, setNoOfLikes] = useState(0);
  const [userLiked, setUserLiked] = useState(false);
  const [comments, setComments] = useState([]);
 const [loadOnDelete, setLoadOnDelete] = useState();
  useEffect(() => {
    // declare an empty array to store all the comments
    const commentsData = [];

    // set the number of likes count to 0
    let likesCount = 0;

    for (const metaData of feedMetaData) {
      const { isLike, createdOn, comment, user } = metaData;
      if (isLike) {
        likesCount++;
        if (!userLiked && userData.userId === user.userId) {
          setUserLiked(true);
        }
      } else {
        commentsData.push({
          cComment: comment,
          cCreatedOn: createdOn,
          cFirstName: user.firstName,
          cLastName: user.lastName,
          cPicture: user.profile.picture,
        });
      }
    }

    setComments(commentsData);
    setNoOfLikes(likesCount);
  }, [feedMetaData]);

  const CommentCard = ({
    cFirstName,
    cLastName,
    cPicture,
    cComment,
    cCreatedOn,
  }) => (
    <div className="text-black p-4 antialiased flex">
      <img className="rounded-full h-8 w-8 mr-2 mt-1 " src={cPicture} />
      <div>
        <div className="bg-gray-100 rounded-lg px-4 pt-2 pb-2.5">
          <div className="font-semibold text-sm leading-relaxed">
            {cFirstName} {cLastName}
          </div>
          <div className="text-xs leading-snug md:leading-normal">
            {cComment}
          </div>
        </div>
        <div className="text-xs  mt-0.5 text-gray-500">
          {cCreatedOn !== "now" ? (
            <Moment format="LLL">{cCreatedOn}</Moment>
          ) : (
            "now"
          )}
        </div>
      </div>
    </div>
  );

  const addFeedMetaData = async (isLike, comment = "") => {
    if (!isFetching) {
      setIsFetching(true);

      const apiResponse = await addFeedMetaDataApi(
        token,
        feedId,
        isLike,
        comment
      );
      if (apiResponse.status === 1) {
        if (comment) {
          formikRef.current.resetForm();
          const commentsData = comments;
          commentsData.push({
            cComment: comment,
            cCreatedOn: "now",
            cFirstName: userData.firstName,
            cLastName: userData.lastName,
            cPicture: userData.profile.picture,
          });
          setComments(commentsData);
        } else {
          setNoOfLikes(noOfLikes + 1);
          setUserLiked(true);
        }
      }
      setIsFetching(false);
    }
  };

  const addLike = () => {
    if (!userLiked) {
      addFeedMetaData(true);
    }
  };

  const addComment = async (values) => {
    addFeedMetaData(false, values.comment);
  };

  const AddCommentSchema = Yup.object().shape({
    comment: Yup.string().required("Required"),
  });

  return (
    <div className=" shadow rounded-lg mb-5">
      <div className=" black-gradient flex w-full border- border-white">
        <div className="flex flex-row w-full py-2">
          {/* {#CardHeader Section} */}
          <div className="flex flex-row px-2 py-3 mx-3">
            <img
              className="w-12 h-12 object-cover rounded-full shadow cursor-pointer"
              alt="User avatar"
              src={profilePicture}
            />
            <div className="flex flex-col mb-2 ml-4 mt-1">
              <div className="text-white text-sm font-semibold">
                {firstName} {lastName}
              </div>
              <div className="flex w-full mt-1">
                <div className="text-red-800 font-base text-xs mr-1 cursor-pointer">
                  @{username}
                </div>
                <div className="text-white font-thin text-xs">
                  • <Moment format="LLL">{createdOn}</Moment>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {#DeleteFeedButton Section} */}
      {/* {loadOnDelete && (
          <div
            className="flex flex-col justify-center m-5"
            onClick={deleteFeed}
          >
            <span className="transition ease-out duration-300 hover:bg-gray-50 bg-gray-100 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer">
              <svg
                className="h-4 w-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"
                />
              </svg>
            </span>
          </div>
)} */}
      <div className="border-b border-gray"></div>
      {/* {#CardBody Section} */}
      <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
        <img className="rounded w-full" src={picture} />
      </div>

      <div className="text-white text-sm mb-6 mx-3 px-2">{content}</div>

      <div className=" bg-black shadow-inner flex w-full border-t border-gray-100">
        {/* {#LikeAndCommentCount Section} */}
        <div className="mt-3 mx-5 flex flex-row text-xs" onClick={addLike}>
          <span className="transition ease-out duration-300 hover:bg-gray-50 bg-black h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer">
            <svg
              className={`h-4 w-4 ${
                userLiked ? "text-red-500" : "text-white"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
              ></path>
            </svg>
          </span>
        </div>
        <div className="mt-3 mx-5 w-full flex justify-end text-xs">
          <div className="flex text-red-600 rounded-md mb-2 mr-4 items-center">
            Likes:{" "}
            <div className="ml-1 text-red-600 text-ms"> {noOfLikes}</div>
          </div>
          <div className="flex text-red-600 font-normal rounded-md mb-2 mr-4 items-center">
            Comments:
            <div className="ml-1 text-red-600 text-ms"> {comments.length}</div>
          </div>
        </div>
      </div>
      {/* {#Comments Section} */}
      <div key={comments}>
        {comments.map(
          (
            { cFirstName, cLastName, cPicture, cComment, cCreatedOn },
            index
          ) => (
            <CommentCard
              key={index}
              cFirstName={cFirstName}
              cLastName={cLastName}
              cPicture={cPicture}
              cComment={cComment}
              cCreatedOn={cCreatedOn}
            />
          )
        )}
      </div>
      {/* {#AddCommentForm Section} */}
      <Formik
        innerRef={formikRef}
        initialValues={{
          comment: "",
        }}
        validationSchema={AddCommentSchema}
        onSubmit={addComment}
      >
        {() => (
          <Form>
            <div className="relative flex items-center self-center w-full max-w-l p-4 overflow-hidden text-white focus-within:text-black">
              <span className="absolute inset-y-0 right-0 flex items-center pr-6">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-none hover:text-red-800"
                >
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
              </span>
              <Field
                id="comment"
                name="comment"
                type="search"
                className="w-full py-2 pl-4 pr-10 text-sm bg-[#808080] border border-transparent appearance-none rounded-tg placeholder-black focus:bg-white focus:outline-none focus:border-red-600 focus:text-gray-900 focus:shadow-outline-blue custom-br-25"
                placeholder="Post a comment..."
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FeedCard;