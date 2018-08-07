import React from "react";
import Button from "./Button";

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
	  	: <div>
		  		<p 
		  			className={ completed ? "completed" : "active" } 
		  			onClick={ editItem }>{ children }
	  			</p>
				  <Button deleteTask={ deleteTask } completed={ completed }/> 
	  		</div>
	  	}

  </div>
)