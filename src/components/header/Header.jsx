import React from 'react';
import logo from '../../img/icons/Logo.svg';
import ButtonContact from '../UI/buttonContact/ButtonContact';
import Menu from './menu/Menu';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className="container">
                <div className={classes.wrapper}>
                    <a href="/">
                        <img className={classes.logo} src={logo} alt="Логотип" />
                    </a>
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