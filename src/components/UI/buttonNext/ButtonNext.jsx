import React from 'react';
import classes from './ButtonNext.module.css';
import { Link } from 'react-router-dom';

const ButtonNext = ({children, path, onClick}) => {
    return (
        <Link 
            className={classes.button} 
            to={path}
            onClick={onClick}
        >
            {children}
        </Link>  
            
        
    )
};
export default ButtonNext