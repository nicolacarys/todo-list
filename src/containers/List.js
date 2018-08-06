import { connect } from "react-redux";

import List from "../components/List";

import { 
	updateEditState, 
	updateEdit,
	resetEditState,
} from "../data/actions/state";

import { deleteTask } from "../data/actions/api";

const mapStateToProps = state => {

	let tasksRaw = state.get("tasks");
	let tasksFiltered = [];
	
	switch(state.get("filter")) {
		case 1:
			tasksFiltered = tasksRaw.filter(task => task.get("completed"));
			break;
		case 2: 
			tasksFiltered = tasksRaw.filter(task => !task.get("completed"));
			break;
		default: 
			tasksFiltered = tasksRaw;
	}

	return {
		tasks: tasksFiltered,		
	}
};

const mapDispatchToProps = (dispatch, { id }) => ({
	editItem: (i) => dispatch(updateEditState(i)),
	onChange: (i, value) => dispatch(updateEdit(i, value)),
	stopEditing: (i) => dispatch(resetEditState(i)),
	onSubmit: () => dispatch(deleteTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);