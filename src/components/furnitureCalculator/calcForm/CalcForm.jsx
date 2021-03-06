import React, { useRef, useState } from 'react';
import classes from './CalcForm.module.css';
import Counter from '../../UI/counter/Counter';
import Button from '../../UI/button/Button';
import ButtonNext from '../../UI/buttonNext/ButtonNext';
import { useDispatch, useSelector } from 'react-redux';
import Hint from '../../UI/hint/Hint';

const CalcForm = () => {

    const dispatch = useDispatch();

    const volume = useSelector(state => state.volume);
    const netWeight = useSelector(state => state.netWeight);
    const grossWeight = useSelector(state => state.grossWeight);
    const cost = useSelector(state => state.cost);
    const productName = useSelector(state => state.productName);
    const productImg = useSelector(state => state.productImg);
    const resize = useSelector(state => state.resize);

    const [delHintForm, setDelHintForm] = useState(true);
    const [delHintBtn, setDelHintBtn] = useState(true);

    const volumeRef = useRef();
    const netWeightRef = useRef();
    const grossWeightRef = useRef();
    const costRef = useRef();

    const clear = event => {
        event.preventDefault();
        dispatch({type: 'COUNTER', payload: 1});
        dispatch({type: 'VOLUME', payload: ''});
        dispatch({type: 'NET_WEIGHT', payload: ''});
        dispatch({type: 'GROSS_WEIGHT', payload: ''});
        dispatch({type: 'COST', payload: ''});
    }

    const add = (event) => {
        if (volume === ''){
            volumeRef.current.style.border = '2px solid red'
        } else {
            volumeRef.current.style.border = '2px solid transparent'
        }
        
        if (netWeight === ''){
            netWeightRef.current.style.border = '2px solid red'
        } else {
            netWeightRef.current.style.border = '2px solid transparent'
        }

        if (grossWeight === ''){
            grossWeightRef.current.style.border = '2px solid red'
        } else {
            grossWeightRef.current.style.border = '2px solid transparent'
        }

        if (cost === ''){
            costRef.current.style.border = '2px solid red'
        } else {
            costRef.current.style.border = '2px solid transparent'
        }

        if (cost === '' || grossWeight === '' || netWeight === '' || volume === ''){
            event.preventDefault();
        }
    }

    const valid = (e) => {
        if (e.target.value === '') {
            e.target.style.border = '2px solid red'
        } else {
            e.target.style.border = '2px solid transparent'
        }
    }
    

    return (
        <div>
            <div className={classes.product}>
                <div className={classes.product_img}>
                    <img src={productImg} alt={productName} />
                </div>
                <p className={classes.product_text}>
                    {productName}
                </p>
                {delHintForm && resize &&
                    <div className={classes.hint_form}>
                        <Hint>
                            <span className={classes.hint}>
                                <span className={classes.hint_text}>???????????? ?????????????????? ???????? ?????? ?????????? ????????????????</span> 
                                <button 
                                className={classes.close} 
                                onClick={event => setDelHintForm(false)}
                                aria-label="??????????????"
                                ></button>
                            </span>
                        </Hint>
                    </div>
                }
            </div>
                <Counter/>
                <div className={classes.input_wrapper}>
                    <input 
                        className={classes.input} 
                        placeholder="?????????? ??????????, ??3" 
                        type="text"
                        value={volume}
                        ref={volumeRef}
                        pattern="[0-9]*"
                        onBlur={e=>valid(e)}
                        onChange={event => event.target.validity.valid && dispatch({type: 'VOLUME', payload: event.target.value})}
                    />
                    <input 
                        className={classes.input} 
                        placeholder="?????????? ?????????? ??????????, ????" 
                        type="text" 
                        value={netWeight}
                        ref={netWeightRef}
                        pattern="[0-9]*"
                        onBlur={e=>valid(e)}
                        onChange={event => event.target.validity.valid && dispatch({type: 'NET_WEIGHT', payload: event.target.value})}
                    />
                    <input 
                        className={classes.input} 
                        placeholder="?????????? ?????????? ????????????, ????" 
                        type="text" 
                        value={grossWeight}
                        ref={grossWeightRef}
                        pattern="[0-9]*"
                        onBlur={e=>valid(e)}
                        onChange={event => event.target.validity.valid && dispatch({type: 'GROSS_WEIGHT', payload: event.target.value})}
                    />
                    <input 
                        className={classes.input} 
                        placeholder="?????????????????? ?????????? ??????????????" 
                        type="text" 
                        value={cost}
                        ref={costRef}
                        pattern="[0-9]*"
                        onBlur={e=>valid(e)}
                        onChange={event => event.target.validity.valid && dispatch({type: 'COST', payload: event.target.value})}
                    />
                </div>
                <div className={classes.btn_wrapper}>
                    
                    <div className={classes.btn}>
                        <Button onClick={clear}>
                            ????????????????
                        </Button>
                    </div>
                    <div className={classes.btn}>
                        <ButtonNext path='/results' onClick={add}>
                            ????????????????
                        </ButtonNext>
                    </div>
                    {delHintBtn && resize &&
                        <div className={classes.hint_btn}>
                            <Hint>
                                <span className={classes.hint}>
                                    <button 
                                        className={classes.close} 
                                        onClick={event => setDelHintBtn(false)}
                                        aria-label="??????????????"
                                    >
                                    </button>
                                    <span className={classes.hint_text}>
                                        ?????????? ???? ???????????? ???????????????? ?????????????????? ?? ???????????????? ??????????????
                                    </span> 
                                </span>
                            </Hint>
                        </div>
                    }
                </div>
        </div>
    )
};
export default CalcForm