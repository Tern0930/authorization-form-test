import React from 'react';
import MyInput from "./UI/input/MyInput";

const InputWMessage = ({message='Something is wrong',...props}) => {

    const style = message ? {height: '1em', color: 'red', opacity: '1'} : {height: '1em', opacity: '0'};

    return (
        <div>
            <MyInput {...props}/>
            <p style={style}>
                {message}
            </p>
        </div>
    );
};

export default InputWMessage;
