import React from "react";
import styles from "../../styles/header.module.css";
//import stylesGlobal from "../../styles/global.module.css";
import BellFlowerLogo from "../../images/Bell_flower_logo.png";

const HeaderLogo = (props) => {
    return (
        <React.Fragment>
            <div className={styles.header__logo}>
                <div className={styles.header_line}>
                </div>
                <img className={styles.header__img} src={BellFlowerLogo} alt="Flower shop logo" />
                <div className={styles.header_line}>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HeaderLogo;