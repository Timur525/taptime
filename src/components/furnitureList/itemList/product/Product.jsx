import React from 'react';
import classes from './Product.module.css';
import Button from '../../../UI/button/Button';
import { useDispatch } from 'react-redux';


const Product = (props) => {

    const dispatch = useDispatch();

    const editState = () => {
        dispatch({type: 'PRODUCT', payload:  props.item.text});
        dispatch({type: 'PRODUCT_IMG', payload: props.item.img});
        dispatch({type: 'VIEW_FORM', payload: true});
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
                <img src={props.img} alt={props.text} />
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