import React, { useState, useEffect } from 'react';


export const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState('');
  const [userId, setUserId] = useState('');
  const levels = ['beginner', 'intermediate', 'advanced'];



  const handleSubmit = (e) => {
    e.preventDefault();
    

    const data = {

      user_id: userId,
      level_name: selectedExperience
    }
    console.log(data);
  };

  return (
    <div className='bg-dark'>
      <h1>Select Your Experience Level</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="experienceLevel">Experience Level:</label>
        <select
          id="experienceLevel"
          value={selectedExperience}
          onChange={(e) => setSelectedExperience(e.target.value)}
        >
          <option value=''>Select an experience level</option>
          {levels?.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="userId">User ID:</label>
        <input
          type="number"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>


  );



};
