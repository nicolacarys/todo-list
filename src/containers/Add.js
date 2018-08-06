import { connect } from "react-redux";
import { 
	updateValue,
	addTask,
} from "../data/actions";

import Add from "../components/Add";

const mapStateToProps = state => ({
	value: state.get("value"),
});

const mapDispatchToProps = dispatch => ({
	onChange: (e) => dispatch(updateValue(e.target.value)),
	addItem: () => dispatch(addTask()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Add);