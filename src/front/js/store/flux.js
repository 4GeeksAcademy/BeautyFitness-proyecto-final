import Swal from 'sweetalert2';


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			user: null,
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
			
			// Función para cargar los niveles de experiencia desde el backend
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
						'Authorization': `Bearer ${token}`
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
