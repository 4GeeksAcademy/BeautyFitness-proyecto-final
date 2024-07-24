import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FormProfile from '../components/FormProfile';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Profile Page</h1>
        <FormProfile />
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
