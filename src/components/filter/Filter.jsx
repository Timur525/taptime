import React, { useMemo, useRef } from 'react';
import ButtonNext from '../UI/buttonNext/ButtonNext';
import Hint from '../UI/hint/Hint';
import classes from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
    const resize = useSelector(state => state.resize);

    const dispatch = useDispatch();
    const currencyOption = useSelector(state => state.currencyOption);
    const city = useSelector(state => state.city);
    const where = useSelector(state => state.where);
    const whereFrom = useSelector(state => state.whereFrom);
    const rate = useSelector(state => state.rate);
    const currency = useSelector(state => state.currency);

    useMemo( () => {

        const getItem = currencyOption.find(item => {
            if (item.name === currency) {
                return item
            }
            return false
        });

        dispatch({type: 'RATE', payload: getItem.rate});

    }, [currency, currencyOption, dispatch])
        
    const whereFromRef = useRef();

    const check = (e) => {
        if (e.target.value === '') {
            e.target.style.border = '2px solid red'
        } else {
            e.target.style.border = '2px solid transparent'
        }
    }

    const valid = (e) => {
        if (!whereFrom) {
            e.preventDefault();
            whereFromRef.current.style.border = '2px solid red';
        }
    }

    return (
        <div className={classes.filter}>
            <div className={classes.wrapper}>
                <div className={classes.item}>
                    <label className={classes.label} htmlFor="whereFrom">Откуда</label>
                    <input 
                        type="text" 
                        className={classes.input} 
                        id="whereFrom" 
                        value={whereFrom} 
                        onBlur={e => check(e)}
                        ref={whereFromRef}
                        onChange={event => dispatch({type: 'WHERE_FROM', payload: event.target.value})}
                    />
                </div>
                <div className={classes.item}>
                    <label className={classes.label} htmlFor="where">Куда</label>
                    <select 
                        className={classes.select} 
                        id="where"
                        value={where}
                        onChange={event => dispatch({type: 'WHERE', payload: event.target.value})}
                    >
                        {city.map( (item, index) => 
                            <option value={item} key={index}>{item}</option>
                        )}
                    </select>
                </div>
                <div className={classes.item}>
                <label className={classes.label} htmlFor="currency">Валюта</label>
                    <select 
                        className={classes.select}
                        id="currency" 
                        value={currency}
                        onChange={event => dispatch({type: 'CURRENCY', payload: event.target.value})}
                    >
                        {currencyOption.map( (item, index) => 
                            <option value={item.name} key={index} >{item.name}</option>
                        )}
                    </select>
                </div>
                <div className={classes.item}>
                <label className={classes.label} htmlFor="course">Курс</label>
                    <input 
                        type="text" 
                        className={classes.input} 
                        disabled 
                        value={rate}
                    />
                </div>
            </div>
            <div className={classes.btn_wrapper}>
                {resize
                ?<ButtonNext path={'/furniture-selection'} onClick={valid}>
                    <span className={classes.btn_text}>Далее</span>
                </ButtonNext>
                :<ButtonNext path={'/furniture-selection'} onClick={valid}>
                    Выбрать мебель
                </ButtonNext>
                }

                { whereFrom && resize &&
                <div className={classes.hint_top}>
                    <Hint>
                        <span className={classes.hint}>
                            Теперь нажмите на кнопку “Далее”
                        </span>
                    </Hint>
                </div>
            }
            </div>
            { !whereFrom && resize &&
                <div className={classes.hint_down}>
                    <Hint>
                        <span className={classes.hint}>
                            Для начала заполните поля выше
                        </span>
                    </Hint>
                </div>
            }
        </div>
    )
};
export default Filter


