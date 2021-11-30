import React, { useState } from 'react';
import classes from './CalcForm.module.css';
import product from '../../../img/product.jpg'
import Counter from '../../UI/counter/Counter';
import Button from '../../UI/button/Button';
import { useDispatch, useSelector } from 'react-redux';

const CalcForm = ( {filterProduct} ) => {

    const dispatch = useDispatch();
    const volume = useSelector(state => state.volume);
    const netWeight = useSelector(state => state.netWeight);
    const grossWeight = useSelector(state => state.grossWeight);
    const cost = useSelector(state => state.cost);
    const key = useSelector(state => state.key);
    const furnitureList = useSelector(state => state.furnitureList);
    const productName = useSelector(state => state.productName);

    const clear = event => {
        event.preventDefault();
        dispatch({type: 'COUNTER', payload: 0});
        dispatch({type: 'VOLUME', payload: ''});
        dispatch({type: 'NET_WEIGHT', payload: ''});
        dispatch({type: 'GROSS_WEIGHT', payload: ''});
        dispatch({type: 'COST', payload: ''});
    }

    const add = event => {
        event.preventDefault();
        
    }

    
    return (
        <div>
            <div className={classes.product}>
                <div className={classes.product_img}>
                    <img src={product} alt={productName} />
                </div>
                    <p className={classes.product_text}>
                        {productName}
                    </p>
            </div>
                <Counter />
                <div className={classes.input_wrapper}>
                    <input 
                        className={classes.input} 
                        placeholder="Общий объем, м3" 
                        type="text"
                        value={volume}
                        onChange={event => dispatch({type: 'VOLUME', payload: event.target.value})}
                    />
                    <input 
                        className={classes.input} 
                        placeholder="Общая масса нетто, кг" 
                        type="text" 
                        value={netWeight}
                        onChange={event => dispatch({type: 'NET_WEIGHT', payload: event.target.value})}
                    />
                    <input 
                        className={classes.input} 
                        placeholder="Общая масса брутто, кг" 
                        type="text" 
                        value={grossWeight}
                        onChange={event => dispatch({type: 'GROSS_WEIGHT', payload: event.target.value})}
                    />
                    <input 
                        className={classes.input} 
                        placeholder="Стоимость одной единицы" 
                        type="text" 
                        value={cost}
                        onChange={event => dispatch({type: 'COST', payload: event.target.value})}
                    />
                </div>
                <div className={classes.btn_wrapper}>
                    <div className={classes.btn}>
                        <Button onClick={clear}>
                            Сбросить
                        </Button>
                    </div>
                    <div className={classes.btn}>
                        <Button onClick={add}>
                            Добавить
                        </Button>
                    </div>
                    
                </div>
        </div>
    )
};
export default CalcForm