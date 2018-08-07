import React from "react";
import DeletedItem from "./DeletedItem";
import ActiveItem from "./ActiveItem";

export default ({ editing, onChange, value, editItem, stopEditing, children, deleteTask, completeTask, completed, deleted }) => (
	<div className={ deleted ? "archive" : "active" }>

		{ deleted 
		? <DeletedItem children={ children } />
		: <ActiveItem
				completeTask={ completeTask }
				editing={ editing }
				onChange={ onChange }
				value={ value }
				stopEditing={ stopEditing }
				completed={ completed }
				editItem={ editItem }
				children={ children }
				deleteTask={ deleteTask }	
			/>
		}

	</div>
);

