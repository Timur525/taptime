import React from 'react';
import CalcForm from './calcForm/CalcForm';
import classes from './FurnitureCalculator.module.css'
import { useDispatch, useSelector } from 'react-redux';

const FurnitureCalculator = ({filterProduct}) => {

    const bool = useSelector(state => state.bool);

    return (
        <article className={classes.calc}>
            <h2 className={classes.title}>
                Затем заполните следующие поля выбранного элемента:
            </h2>
            {bool
                ?<CalcForm filterProduct={filterProduct}/>
                :<p className={classes.text}>Вы не выбрали пока ни одного элемента.</p>
            }
            
            
        </article>
    )
};
export default FurnitureCalculator