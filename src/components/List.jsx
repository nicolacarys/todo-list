import React from "react";
import Item from "./Item";

export default ({ tasks, editItem, stopEditing, onChange, onSubmit }) => (
	<div>
		{ tasks.map(( item, i ) => ( 
			<Item 
				key={ i } 
				editItem={ () => editItem(i) } 
				editing={ item.get("editing") }
				stopEditing={ () => stopEditing(i) }
				onChange={ (value) => onChange(i, value) }
				value={ item.get("task") }
				onSubmit={ () => onSubmit(i) }
			>{ item.get("task") }
			</Item>
		)) }	
	</div>
);

// updating the state as we're typing
// onChange handler - triggers an action
// action sets the new state (value) via reducer
