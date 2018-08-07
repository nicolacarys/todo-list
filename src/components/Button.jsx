import React from "react";
import styled, { css } from 'styled-components';

const Button = styled.button`
	padding: 5px 15px;
	border: 2px solid red;
	border-radius: 18px;
	font-size: 16px;

	&:hover {
		background-color: red;
		font-weight: 500;
		color: white;
	}

	${ props => props.completed && css `
		background-color: red;
	`}
`;

export default ({ deleteTask }) => (
	<Button onClick={ deleteTask }>Delete</Button>
)