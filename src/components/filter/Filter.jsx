import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import ButtonNext from '../UI/buttonNext/ButtonNext';
import Hint from '../UI/hint/Hint';
import classes from './Filter.module.css'

const Filter = () => {

    const [value, setValue] = useState('');

    return (
        <div className={classes.filter}>
            <div className={classes.wrapper}>
                <div className={classes.item}>
                    <label className={classes.label} htmlFor="whereFrom">Откуда</label>
                    <input 
                        type="text" 
                        className={classes.input} 
                        id="whereFrom" 
                        value={value} 
                        onChange={event => setValue(event.target.value)}
                    />
                </div>
                <div className={classes.item}>
                    <label className={classes.label} htmlFor="where">Куда</label>
                    <select className={classes.select} id="where">
                        <option value="Москва">Москва</option>
                        <option value="Владивосток">Владивосток</option>
                        <option value="Омск">Омск</option>
                    </select>
                </div>
                <div className={classes.item}>
                <label className={classes.label} htmlFor="currency">Валюта</label>
                    <select className={classes.select} id="currency">
                        <option value="USD">USD</option>
                        <option value="CYN">CYN</option>
                        <option value="RUB">RUB</option>
                    </select>
                </div>
                <div className={classes.item}>
                <label className={classes.label} htmlFor="course">Курс</label>
                    <input type="text" className={classes.input} disabled value="64,54 руб."/>
                </div>
            </div>
            <div className={classes.btn_wrapper}>
                <ButtonNext>
                    <span className={classes.btn_text}>Далее</span>
                </ButtonNext>
                { value &&
                <div className={classes.hint_top}>
                    <Hint>
                        <span className={classes.hint}>
                            Теперь нажмите на кнопку “Далее”
                        </span>
                    </Hint>
                </div>
            }
            </div>
            { !value &&
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