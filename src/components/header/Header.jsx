import React from 'react';
import logo from '../../img/icons/Logo.svg';
import ButtonContact from '../UI/buttonContact/ButtonContact';
import Menu from './menu/Menu';
import classes from './Header.module.css';
import { useSelector } from 'react-redux';
import arrow from '../../img/icons/arrow_grey.svg'

const Header = () => {

    const where = useSelector(state => state.where);
    const whereFrom = useSelector(state => state.whereFrom);
    const currency = useSelector(state => state.currency);

    return (
        <header className={classes.header}>
            <div className="container">
                <div className={classes.wrapper}>
                    <div className={classes.logo_wrapper}>
                        <a href="/">
                            <img className={classes.logo} src={logo} alt="Логотип" />
                        </a>
                        {window.location.pathname === '/furniture-selection' &&

                            <div className={classes.options}>
                                   <span>{whereFrom}</span>
                                   <img className={classes.icon_arrow} src={arrow} alt="" />
                                   <span>{where}, {currency}</span> 
                            </div>
                        }
                    </div>
                    <div className={classes.button_contact}>
                        <ButtonContact>
                            Связаться
                        </ButtonContact>
                    </div>
                    <div className={classes.menu}>
                        <Menu />
                    </div>
                </div>
            </div>
        </header>
    )
};
export default Header