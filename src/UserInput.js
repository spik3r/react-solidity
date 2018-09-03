import React from 'react';

const userInput = ( props ) => {
    return (
        <div className="UserInput">
            <input
                type="number"
                onBlur={props.inputEvent}/>
        </div>
    )
};

export default userInput;