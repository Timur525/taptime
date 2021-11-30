import React from 'react';
import classes from './FurnitureList.module.css'
import Search from '../search/Search'
import ItemList from './itemList/ItemList';

const FurnitureList = ({filterProduct}) => {
    return (
        <article className={classes.list}>
            <h2 className={classes.title}>
                Выберите мебель, которую нужно перевезти
            </h2>
            <div className={classes.search}>
                <Search />
            </div>
            <ItemList filterProduct={filterProduct}/>
        </article>
    )
};
export default FurnitureList