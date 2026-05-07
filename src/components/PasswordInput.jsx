// Code PasswordInput Component Here
import React, { useState } from 'react';
function PasswordInput (){

const[password, setPassword] = useState('');
const handleChange = (event) => {
    setPassword(event.target.value);
    console.log("Entering password...");

};
    return(
    
    <input
        type ="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
        />
 
    );
}

export default PasswordInput;