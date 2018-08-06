import React from "react";

export default ({ editing, onChange, value, editItem, stopEditing, children, deleteTask }) => (
	<div>
	  <input 
	  	type="checkbox"/>
	  	{ editing ? 
	  		<div>
		  		<input onChange={ (e) => onChange(e.target.value) } value={ value } /> 
				  <button onClick={ stopEditing }>Save</button>
			  </div>
	  	: 
	  		<p onClick={ editItem }>{ children }</p>
	  	}

	  <button onClick={ deleteTask }>Delete</button> 
  </div>
);