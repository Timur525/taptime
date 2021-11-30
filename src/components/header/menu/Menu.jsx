import React, {useState} from 'react';
import classes from './Menu.module.css'
import MenuList from './menuList/MenuList';

const Menu = () => {

    const [show, setShow] = useState(false)

    const menuIconClasses = [classes.menu_icon];
    
    if (show){
        menuIconClasses.push(classes.active);
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "visible";
    }


    return (
        <div className={classes.menu}>
            <button className={menuIconClasses.join(' ')} onClick={ () => show?setShow(false):setShow(true)}>
            </button>
            {show &&
                <MenuList />
            }
        </div>
    )
};
export default Menu