import React, {useEffect, useState} from 'react';
import classes from './FurnitureSelection.module.css';
import FurnitureCalculator from '../../components/furnitureCalculator/FurnitureCalculator';
import FurnitureList from '../../components/furnitureList/FurnitureList';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/header/Header';

const FurnitureSelection = () => {

    const furnitureList = useSelector(state => state.furnitureList);
    const search = useSelector(state => state.search);

    const filterProduct = furnitureList.filter(product => {
        return product.text.toLowerCase().includes(search.toLowerCase())
    })

    const resize = useSelector(state => state.resize);
    const page = useSelector(state => state.page);
    

    return (
        <div>            
            <div className="container">

        
                {
                    resize
                    ? <section className={classes.furnitureSelection}>
                        <FurnitureList filterProduct={filterProduct} />
                        <FurnitureCalculator filterProduct={filterProduct} />
                    </section>
                    : <section className={classes.furnitureSelection}>
                        {page
                        ?<FurnitureList filterProduct={filterProduct} />
                        :<FurnitureCalculator filterProduct={filterProduct} />
                        }
                    
                    </section>
                } 
           </div> 
        </div>
        
    )
};
export default FurnitureSelection