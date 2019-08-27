import React, {useState} from "react";
import {operators} from "../../../data";
import {OperatorButton} from "./OperatorButton";

//import any components needed
console.table(`operators:${operators}`, operators);
//Import your array data to from the provided data file

export const Operators = () => {
	// const [operatorState, setOperatorState] = useState(operators);
	// STEP 2 - add the imported data to state
	return (
		<div  className="operatorscontainer">
			{operators.map( ( {value}, i ) => {
				console.log(`value=${value}`)
				return (
					<OperatorButton key={`${value}i${i}${value}`}
						buttonText={value} />
				);
			})}
		</div>
	);
};

// {/* STEP 3 - Use .map() to iterate over your array data and return a button
//  component matching the name on the provided file. Pass
//  it any props needed by the child component*/}
