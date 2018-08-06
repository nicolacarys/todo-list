import { fromJS } from "immutable";
import axios from "../axios";

import {
    addTask,
    removeTask,
} from "./state";

// // fetch all of the article titles
// export const fetchArticleTitles = () => (dispatch, getState) => {

//     // only fetch if they've not already loaded
//     if (!getState().get("loaded")) {
//         axios.get("/articles").then(response => {
//             dispatch(setTitles(fromJS(response.data)));
//         });
//     }
// };

// // fetch a specific article
// export const fetchArticle = (id) => (dispatch, getState) => {

//     // only load if it doesn't already exist
//     if (!getState().getIn(["articles", id])) {
//         axios.get("/articles/" + id).then(response => {
//             dispatch(addArticle(fromJS(response.data)));
//         });
//     }
// };

// create a new task
export const postTask = (task) => (dispatch, getState) => {
    let value = getState().get("value");

    axios.post("/tasks", {
        task: value,
    }).then(response => {
        dispatch(addTask(fromJS(response.data)));
    });
};

// delete a task
export const deleteTask = id => (dispatch) => {
	axios.delete("/tasks/" + id).then(response => {
		dispatch(removeTask(fromJS(response.data)));
	});
};





