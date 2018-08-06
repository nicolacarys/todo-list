import React from "react";

export default ({ editing, onChange, value, editItem, stopEditing, children, deleteTask, completeTask, completed }) => (
	<div>
	  <input 
	  	type="checkbox" 
	  	onClick={ completeTask }
  	/>
	  	
	  	{ editing ? 
	  		<div>
		  		<input onChange={ (e) => onChange(e.target.value) } value={ value } /> 
				  <button onClick={ stopEditing }>Save</button>
			  </div>
	  	: 
	  		<p className={ completed ? "completed" : "active" } onClick={ editItem }>{ children }</p>
	  	}

	  <button onClick={ deleteTask }>Delete</button> 
  </div>
);