import React from "react";

export default ({ onClick }) => (
	<ul>
        <li onClick={ () => onClick(0) }>All</li>
        <li onClick={ () => onClick(1) }>Completed</li>
        <li onClick={ () => onClick(2) }>To Do</li>
    </ul>
);