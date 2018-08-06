import React from "react";

export default ({ onChange, value, onClick }) => (
	<form>
        <input 
        	onChange={ onChange } 
        	value={ value } 
        	type="text" 
        	placeholder="What do you need todo?"
        />
        <input 
        	type="submit" 
        	value="Add"
        	onClick={ onClick }
        />
    </form>
);