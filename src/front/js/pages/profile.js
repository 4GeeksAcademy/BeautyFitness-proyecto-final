import React from "react";
import "../../styles/profile.css";
import { ProfileCard } from "../component/ProfileCard";
const Profile = () => {
  return (
    <main className="profile-container">
     <div className="center">
        <h1 className="mt-5 center">Profile</h1>
        <h3 className="mt-5"></h3>
        <ProfileCard />
        
      
        </div>
        </main>
    
  );
};

export default Profile;
