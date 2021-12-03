import React from 'react';
import Header from '../../components/header/Header';
import classes from './Results.module.css';
import { useSelector, useDispatch } from 'react-redux';
import ButtonNext from '../../components/UI/buttonNext/ButtonNext';

const Results = () => {

    const dispatch = useDispatch();

    const whereFrom = useSelector(state => state.whereFrom);
    const where = useSelector(state => state.where);
    const currency = useSelector(state => state.currency);
    const rate = useSelector(state => state.rate);
    const productName = useSelector(state => state.productName);
    const productImg = useSelector(state => state.productImg);
    const counter = useSelector(state => state.counter);
    const volume = useSelector(state => state.volume);
    const netWeight = useSelector(state => state.netWeight);
    const grossWeight = useSelector(state => state.grossWeight);

    const clear = () => {
        dispatch({type: 'PRODUCT', payload: ''});
        dispatch({type: 'PRODUCT_IMG', payload: ''});
        dispatch({type: 'VIEW_FORM', payload: false});
        dispatch({type: 'PAGE', payload: true});
        dispatch({type: 'COUNTER', payload: 0});
        dispatch({type: 'VOLUME', payload: ''});
        dispatch({type: 'NET_WEIGHT', payload: ''});
        dispatch({type: 'GROSS_WEIGHT', payload: ''});
        dispatch({type: 'COST', payload: ''});
    }

    return (
        <div>
            <Header />
            <div className="container">
                <div className={classes.body}>
                    <img className={classes.img} src={productImg} alt={productName} />
                    <ul>
                        <li><p className={classes.text}>Откуда: {whereFrom}</p></li>
                        <li><p className={classes.text}>Куда: {where}</p></li>
                        <li><p className={classes.text}>Валюта: {currency}</p></li>
                        <li><p className={classes.text}>Курс: {rate}</p></li>
                    </ul>
                    <ul>
                        <li><p className={classes.text}>Название: {productName}</p></li>
                        <li><p className={classes.text}>Кол-во: {counter}, шт</p></li>
                        <li><p className={classes.text}>Объем: {volume}, м3</p></li>
                        <li><p className={classes.text}>Общая масса нетто: {netWeight}, кг</p></li>
                        <li><p className={classes.text}>Общая масса брутто: {grossWeight}, кг</p></li>
                        <li><p className={classes.text}>Стоимость одной единицы: {grossWeight}</p></li>
                    </ul>
                </div>
                <div className={classes.btn}>
                    <ButtonNext path="../" onClick={clear}>В начало</ButtonNext>
                </div>
            </div>
        </div>
    )
};
export default Results