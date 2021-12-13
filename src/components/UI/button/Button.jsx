import React from 'react';
import classes from '../buttonNext/ButtonNext.module.css';


const Button = ({onClick, children, active}) => {
    const style = [classes.button]
    if (active){
        style.push(classes.active);
    }
    return (
        <button 
            className={style.join(' ')}
            onClick={onClick}
        > 
            {children}
        </button> 
    )
};
export default Button