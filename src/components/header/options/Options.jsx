import React, {useState, useMemo} from 'react';
import classes from './Options.module.css';
import { useSelector, useDispatch } from 'react-redux';
import arrow from '../../../img/icons/arrow_grey.svg';
import Button from '../../UI/button/Button';
import Hint from '../../UI/hint/Hint';

const Options = () => {

    const dispatch = useDispatch();

    const where = useSelector(state => state.where);
    const whereFrom = useSelector(state => state.whereFrom);
    const currency = useSelector(state => state.currency);
    const city = useSelector(state => state.city);
    const currencyOption = useSelector(state => state.currencyOption);
    const resize = useSelector(state => state.resize);

    const [edit, setEdit] = useState(false);
    const [hint, setHint] = useState(true);
    const [stateInput, setStateInput] = useState({
        whereFrom,
        where,
        currency
    });

    useMemo( () => {

        const getItem = currencyOption.find(item => {
            if (item.name === currency) {
                return item
            }
            return false
        });

        dispatch({type: 'RATE', payload: getItem.rate});

    }, [currency, currencyOption, dispatch])

    const save = (e) => {
        setEdit(false)
        dispatch({type: 'WHERE_FROM', payload: stateInput.whereFrom})
        dispatch({type: 'WHERE', payload: stateInput.where})
        dispatch({type: 'CURRENCY', payload: stateInput.currency})
    }

    return (
        <div className={classes.options}>
            {!edit
            ?   <div className={classes.wrapper} >
                    <span>{whereFrom}</span>
                    <img className={classes.icon_arrow} src={arrow} alt="" />
                    <span>{where}, {currency}</span> 
                    <button 
                        className={classes.edit} 
                        onClick={e => setEdit(true)}
                        aria-label="Редактировать"
                    ></button>
                </div>
            
            :   <div className={classes.form} >
                    <div className={classes.items}>
                        <div className={classes.item}>
                            <input 
                                type="text" 
                                className={classes.input}
                                value={stateInput.whereFrom} 
                                onChange={e => setStateInput({...stateInput, whereFrom: e.target.value})}
                            />
                        </div>
                        <div className={classes.item}>
                            <select 
                                className={classes.select}
                                value={stateInput.where} 
                                onChange={e => setStateInput({...stateInput, where: e.target.value})}
                            >
                                {city.map( (item, index) => 
                                    <option value={item} key={index}>{item}</option>
                                )}
                            </select>
                        </div>
                        <div className={classes.item}>
                            <select 
                                className={classes.select}
                                value={stateInput.currency} 
                                onChange={e => setStateInput({...stateInput, currency: e.target.value})}
                            >
                                {currencyOption.map( (item, index) => 
                                    <option value={item.name} key={index} >{item.name}</option>
                                )}
                            </select>
                        </div>
                    </div>
                    <div className={classes.save}>
                        <Button className={classes.save} onClick={save}>Сохранить</Button>  
                    </div>
                </div>
            }
            { resize && hint &&
                <div className={classes.hint_bot}>
                    <Hint>
                        <span className={classes.hint}>
                            <span className={classes.hint_text}>
                                Теперь ваши параметры выведены сверху, нажмите на них, чтобы  внести изменения
                            </span> 
                            <button 
                                className={classes.close} 
                                onClick={event => setHint(false)}
                                aria-label="Закрыть"
                            ></button>
                        </span>
                    </Hint>
                </div>
            }
        </div>
    )
};
export default Options