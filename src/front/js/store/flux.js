import Swal from 'sweetalert2';


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
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
			},

			syncTokenFromLocalStorage: () => {
				const token = localStorage.getItem('token')
				if (token && token != "" && token != undefined) setStore({token: token})
			},

			logout: () => {
				localStorage.removeItem('token')
				setStore({token: null})
			},

			login: async (email, password) => {
				try {
					const response = await fetch("https://friendly-space-pancake-g4xxvjw4qj57fppxr-3001.app.github.dev/api/login",{
						method:"POST",
						headers: {
							"content-Type":"application/json"
						},
						body: JSON.stringify({
							email,
							password
						})
					})
					if(!response.ok){
						throw await response.json()
					}
					const data = await response.json()
					localStorage.setItem('token',data.token)
					setStore({token: data.token})
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

			register: async (name, surname, email, username, password) => {
                try {
                    const response = await fetch("https://friendly-space-pancake-g4xxvjw4qj57fppxr-3001.app.github.dev/api/register", {
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
