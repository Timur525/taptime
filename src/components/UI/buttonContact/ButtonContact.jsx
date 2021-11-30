import React from 'react';
import classes from './ButtonContact.module.css'

const ButtonContact = ({children}) => {
    return (
        <button className={classes.button}>
            {children}
        </button>
    )
};
export default ButtonContact