const apiUri = process.env.API_URI;
const apiKey = process.env.API_KEY;

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUri: apiUri,
			techPortUrl: "https://techport.nasa.gov/",
			projects: [],
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
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
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
			},
			getAllProjects: async () => {
				//Get all the projects availables
				const store = getStore();
				try {
					const url = `${store.apiUri}/projects?api_key=${apiKey}`;
					const response = await fetch(url);
					if (response.ok) {
						console.log("response is ok");
						const body = await response.json();
						let filteredProjects = [];
						for (let project of body.projects) {
							const projectYear = project.lastUpdated.split("-");
							if (projectYear[1] > 8 && projectYear[0] >= 2021) {
								filteredProjects.push(project);
							} else {
								continue;
							}
						}
						setStore({
							...store,
							projects: filteredProjects
						});
					}
				} catch (error) {
					throw new Error(`Something happened trying to fetch projects: ${error}`);
				}
			},
			getProject: async id => {
				//Get a specific project by id
				const store = getStore();
				const response = await fetch(`${store.apiUri}/projects/${id}`);
				const project = await response.json();
			}
		}
	};
};

export default getState;
