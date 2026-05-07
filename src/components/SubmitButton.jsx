// Code SubmitButton Component Here
import React from "react";

function SubmitButton (){
const handleEnter = () => {
    console.log("Mouse Entering");
};
const handleleave = () => {
    console.log("Mouse Exiting")
};
    return(
        <button
        onMouseEnter={handleEnter}
        onMouseLeave={handleleave}
        >
        Submit Password 
        </button>
    );
}

export default SubmitButton;