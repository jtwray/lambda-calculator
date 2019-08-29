import React from "react";
import {NumberButton} from "./NumberButton.js";
import {numbers} from "../../../data";
//import any components needed

console.log("numbers:", numbers);
//Import your array data to from the provided data file
const Numbers = ({handlesetDisplay}) => {
	// STEP 2 - add the imported data to state
	//

	return (
		<div className="numberscontainer">
			{numbers.map((number, index) => {
				console.log(`key=index${index}number${number}`.toString());
				return (
					<NumberButton
						handlesetDisplay={handlesetDisplay}
						key={`index${index}number${number}`.toString()}
						buttonText={number}
					/>
				);
			})}
		</div>
	);
};

export default Numbers;
// onClick={(buttonText)=>handlesetDisplay(buttonText)}
