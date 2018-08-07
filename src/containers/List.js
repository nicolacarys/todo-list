import { connect } from "react-redux";

import List from "../components/List";

import { 
	updateEditState, 
	updateEdit,
	resetEditState,
	removeTask,
	completeTask,
} from "../data/actions";

const mapStateToProps = (state, i) => {

	let tasksRaw = state.get("tasks");
	let tasksFiltered = [];
	
	switch(state.get("filter")) {
		case 1:
			tasksFiltered = tasksRaw.filter(task => task.get("completed") && !task.get("deleted"));
			break;
		case 2: 
			tasksFiltered = tasksRaw.filter(task => !task.get("completed") && !task.get("deleted"));
			break;
		case 3: 
			tasksFiltered = tasksRaw.filter(task => task.get("deleted"));
			break;
		default: 
			tasksFiltered = tasksRaw;
	}

	return {
		tasks: tasksFiltered,
	}
};

const mapDispatchToProps = (dispatch) => ({
	editItem: (i) => dispatch(updateEditState(i)),
	onChange: (i, value) => dispatch(updateEdit(i, value)),
	stopEditing: (i) => dispatch(resetEditState(i)),
	deleteTask: (i) => dispatch(removeTask(i)),
	completeTask: (i) => dispatch(completeTask(i)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);