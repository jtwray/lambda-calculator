import React, {useState} from "react";
import NumberButton from "./NumberButton.js";
import {numbers} from "../../../data";
//import any components needed

console.log("numbers:", numbers);
//Import your array data to from the provided data file

const Numbers = () => {
	// STEP 2 - add the imported data to state
	// const [numberState, setNumberState] = useState(numbers);

	return (
		<div  className="numberscontainer">
      {numbers.map( ( number, index ) => {
        console.log(`key=index${index}number${number}`.toString())
				return <NumberButton key={`index${index}number${number}`.toString()} buttonText={number} />;
			}) /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
		</div>
	);
};

export default Numbers;
