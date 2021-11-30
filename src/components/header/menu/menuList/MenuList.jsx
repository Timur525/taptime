import React from 'react';
import ButtonContact from '../../../UI/buttonContact/ButtonContact';
import classes from './MenuList.module.css';
import instagram from '../../../../img/icons/social/instagram.svg';
import whatsapp from '../../../../img/icons/social/whatsapp.svg';
import facebook from '../../../../img/icons/social/facebook.svg';
import wechat from '../../../../img/icons/social/wechat.svg';

const MenuList = () => {
    return (
        <div className={classes.menu_list}>
            <div className="container">
                <div className={classes.wrapper}>
                    <div className={classes.contact}>
                        <div className={classes.link_wrapper}>
                            <a href="mailto:asia@baikalvl.ru" className={classes.link}>
                                asia@baikalvl.ru
                            </a>
                            <a href="tel:88002018777" className={classes.link}>
                                8 800 201-87-77
                            </a>
                        </div>
                        <ButtonContact>
                            Связаться
                        </ButtonContact>
                    </div>
                    <div className={classes.soc}>
                        <p className={classes.soc_text}>
                            Мы в соц. сетях:
                        </p>
                        <div className={classes.soc_wrapper}>
                            <a href="/" className={classes.soc_item}>
                                <img src={instagram} alt="instagram" />
                            </a>
                            <a href="/" className={classes.soc_item}>
                                <img src={whatsapp} alt="whatsapp" />
                            </a>
                            <a href="/" className={classes.soc_item}>
                                <img src={facebook} alt="facebook" />
                            </a>
                            <a href="/" className={classes.soc_item}>
                                <img src={wechat} alt="wechat" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default MenuList