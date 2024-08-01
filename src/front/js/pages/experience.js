import React, { useState, useEffect } from 'react';


export const Experience = () => {
  const [experienceLevels, setExperienceLevels] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState('');
  const [userId, setUserId] = useState('');
  const [level, setLevel] = useState(['beginner', 'intermediate', 'advanced'])



  const handleSubmit = (e) => {
    e.preventDefault();
    setLevel(level).e.preventDefault.value

    const data = {

      user_id: userId,
      level_name: selectedExperience
    }
    console.log(selectedExperience);
  };

  return (
    <div>
      <h1>Select Your Experience Level</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="experienceLevel">Experience Level:</label>
        <select
          id="experienceLevel"
          value={selectedExperience}
          onChange={(e) => setSelectedExperience(e.target.value)}
        >
          <option value=''>Select an experience level</option>
          {level?.map((level) => (
            <option key={level.id} value={level.level_name}>
              {level.level_name}
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
