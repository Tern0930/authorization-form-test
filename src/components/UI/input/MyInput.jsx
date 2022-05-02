import React from 'react';
import classes from './MyInput.module.css'

const MyInput = ({children, className=classes.myInput, ...props}) => {
    return (
        <input {...props} className={className}>
            {children}
        </input>
    );
};

export default MyInput;
