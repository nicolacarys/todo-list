import { connect } from "react-redux";
import { 
	updateValue,
} from "../data/actions/state";

import { postTask } from "../data/actions/api";

import Add from "../components/Add";

const mapStateToProps = state => ({
	value: state.get("value"),
});

const mapDispatchToProps = dispatch => ({
	onChange: (e) => dispatch(updateValue(e.target.value)),
	onClick: () => dispatch(postTask()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Add);