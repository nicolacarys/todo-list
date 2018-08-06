export const UPDATE_VALUE = Symbol("UPDATE_VALUE");

export const updateValue = (value) => ({
    type: UPDATE_VALUE,
    value,
});

export const UPDATE_FILTER = Symbol("UPDATE_FILTER");

export const updateFilter = (filter) => ({
    type: UPDATE_FILTER,
    filter,
});

export const UPDATE_EDIT_STATE = Symbol("UPDATE_EDIT_STATE");

export const updateEditState = (i) => ({
	type: UPDATE_EDIT_STATE,
	i,
});

export const UPDATE_EDIT = Symbol("UPDATE_EDIT");

export const updateEdit = (i, value) => ({
	type: UPDATE_EDIT,
	i,
	value,
});

export const RESET_EDIT_STATE = Symbol("RESET_EDIT_STATE");

export const resetEditState = (i) => ({
	type: RESET_EDIT_STATE,
	i,
});

export const CREATE_TASK = Symbol("CREATE_TASK");

export const createTask = (task) => ({
	type: CREATE_TASK,
	task,
});

export const ADD_TASK = Symbol("ADD_TASK");

export const addTask = (task) => ({
	type: ADD_TASK,
	task,
});

export const REMOVE_TASK = Symbol("REMOVE_TASK");

export const removeTask = (i) => ({
	type: REMOVE_TASK,
	i,
});

export const COMPLETE_TASK = Symbol("COMPLETE_TASK");

export const completeTask = (i) => ({
	type: COMPLETE_TASK,
	i,
});