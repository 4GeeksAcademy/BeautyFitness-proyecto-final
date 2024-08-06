import Swal from 'sweetalert2';


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			user: null,
			trainingDays: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			setUser: (user) => setStore({ user }),
            setToken: (token) => setStore({ token }),
            setTrainingDays: (trainingDays) => setStore({ trainingDays }),

			exampleFunction: () => {
				getActions().changeColor(0, "green");
				fetchExperienceLevels();
			},
			

			// Obtener token y usuario de localStorage y actualizar store
			// Obtener token y usuario de localStorage y actualizar store
			syncTokenFromLocalStorage: () => {
				const token = localStorage.getItem("token");
				const user = JSON.parse(localStorage.getItem("user"));
				if (token && token != "" && token != "undefined") setStore({ token: token });
				if (user) setStore({ user: user });
			},
						

			// Acción de inicio de sesión
			login: async (email, password) => {
				try {
					const response = await fetch("https://glorious-carnival-r477p65w5xxwhp5xj-3001.app.github.dev/api/login", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							email,
							password
						})
					});

					if (!response.ok) {
						throw await response.json();
					}

					const data = await response.json();
					localStorage.setItem('token', data.token);
					localStorage.setItem('user', JSON.stringify(data.user.id));
					setStore({ token: data.token, user: data.user });
					return true;
				} catch (error) {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: error.msg,
					});
					console.log(error);
				}
			},
								

			register: async (name, surname, email, username, password) => {
                try {
                    const response = await fetch("https://glorious-carnival-r477p65w5xxwhp5xj-3001.app.github.dev/api/register", {
                        method: "POST",
                        headers: {
                            "content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email,
                            password,
                            name,
                            surname,
                            username
                        })
                    })
                    if (!response.ok) {
                        throw await response.json()
                    }
                    const data = await response.json()
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: data.msg,
                    });
                    return true
                } catch (error) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: error.msg,
                    });
                    console.log(error)
                }
            },

			updateUser: async (updatedUserData) => {
				const store = getStore();
				if (!store.user || !store.token) {
					Swal.fire({
						icon: "error",
						title: "User not logged in",
						text: "Please log in first",
					});
					return;
				}
				
				try {
					const response = await fetch(`https://glorious-carnival-r477p65w5xxwhp5xj-3001.app.github.dev/api/user/${store.user.id}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${store.token}`
						},
						body: JSON.stringify(updatedUserData)
					});
			
					if (!response.ok) {
						throw await response.json();
					}
			
					const data = await response.json();
					Swal.fire({
						icon: "success",
						title: "Success!",
						text: data.msg,
					});
					
					const updatedUser = { ...store.user, ...updatedUserData };
					setStore({ user: updatedUser });
					
					return true;
				} catch (error) {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: error.msg,
					});
					console.log(error);
				}
			},			
			
			logout: () => {
				localStorage.removeItem('token');
				localStorage.removeItem('user');
				setStore({ token: null, user: null });
			},	
			
			// niveles de experiencia desde el backend
			fetchExperienceLevels : async () => {
				const store = getStore()
				if (!store.user || !store.token) {
					Swal.fire({
						icon: "error",
						title: "User not logged in",
						text: "Please log in first",
					});
					return;
				}
				try {
				  const response = await fetch(`https://glorious-carnival-r477p65w5xxwhp5xj-3001.app.github.dev/${store.user.id}`, {
					method:'POST',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${store.token}`
					  }
				  })

				  if (!response.ok) {
					throw new Error('response was not ok');
				  }
				  
				
				  const data = await response.json();
				  setExperienceLevels(data);
				} catch (error) {
				  console.error('Error fetching experience levels:', error);
				}
			  },


			updateExperienceLevel : async (id, levelName, userId) => {
				const store = getStore();
			
				if (!store.user || !store.token) {
					Swal.fire({
						icon: "error",
						title: "User not logged in",
						text: "Please log in first",
					});
					return;
				}
			
				try {
					const response = await fetch(
						`https://glorious-carnival-r477p65w5xxwhp5xj-3001.app.github.dev/experience_levels/${id}`, 
						{
							method: 'PUT',
							headers: {
								'Content-Type': 'application/json',
								'Authorization': `Bearer ${store.token}`,
							},
							body: JSON.stringify({
								level_name: levelName,
								user_id: userId
							})
						}
					);
			
					if (!response.ok) {
						throw new Error('Response was not ok');
					}
			
					const data = await response.json();
					console.log('Experience level updated successfully:', data);
				} catch (error) {
					console.error('Error updating experience level:', error);
				}
			},

		//fetch post training days
			addTrainingDays : async (number_of_days, days) => {
			const store = getStore();
		
			if (!store.user || !store.token) {
				Swal.fire({
					icon: "error",
					title: "User not logged in",
					text: "Please log in first",
				});
				return;
			}
		
			try {
				const response = await fetch(
					`https://glorious-carnival-r477p65w5xxwhp5xj-3001.app.github.dev/api/training-days`, 
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${store.token}`,
						},
						body: JSON.stringify({
							number_of_days: number_of_days,
							days: days
						})
					}
				);
		
				if (!response.ok) {
					const errorData = await response.json();
					throw new Error(errorData.message || 'Response was not ok');
				}
		
				const data = await response.json();
				console.log('Training days added successfully:', data);
			} catch (error) {
				console.error('Error adding training days:', error);
			}
			},
		
			getTrainingDays : async () => {
			const store = getStore();
		
			if (!store.user || !store.token) {
				Swal.fire({
					icon: "error",
					title: "User not logged in",
					text: "Please log in first",
				});
				return;
			}
		
			try {
				const response = await fetch(
					`https://glorious-carnival-r477p65w5xxwhp5xj-3001.app.github.dev/training-days`, 
					{
						method: 'GET',
						headers: {
							'Authorization': `Bearer ${store.token}`,
						}
					}
				);
		
				if (!response.ok) {
					const errorData = await response.json();
					throw new Error(errorData.message || 'Response was not ok');
				}
		
				const data = await response.json();
				settrainingdays(data)
				console.log('Training days fetched successfully:', data);
				
			} catch (error) {
				console.error('Error fetching training days:', error);
			}
			},

			getWorkouts : async () => {
			try {
				const response = await fetch('https://glorious-carnival-r477p65w5xxwhp5xj-3001.app.github.dev/workouts');
				if (!response.ok) {
					throw new Error('Network response was not ok ' + response.statusText);
				}
				const data = await response.json();
				console.log(data.workouts); 
			} catch (error) {
				console.error('There has been a problem :', error);
			}
			
		
		
			},

			updateWorkout : async (id, workoutData) => {
			
				try {
					const response = await fetch(`https://glorious-carnival-r477p65w5xxwhp5xj-3001.app.github.dev/workouts/${id}`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(workoutData)
					});
					if (!response.ok) {
						throw new Error('Network response was not ok ' + response.statusText);
					}
					const data = await response.json();
					console.log(data.message); // Mensaje de éxito
				} catch (error) {
					console.error('There has been a problem :', error);
				}
			
				},

			deleteWorkout : async (id) => {
			try {
				const response = await fetch(`https://glorious-carnival-r477p65w5xxwhp5xj-3001.app.github.dev/workouts/${id}`, {
					method: 'DELETE'
				});
				if (!response.ok) {
					throw new Error('Network response was not ok ' + response.statusText);
				}
				const data = await response.json();
				console.log(data.message); // Mensaje de éxito
			} catch (error) {
				console.error('There has been a problem :', error);
			}
			
			},

			
			getMessage: async () => {
				const store = getStore();
				try {
					const resp = await fetch(`${process.env.BACKEND_URL}/api/hello`, {
						headers: {
							Authorization: `Bearer ${store.token}`
						}
					});
					const data = await resp.json();
					setStore({ message: data.message });
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},


			

			// getMessage: async () => {
			// 	try{
			// 		// fetching data from the backend
			// 		const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
			// 		const data = await resp.json()
			// 		setStore({ message: data.message })
			// 		// don't forget to return something, that is how the async resolves
			// 		return data;
			// 	}catch(error){
			// 		console.log("Error loading message from backend", error)
			// 	}
			// },
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
