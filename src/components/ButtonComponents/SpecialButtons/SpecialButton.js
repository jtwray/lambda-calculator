import React from "react";

export const SpecialButton = ({buttonText, handlesetDisplay, display}) => {
	

	return (
		<button onClick={() => handlesetDisplay(buttonText)}>
			{buttonText}
		</button>
	);
};
