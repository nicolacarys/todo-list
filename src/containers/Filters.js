import { connect } from "react-redux";
import { updateFilter } from "../data/actions";
import Filters from "../components/Filters";

const mapDispatchToProps = dispatch => ({
	onClick: (i) => dispatch(updateFilter(i)),
});

export default connect(null, mapDispatchToProps)(Filters);