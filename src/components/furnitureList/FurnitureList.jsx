import React from 'react';
import classes from './FurnitureList.module.css';
import Search from '../search/Search';
import ItemList from './itemList/ItemList';
import { useSelector, useDispatch } from 'react-redux';
import Menu from '../header/menu/Menu';
import { Link } from 'react-router-dom';
import Hint from '../UI/hint/Hint';

const FurnitureList = ({filterProduct}) => {

    const dispatch = useDispatch();

    const resize = useSelector(state => state.resize);
    const search = useSelector(state => state.search);
    const viewForm = useSelector(state => state.viewForm);
   
    return (

        <div className={classes.body}>
            {
            !resize&& 
            <div className={classes.header}>
                <Link to="../" className={classes.back}></Link>
                <input 
                    className={classes.search} 
                    type="text" 
                    placeholder="Поиск..." 
                    value={search}
                    onChange={event => dispatch({type: 'SEARCH', payload: event.target.value})} 
                />
                <Menu/>
            </div>      
            }
            
                <article className={classes.list}>
                    { resize &&
                        <h2 className={classes.title}>
                            Выберите мебель, которую нужно перевезти
                        </h2>
                    }
                    { resize &&
                        <div className={classes.search}>
                            <Search />
                            {!viewForm &&
                            <div className={classes.hint_item}>
                                <Hint><span className={classes.hint}>Введите название мебели в строку поиска или выберите мебель из предложенного списка</span></Hint>
                            </div>
                            }
                        </div>            
                    }
                    <ItemList filterProduct={filterProduct}/>
                </article>
        </div>
    )
};
export default FurnitureList