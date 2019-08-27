import React from "react";

export const OperatorButton = ({buttonText, handlesetDisplay,display}) => {
	
	console.log( {buttonText} );
	
	return <button  onClick={ ()=>{handlesetDisplay(buttonText)}} >{buttonText}</button>;
}; 

