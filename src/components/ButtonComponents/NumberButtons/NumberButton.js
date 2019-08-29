import React from "react";

export const NumberButton = ({buttonText, handlesetDisplay}) => (
	<button
		onClick={() => handlesetDisplay(buttonText)}
		className="numberbutton">
		{buttonText}
	</button>
);
