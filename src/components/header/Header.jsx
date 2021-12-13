import React from 'react';
import logo from '../../img/icons/Logo.svg';
import ButtonContact from '../UI/buttonContact/ButtonContact';
import Menu from './menu/Menu';
import classes from './Header.module.css';
import Options from './options/Options';

const Header = () => {
    
    return (
        <header className={classes.header}>
            <div className="container">
                <div className={classes.wrapper}>
                    <div className={classes.logo_wrapper}>
                        <a href="/">
                            <img className={classes.logo} src={logo} alt="Логотип" />
                        </a>
                        {window.location.pathname === '/furniture-selection' &&
                            <Options />
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