import React from 'react';
import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {

    const dispatch = useDispatch();
    const count = useSelector(state => state.counter);

    const increment = () => {
        let payload = count + 1
        dispatch({type: 'COUNTER', payload: payload})
    }

    const decrement = () => {
        if (count !== 1) {
            let payload = count - 1;
            dispatch({type: 'COUNTER', payload: payload})
        }
    }
    const valid = (event) => {
        if (event.target.validity.valid) {
            dispatch({type: 'COUNTER', payload: +event.target.value})
        }
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>Кол-во:</div>
            <button className={classes.decrement} onClick={decrement} aria-label="Увеличить на единицу"></button>
            <input className={classes.result} value={count} pattern="[0-9]*" onChange={valid} />
            <button className={classes.increment} onClick={increment} aria-label="Уменьшить на единицу"></button>
        </div>
    )
}

export default Counter;