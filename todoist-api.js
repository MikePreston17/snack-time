import { TodoistApi } from "@doist/todoist-api-typescript";
const doist_key = import.meta.env.VITE_TODOIST_API_KEY;
console.log("doist_key :>> ", doist_key);
const api = new TodoistApi(doist_key);

// api
//   .getProjects()
//   .then((projects) => console.log(projects))
//   .catch((error) => console.log(error));
