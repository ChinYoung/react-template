import styled from 'styled-components';

export const Button = styled.button`
	font-family: sans-serif;
	font-size: 1rem;
	line-height: 1.25;
	color: black;
	min-width: 2.5rem;
	padding: 0.5rem;
	border: 2px solid black;
	margin: 0.5rem;
	background: white;
	border-radius: 0.125rem;
	box-shadow: none;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover {
		color: white;
		background: black;
	}
`;
