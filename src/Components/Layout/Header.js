import React from "react";
import styles from '../../styles/header.module.css';
//import stylesGlobal from "../../styles/global.module.css";
import HeaderLogo from './HeaderLogo';
import HeaderMenu from "./HeaderMenu";

const Header = (props) => {
    return (
        <React.Fragment>

            <header className={styles.header}>

                <HeaderLogo />
                <HeaderMenu onScroll={props.onScroll} />
            </header>
        </React.Fragment>
    )
}

export default Header;