import React from "react";

export default ({ onChange, value, addItem }) => (
	<div>
    <input 
    	onChange={ onChange } 
    	value={ value } 
    	type="text" 
    	placeholder="What do you need to do?"
    />
    <button onClick={ addItem }>Add Todo</button>
  </div>
);