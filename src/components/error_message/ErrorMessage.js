import React from 'react';
import './ErrorMessage.css';

export const ErrorMessage = ({ message }) => {
	return (
		<div>
			<p>{message}</p>
		</div>
	);
};
