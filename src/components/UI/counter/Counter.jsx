import React from 'react';
import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {


    const dispatch = useDispatch();
    const count = useSelector(state => state.counter)
    const resize = useSelector(state => state.resize)

    const increment = () => {
        let payload = count + 1
        dispatch({type: 'COUNTER', payload: payload})
    }

    const decrement = () => {
        if (count !== 0) {
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
            <button className={classes.decrement} onClick={decrement}></button>
            <input className={classes.result} value={count} pattern="[0-9]*" onChange={valid} />
            <button className={classes.increment} onClick={increment}></button>
        </div>
    )
}

export default Counter;