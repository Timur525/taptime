import React from 'react';
import Header from '../../components/header/Header';
import classes from './Results.module.css';
import { useSelector, useDispatch } from 'react-redux';
import ButtonNext from '../../components/UI/buttonNext/ButtonNext';

const Results = () => {

    const whereFrom = useSelector(state => state.whereFrom);
    const where = useSelector(state => state.where);
    const currency = useSelector(state => state.currency);
    const rate = useSelector(state => state.rate);
    const productName = useSelector(state => state.productName);
    const counter = useSelector(state => state.counter);
    const volume = useSelector(state => state.volume);
    const netWeight = useSelector(state => state.netWeight);
    const grossWeight = useSelector(state => state.grossWeight);
    const cost = useSelector(state => state.cost);
    return (
        <div>
            <Header />
            <div className="container">
                <div className={classes.body}>
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
                    <ButtonNext path="../">В начало</ButtonNext>
                </div>
            </div>
        </div>
    )
};
export default Results