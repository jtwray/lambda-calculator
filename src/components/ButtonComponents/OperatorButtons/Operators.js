import React from "react";
import {operators} from "../../../data";
import {OperatorButton} from "./OperatorButton";

//import any components needed
//Import your array data to from the provided data file

export const Operators = ({handlesetDisplay, display}) => {
	// const [operatorState, setOperatorState] = useState(operators);
	// STEP 2 - add the imported data to state
	return (
		<div className="operatorscontainer">
			{operators.map(({char}, i) => {
				console.log(`char=${char}`);
				return (
					<OperatorButton
						key={`${char}i${i}${char}`}
						buttonText={char}
						display={display}
						handlesetDisplay={handlesetDisplay}
					/>
				);
			})}
		</div>
	);
};

// {/* STEP 3 - Use .map() to iterate over your array data and return a button
//  component matching the name on the provided file. Pass
//  it any props needed by the child component*/}
