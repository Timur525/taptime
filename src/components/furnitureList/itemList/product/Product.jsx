import React from 'react';
import classes from './Product.module.css';
import product from '../../../../img/product.jpg';
import Button from '../../../UI/button/Button';
import { useDispatch, useSelector } from 'react-redux';


const Product = (props) => {

    const dispatch = useDispatch();
    const key = useSelector(state => state.key);

    const editState = () => {
        dispatch({type: 'PRODUCT', payload:  props.item.text});
        dispatch({type: 'KEY', payload: props.index});
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