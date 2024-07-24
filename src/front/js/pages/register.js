import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FormRegister from '../components/FormRegister';

const Register = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Register Page</h1>
        <FormRegister />
      </main>
      <Footer />
    </div>
  );
};

export default Register;