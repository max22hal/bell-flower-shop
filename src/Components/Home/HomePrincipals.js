import React from "react";
//import stylesComponents from "../../styles/components.module.css";
//import stylesGlobal from "../../styles/global.module.css";
import stylesPage from "../../styles/page.module.css";
import PrincipalsPic from "../../images/Principals.JPEG";


const HomePrincipals = (props) => {

    return (
        <div className={stylesPage.home__principals}>
            <div className={stylesPage.principals}>
                <div className={stylesPage.principals__wrapper}>
                    <h2 className={stylesPage.home__header}>
                        My principals
                    </h2>
                    <ul className={stylesPage.principals__text}>
                        <li className={stylesPage.principals__item}>Only fresh and high-quality flowers that bring comfort and harmony
                            to your home</li>
                        <li className={stylesPage.principals__item}>Customized décor for any budget because beauty should be accessible
                            to everyone!</li>
                        <li className={stylesPage.principals__item}>Visualization of your décor through presentations, so you can see
                            the final look in advance
                        </li>
                    </ul>

                </div>
                <img className={stylesPage.principals__pic} src={PrincipalsPic} alt="Bouqet with champane" />
            </div>
        </div>
    )
}

export default HomePrincipals;