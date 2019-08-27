import React from "react";
import {specials} from "../../../data";
import {SpecialButton} from "./SpecialButton";

export const Specials = ({handlesetDisplay, display}) => {
	// STEP 2 - add the imported data to state
	// const [specialState,setSpecialState]=useState(specials)

	return (
		<div className="specialscontainer">
			{specials.map((special, i) => {
				return (
					<SpecialButton
						key={`${special}${special}${i}`}
						buttonText={special}
						display={display}
						handlesetDisplay={handlesetDisplay}
					/>
				);
			})}
		</div>
	);
};
