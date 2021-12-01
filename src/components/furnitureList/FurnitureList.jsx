import React from 'react';
import classes from './FurnitureList.module.css';
import Search from '../search/Search';
import ItemList from './itemList/ItemList';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../header/Header';
import Menu from '../header/menu/Menu';

const FurnitureList = ({filterProduct}) => {

    const resize = useSelector(state => state.resize);

    return (

        // Заменить
        <div style={{width: '100%'}}>
            {
            !resize&& 
            <div>
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
                        </div>            
                    }
                    <ItemList filterProduct={filterProduct}/>
                </article>
        </div>
    )
};
export default FurnitureList