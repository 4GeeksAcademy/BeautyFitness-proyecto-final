import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FormSignIn from '../components/FormSignIn';

const SignIn = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Sign In Page</h1>
        <FormSignIn />
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
