import React, { useContext } from "react";
import NoProfileImage from "../assets/no-profile.png";
import { AppContext } from "../context/applicationContext";

const MyProfile = () => {

  //names spacing so that child component can access the AppContext using useContext hook
  const appContext = useContext(AppContext);

  const userData = appContext.getUserData();


  return (

      <aside className="">
      <div className="bg-white shadow rounded-lg p-10">
        <div className="flex flex-col gap-1 text-center items-center">
          <img
            className="h-32 w-32 bg-white p-2 rounded-full shadow mb-4"
            src={userData.profile.picture || NoProfileImage}
            alt=""
          />
          <p className="font-semibold">
            {userData.firstName} {userData.lastName}
          </p>

          {userData.profile.headline && (
            <div className="text-sm leading-normal text-black-400 flex justify-center items-center">
              {userData.profile.headline}
            </div>
          )}

          <div className="text-xs leading-normal text-gray-400 flex justify-center items-center">
            <svg
              viewBox="0 0 24 24"
              className="mr-1 text-purple-600"
              width="16"
              height="16"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            {userData.profile.city}, {userData.profile.country}
          </div>
        </div>
      </div>

      <div className="bg-white shadow mt-6  rounded-lg p-6">
        <h3 className="text-purple-600 text-sm font-semibold mb-4">Bio</h3>

        <div className="text-gray-500 text-sm mb-6">{userData.profile.bio}</div>
      </div>
    </aside>
  );
};

export default MyProfile;