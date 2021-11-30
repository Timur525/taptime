import React from 'react';
import classes from './FurnitureSelection.module.css';
import FurnitureCalculator from '../../components/furnitureCalculator/FurnitureCalculator';
import FurnitureList from '../../components/furnitureList/FurnitureList';
import { useSelector } from 'react-redux';

const FurnitureSelection = () => {

    const furnitureList = useSelector(state => state.furnitureList);
    const search = useSelector(state => state.search);

    const filterProduct = furnitureList.filter(product => {
        return product.text.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <section className={classes.furnitureSelection}>
            <FurnitureList filterProduct={filterProduct} />
            <FurnitureCalculator filterProduct={filterProduct} />
        </section>
    )
};
export default FurnitureSelection