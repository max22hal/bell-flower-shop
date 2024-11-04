import React from "react";
import stylesHeader from "../../styles/header.module.css";




const HeaderMenu = (props) => {

    const classes = [stylesHeader.menu__item, stylesHeader.menu__item_active];


    return (
        <div className={stylesHeader.header__wrapper}>

            <nav className={stylesHeader.menu}>
                { /*
                    <li>
                        <li className={classes.join(' ')} >
                            <button>Home</button>
                        </li>
                    </li>
                    */
                }
                <li>
                    <li className={stylesHeader.menu__item} onClick={() => props.onScroll("weddingFlowers")}>
                        <button>Wedding flowers</button>
                    </li>
                </li>
                <li>
                    <li className={stylesHeader.menu__item} onClick={() => props.onScroll("eventFlowers")}>
                        <button>Event flowers</button>
                    </li>
                </li>
                <li>
                    <li className={stylesHeader.menu__item} onClick={() => props.onScroll("weddingSubscription")}>
                        <button>Wedding subscription</button>
                    </li>
                </li>
                <li>
                    <li className={stylesHeader.menu__item} onClick={() => props.onScroll("flowerSubscription")}>
                        <button>Flower subscription</button>
                    </li>
                </li>
                <li>
                    <li className={stylesHeader.menu__item} onClick={() => props.onScroll("workshops")}>
                        <button>Workshops</button>
                    </li>
                </li>
                <li>
                    <li className={stylesHeader.menu__item} onClick={() => props.onScroll("contacts")}>
                        <button>Contacts</button>
                    </li>
                </li>

            </nav>

        </div >
    )
}

export default HeaderMenu