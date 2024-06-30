import React, { useEffect, useState, useContext } from "react";
import UpdatePublicProfile from '../../components/UpdatePublicProfile'
import UpdateBasicProfile from '../../components/UpdateBasicProfile'
import { AppContext } from '../../context/applicationContext'
import LoadingIndicator from '../../components/LoadingIndicator'
import { sessionApi } from "../../utils/ApiUtils";



const Profile = () => {


  const appContext = useContext(AppContext);
const token = appContext.getSession();

const [userData, setUserData] = useState(undefined);
  

useEffect(() => {
  document.title = "Profile | Porfolio APP";
  loadProfile();
}, []);

const loadProfile = async () => {
  const apiResponse = await sessionApi(token);
  if (apiResponse.status === 1) {
    setUserData(apiResponse.payLoad);
  }
};

if (!userData) {
  return <LoadingIndicator />;
}

const publicProfile = userData.profile ? userData.profile : undefined;

return (
  <main className="desktop:max-w-[90%]  desktop-s:max-w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-6 my-12 md:mx-12 w-2xl container px-2 mx-auto">
      <div>
        {/* {#UpdaateBasicProfile Component} */}
        <UpdateBasicProfile
   password={userData.password}
   emailId={userData.emailId}
   firstName={userData.firstName}
   lastName={userData.lastName}
   phone={userData.phone}
/>
      </div>
      <div>
        {/* {#UpdatePublicProfile Component} */}
        <UpdatePublicProfile
   bio={publicProfile && publicProfile.bio}
   city={publicProfile && publicProfile.city}
   country={publicProfile && publicProfile.country}
   headline={publicProfile && publicProfile.headline}
   picture={publicProfile && publicProfile.picture}
/>
        </div>
</main>
);
};

export default Profile;