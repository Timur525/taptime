import React from 'react';
import classes from './Hint.module.css'

const Hint = ({children}) => {
    return (
        <div className={classes.hint}>
            {children}
        </div>
    )
};
export default Hint