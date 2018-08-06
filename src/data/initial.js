import { Map, List } from "immutable";

export default Map({
	tasks: List([
		Map({
	        id: 1,
	        task: "Write React-Redux App",
	        completed: true,
	        editing: false,
    	}),
    	Map({
	        id: 2,
	        task: "Write API thingies",
	        completed: false,
	        editing: false,

    	}),
    	Map({
	        id: 3,
	        task: "Finish the app and go home",
	        completed: false,
	        editing: false,
    	})

	]),
	value: "",
	filter: 0,
   
});

