import initial from "./initial";

import {
    UPDATE_VALUE,
    UPDATE_FILTER,
    UPDATE_EDIT_STATE,
    UPDATE_EDIT,
    RESET_EDIT_STATE,
    ADD_TASK,
    REMOVE_TASK,
} from "./actions/state"

// state functions
const updateValue = (state, { value }) => state.set("value", value);
const updateFilter = (state, { filter }) => state.set("filter", filter);
const updateEditState = (state, { i }) => state.setIn(["tasks", i, "editing"], true);
const updateEdit = (state, { i, value }) => state.setIn(["tasks", i, "task"], value);
const resetEditState = (state, { i }) => state.setIn(["tasks", i, "editing"], false);

// API functions
const addTask = (state, { task }) => state.update("tasks", tasks =>
    tasks.push(task.set("editing", false)));

const removeTask = (state, { id }) => {
    let itemId = state.getIn(["tasks", "id"]);
    let tasks = state.get("tasks");

    return tasks.filter(task => itemId !== id)
};


// find the index of the item with that id and remove it from the array, return a new version of the array state - FILTER?

// Create API actions.
// STYLE!

export default (state = initial, action) => {
    switch (action.type) {
        case UPDATE_VALUE: return updateValue(state, action);
        case UPDATE_FILTER: return updateFilter(state, action);
        case UPDATE_EDIT_STATE: return updateEditState(state, action);
        case UPDATE_EDIT: return updateEdit(state, action);
        case RESET_EDIT_STATE: return resetEditState(state, action);
        case ADD_TASK: return addTask(state, action);
        case REMOVE_TASK: return removeTask(state, action);
        default: return state;
    }
};

