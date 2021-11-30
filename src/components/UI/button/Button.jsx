import React from 'react';
import classes from '../buttonNext/ButtonNext.module.css';


const Button = ({onClick, children, gg}) => {

    const rootClasses = [classes.button];

    
    return (
        <button 
            className={rootClasses.join(' ')}
            onClick={onClick}
        > 
            {children}
        </button> 
    )
};
export default Button