import React from 'react';
import Filter from '../../components/filter/Filter';
import classes from './Main.module.css'

const Main = () => {
    return (
        <section className={classes.main}>
            <h1 className={classes.title}>
                Рассчитайте стоимость доставки из Китая
            </h1>
            <Filter />
        </section>
    )
};
export default Main