const apiUri = process.env.API_URI;
const apiKey = process.env.API_KEY;

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUri: apiUri,
			techPortUrl: "https://techport.nasa.gov/",
			projects: [],
			mostViewedProjectsId: [93128, 14656, 32946, 14653, 13075, 94282, 93175, 95868, 94431, 94206],
			mostViewedProjects: []
		},
		actions: {
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
							//Make sure that online keep 20 projects in store
							const amountOfProjects = 40;
							if (filteredProjects.length >= amountOfProjects) continue;
							const projectLastUpdated = project.lastUpdated.split("-");
							if (projectLastUpdated[1] > 8 && projectLastUpdated[0] >= 2021) {
								filteredProjects.push(project);
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
				try {
					const store = getStore();
					const response = await fetch(`${store.apiUri}/projects/${id}?api_key=${apiKey}`);
					if (response.ok) {
						const project = await response.json();
						return project;
					}
				} catch (error) {
					throw new Error(`Something happened trying to fetch project ${id}: ${error}`);
				}
			},
			getMostViewedProjects: async () => {
				const store = getStore();
				const actions = getActions();
				const mostViewedResponses = await Promise.all(
					store.mostViewedProjectsId.map(async projectId => {
						const body = await actions.getProject(projectId);
						const projectInfo = {
							projectId: body.project.projectId,
							title: body.project.title,
							description: body.project.description
						};
						return projectInfo;
					})
				);
				setStore({
					...store,
					mostViewedProjects: mostViewedResponses
				});
			}
		}
	};
};

export default getState;
