import React from "react";
import "../../styles/profile.css";

import { ProfileSuscription } from "../component/ProfileSuscription";
const SuscriptionInfo = () => {
  return (
    <main className="profile-container">
     <div className="center">
        <h1 className="mt-5 center">Suscription Information</h1>
        <h3 className="mt-5"></h3>
        <ProfileSuscription />
        
      
        </div>
        </main>
    
  );
};

export default SuscriptionInfo;
