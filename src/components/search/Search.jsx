import React, { useState } from 'react';
import classes from './Search.module.css';
import Button from '../UI/button/Button';
import { useDispatch } from 'react-redux';


const Search = () => {

    const dispatch = useDispatch();

    const [value, setValue] = useState('');

    const search = () => {
        dispatch({type: 'SEARCH', payload: value})
    }


    return (
        <div className={classes.search}>
            <input 
                className={classes.input} 
                type="text" 
                placeholder="Введите название"
                value={value}
                onChange={event => setValue(event.target.value)} 
            />
            <div className={classes.btn}>
                
                <Button onClick={search}>
                    Поиск
                </Button>
            </div>
        </div>
    )
};
export default Search