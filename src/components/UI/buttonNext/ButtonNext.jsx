import React from 'react';
import classes from './ButtonNext.module.css';
import { Link } from 'react-router-dom';

const ButtonNext = ({children}) => {
    return (
        <Link 
            className={classes.button} 
            to="/furniture-selection">
            {children}
        </Link>  
            
        
    )
};
export default ButtonNext