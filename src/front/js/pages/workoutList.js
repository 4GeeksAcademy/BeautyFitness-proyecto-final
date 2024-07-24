import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WorkoutList = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Workout List Page</h1>
        <p>List of all workouts.</p>
      </main>
      <Footer />
    </div>
  );
};

export default WorkoutList;
