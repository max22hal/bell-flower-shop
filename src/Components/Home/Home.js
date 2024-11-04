import React from "react";
//import stylesComponents from "../../styles/components.module.css";
//import stylesGlobal from "../../styles/global.module.css";
//import stylesPage from "../../styles/page.module.css";
import HomeWelcome from "./HomeWelcome";
import HomePrincipals from "./HomePrincipals";

const Home = (props) => {
    return (
        <React.Fragment>
            <HomeWelcome />
            <HomePrincipals />
        </React.Fragment>
    )
}

export default Home;