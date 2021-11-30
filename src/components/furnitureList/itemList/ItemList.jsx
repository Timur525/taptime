import React from 'react';
import Product from './product/Product';
import classes from './ItemList.module.css';


const ItemList = ({filterProduct}) => {

    return (
        <div className={classes.itemList}>
            {filterProduct.map( (item, index) => 
                <Product img={item.img} text={item.text} index={index} key={index} item={item} />
            )}
        </div>
    )
};

export default ItemList