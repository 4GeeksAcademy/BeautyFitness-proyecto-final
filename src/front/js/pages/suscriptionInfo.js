import React from "react";
import { ProfileSuscription } from "../component/ProfileSuscription";
import "../../styles/profileSuscription.css";
// import "../../styles/profile.css";
import "../../styles/suscriptionInfo.css";


const SuscriptionInfo = () => {
  return (
    <main className="profile-container bg-dark">
     <div className="center">
        <h1 className="mt-5 text-center">Subscription Information</h1>
        <h3 className="mt-5"></h3>
        <ProfileSuscription />
              
        </div>
        </main>
    
  );
};

export default SuscriptionInfo;

