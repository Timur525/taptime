import React from 'react';
import classes from './Product.module.css';
import product from '../../../../img/product.jpg';
import Button from '../../../UI/button/Button';
import ButtonNext from '../../../UI/buttonNext/ButtonNext';
import { useDispatch, useSelector } from 'react-redux';


const Product = (props) => {

    const dispatch = useDispatch();
    const key = useSelector(state => state.key);
    const resize = useSelector(state => state.resize);
    const page = useSelector(state => state.page);

    const editState = () => {
        dispatch({type: 'PRODUCT', payload:  props.item.text});
        dispatch({type: 'KEY', payload: props.index});
        dispatch({type: 'PAGE', payload: false});
        dispatch({type: 'COUNTER', payload: 0});
        dispatch({type: 'VOLUME', payload: ''});
        dispatch({type: 'NET_WEIGHT', payload: ''});
        dispatch({type: 'GROSS_WEIGHT', payload: ''});
        dispatch({type: 'COST', payload: ''});
    }

    return (
        <article className={classes.product}>
            <div className={classes.img}>
                <img src={product} alt={props.text} />
            </div>
            <div className={classes.inner}>
                <p className={classes.text}>
                    {props.text}
                </p>
                <div className={classes.btn}>
                    <Button onClick={editState}>
                        Выбрать
                    </Button>
                    
                </div>
            </div>
        </article>
    )
};
export default Product