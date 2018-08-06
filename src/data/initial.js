import { Map, List } from "immutable";

export default Map({
	tasks: List([
		Map({
	        id: 0,
	        task: "Write React-Redux App",
	        completed: false,
	        editing: false,
    	}),
    	Map({
	        id: 1,
	        task: "Write API thingies",
	        completed: false,
	        editing: false,
    	}),
    	Map({
	        id: 2,
	        task: "Finish the app and go home",
	        completed: false,
	        editing: false,
    	})
	]),

	value: "",

	filter: 0,
   
});

