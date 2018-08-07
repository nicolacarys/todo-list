import React from "react";

export default ({ completeTask, editing, onChange, value, stopEditing, completed, editItem, children, deleteTask }) => (
	<div>
		<input 
	  	type="checkbox" 
	  	onClick={ completeTask }
	  	/>

	  	{ editing 
  		? <div>
		  		<input onChange={ (e) => onChange(e.target.value) } value={ value } /> 
				  <button onClick={ stopEditing }>Save</button>
			  </div>
	  	: <p className={ completed ? "completed" : "active" } onClick={ editItem }>{ children }</p>
	  	}

	  <button onClick={ deleteTask }>Delete</button> 
  </div>
)