import React from 'react';
import classes from '../buttonNext/ButtonNext.module.css';


const Button = ({onClick, children}) => {
    
    return (
        <button 
            className={classes.button}
            onClick={onClick}
        > 
            {children}
        </button> 
    )
};
export default Button