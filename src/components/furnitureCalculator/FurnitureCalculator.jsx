import React from 'react';
import CalcForm from './calcForm/CalcForm';
import classes from './FurnitureCalculator.module.css'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../header/Header';

const FurnitureCalculator = ({filterProduct}) => {

    const bool = useSelector(state => state.bool);
    const resize = useSelector(state => state.resize);
    const page = useSelector(state => state.resize);

    const dispatch = useDispatch();

    return (

        // Заменить
        <div style={{width: '100%'}}> 
            {
            !resize && 
            <div>Новая шапка</div>      
            }
            
                <article className={classes.calc}>


                    {resize &&
                    <h2 className={classes.title}>
                        Затем заполните следующие поля выбранного элемента:
                    </h2>
                    }
                    
                    {bool
                        ?<CalcForm filterProduct={filterProduct}/>
                        :<p className={classes.text}>Вы не выбрали пока ни одного элемента.</p>
                    }  
                </article>
        </div>
    )
};
export default FurnitureCalculator