import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Workout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Workout Page</h1>
        <p>Details about a specific workout.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Workout;
