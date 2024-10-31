import React from "react";
import stylesHeader from "../../styles/header.module.css";
import stylesGlobal from "../../styles/global.module.css";


const HeaderMenu = (props) => {

    const classes = [stylesHeader.menu__item, stylesHeader.menu__item_active];


    return (
        <div className={stylesHeader.header__wrapper}>

            <nav className={stylesHeader.menu}>
                <li>
                    <li className={classes.join(' ')} >
                        <a href="#">Home</a>
                    </li>
                </li>
                <li>
                    <li className={stylesHeader.menu__item} onClick={() => props.onScroll("weddingFlowers")}>
                        <a href="#">Wedding flowers</a>
                    </li>
                </li>
                <li>
                    <li className={stylesHeader.menu__item} onClick={() => props.onScroll("eventFlowers")}>
                        <a href="#">Event flowers</a>
                    </li>
                </li>
                <li>
                    <li className={stylesHeader.menu__item} onClick={() => props.onScroll("weddingSubscription")}>
                        <a href="#">Wedding subscription</a>
                    </li>
                </li>
                <li>
                    <li className={stylesHeader.menu__item} onClick={() => props.onScroll("flowerSubscription")}>
                        <a href="#">Flower subscription</a>
                    </li>
                </li>
                <li>
                    <li className={stylesHeader.menu__item} onClick={() => props.onScroll("workshops")}>
                        <a href="#">Workshops</a>
                    </li>
                </li>
                <li>
                    <li className={stylesHeader.menu__item} onClick={() => props.onScroll("contacts")}>
                        <a href="#">Contacts</a>
                    </li>
                </li>

            </nav>

        </div >
    )
}

export default HeaderMenu