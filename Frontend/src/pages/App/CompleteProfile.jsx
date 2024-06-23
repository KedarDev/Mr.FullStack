import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UpdatePublicProfile from '../../components/UpdatePublicProfile';
import { AppContext } from "../../context/applicationContext";



const CompleteProfile = () => {
  const navigate = useNavigate();
  const appContext = useContext(AppContext);
  const userData = appContext.getUserData();

  useEffect(() => {
    document.title = "Complete your profile | Portfolio APP";
  }, []);

  useEffect(() => {
    if (userData && userData.profile) {
      navigate("/app/dashboard");
    }
  }, [userData]);

  return (
    <main className="grid grid-cols-1 lg:grid-cols-1 gap-6 my-12 md:mx-12 w-2xl container px-2 mx-auto">
      <UpdatePublicProfile />
    </main>
  );
};

export default CompleteProfile;
