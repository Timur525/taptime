import React from 'react';
import Filter from '../../components/filter/Filter';
import classes from './Main.module.css';
import Header from '../../components/header/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <section className={classes.main}>
                    <h1 className={classes.title}>
                        Рассчитайте стоимость доставки из Китая
                    </h1>
                    <Filter />
                </section>
            </div>
        </div>
    )
};
export default Main