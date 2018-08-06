import React from "react";
import Item from "./Item";

export default ({ tasks, editItem, stopEditing, onChange, deleteTask, completeTask, completed }) => (
	<div>
		{ tasks && tasks.map(( item, i ) => ( 
			<Item 
				key={ i }
				editItem={ () => editItem(i) } 
				editing={ item.get("editing") }
				stopEditing={ () => stopEditing(i) }
				onChange={ (value) => onChange(i, value) }
				value={ item.get("task") }
				deleteTask={ () => deleteTask(i) }
				completeTask={ () => completeTask(i) }
				completed={ item.get("completed") }
			>{ item.get("task") }
			</Item>
		)) }	
	</div>
);
