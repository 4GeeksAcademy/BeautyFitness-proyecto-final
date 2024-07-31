import React, { useState, useEffect } from 'react';


export const Experience = () => {
  const [experienceLevels, setExperienceLevels] = useState([]);
  // const [formData, setFormData] = useState(['beginner', 'intermediate', 'advanced'])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() =>{

    const fetchExperienceLevels = async () => {
      try {
        
        const response = await get('https://animated-chainsaw-69vv45xwxxvw35jg6-3001.app.github.dev/api/experience_levels')

        const data = await response.json()
        setExperienceLevels(data);
        console.log(data);
      } catch (error) {
        console.log(error, "--> error")
        setError(error)
      }finally{
        setLoading(false)
        console.log(loading)
      }
    };
    fetchExperienceLevels();
    
  }, []);




  return (
    <div>
      <h1>Experience Levels</h1>
      <ul>
        {experienceLevels.map((level, index) => (
          <li key={index}>{level}</li>
        ))}
      </ul>
    </div>


  );



};
