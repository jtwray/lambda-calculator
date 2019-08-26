import React from "react";

export const SpecialButton = ({buttonText}) => {
  return (
    <div>
      <button>{buttonText}</button>
      {/* Display a button element rendering the data being pa
      ssed down from the parent container on props */}
    </div>
  );
};
    