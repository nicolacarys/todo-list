import initial from "./initial";

import {
    UPDATE_VALUE,
    UPDATE_FILTER,
    UPDATE_EDIT_STATE,
    UPDATE_EDIT,
    RESET_EDIT_STATE,
    CREATE_TASK,
    ADD_TASK,
    REMOVE_TASK,
    COMPLETE_TASK,
} from "./actions"

const updateValue = (state, { value }) => state.set("value", value);

const updateFilter = (state, { filter }) => state.set("filter", filter);

const updateEditState = (state, { i }) => state.setIn(["tasks", i, "editing"], true);

const updateEdit = (state, { i, value }) => state.setIn(["tasks", i, "task"], value);

const resetEditState = (state, { i }) => state.setIn(["tasks", i, "editing"], false);

const createTask = (state, { task }) => {
    let newID = state.get("tasks") ? state.get("tasks").count() : 0;
    let newTask = state.get("value");

    return {
        id: newID,
        task: newTask,
        completed: false,
        editing: false,
    }
};

const addTask = (state, action) => {
    let task = createTask(state, action);

    return {
        ...state, tasks: {
            ...state.tasks,
                task,
        }
    }
};
// removes the correct item, but it doesn't seem to work with the Item map over "tasks"
const removeTask = (state, { i }) => state.get("tasks").filter((task, index) => index !== i);

const completeTask = (state, { i }) => state.setIn(["tasks", i, "completed"], true);

export default (state = initial, action) => {
    switch (action.type) {
        case UPDATE_VALUE: return updateValue(state, action);
        case UPDATE_FILTER: return updateFilter(state, action);
        case UPDATE_EDIT_STATE: return updateEditState(state, action);
        case UPDATE_EDIT: return updateEdit(state, action);
        case RESET_EDIT_STATE: return resetEditState(state, action);
        case CREATE_TASK: return createTask(state, action);
        case ADD_TASK: return addTask(state, action);
        case REMOVE_TASK: return removeTask(state, action);
        case COMPLETE_TASK: return completeTask(state, action);
        default: return state;
    }
};

