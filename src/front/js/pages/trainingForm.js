// import React, { useState } from "react";
// import { useContext } from "react";
// import { Context } from "../store/appContext";

// const TrainingForm = () => {
//     const { actions } = useContext(Context);
//     const [selectedDays, setSelectedDays] = useState([]);

//     const handleDayChange = (event) => {
//         const day = event.target.value;
//         setSelectedDays((prevDays) =>
//             prevDays.includes(day)
//                 ? prevDays.filter((d) => d !== day)
//                 : [...prevDays, day]
//         );
//     };

//     const submitDays = async () => {
//         try {
//             await fetch("https://didactic-winner-x5rrg7q5wjxjhpj44-3001.app.github.dev/api/recommend_routine", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": `Bearer ${localStorage.getItem("token")}`
//                 },
//                 body: JSON.stringify({ days: selectedDays })
//             });
//             // Handle response
//         } catch (error) {
//             console.error("Error recommending routine:", error);
//         }
//     };

//     return (
//         <div>
//             <h2>Select Training Days</h2>
//             {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
//                 <label key={day}>
//                     <input
//                         type="checkbox"
//                         value={day}
//                         checked={selectedDays.includes(day)}
//                         onChange={handleDayChange}
//                     />
//                     {day}
//                 </label>
//             ))}
//             <button onClick={submitDays}>Submit</button>
//         </div>
//     );
// };

// export default TrainingForm;
