import React, { useState } from 'react';
import Product from './product/Product';
import classes from './ItemList.module.css';


const ItemList = ({filterProduct}) => {
    const [activeButton, setActiveButton] = useState();
    return (
        <div className={classes.itemList}>
            {filterProduct.map( (item, index) => 
                <Product 
                    img={item.img} 
                    text={item.text} 
                    index={index} 
                    key={index} 
                    item={item} 
                    setActiveButton={setActiveButton}
                    active={activeButton === index ? true : false}
                />
            )}
        </div>
    )
};

export default ItemList