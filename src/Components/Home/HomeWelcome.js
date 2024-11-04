import React, { useState, useRef } from "react";
import stylesComponents from "../../styles/components.module.css";
import stylesPage from "../../styles/page.module.css";
import DariaPic from "../../images/Daria.png";
import HomeAboutMe from "./HomeAboutMe";

const HomeWelcome = (props) => {

    const [isAboutMeVisible, setIsAboutMeVisible] = useState(false);

    const aboutMeRef = useRef(null);

    const handleAboutMeClick = () => {

        setIsAboutMeVisible(!isAboutMeVisible); // Инвертируем значение состояния

        // Используем setTimeout, чтобы дождаться отображения элемента перед прокруткой
        setTimeout(() => {
            // Скроллим к элементу, если он существует
            aboutMeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

        }, 0);

    };

    return (
        <React.Fragment>
            <div className={stylesPage.home__welcome_wrapper}>
                <div className={stylesPage.home__welcome}>
                    <img className={stylesPage.home__pic} src={DariaPic} alt="Daria" />
                    <div className={stylesPage.welcome__content}>
                        <h1 className={stylesPage.home__header}>
                            Welcome
                        </h1>
                        <div className={stylesPage.home__text}>
                            <p>
                                My name is Daria and I am a floral designer.
                            </p>
                            <p>
                                Flowers are my passion and I am delighter to share it with you. Every arrangement I create
                                is
                                filled
                                with warmth and atention to your wishes.
                            </p>
                            <p>
                                I also host workshops where we create beauty together.
                            </p>
                            <p>
                                I offer flower subscriptions which bring joy to every home every week. Flowers are my way of
                                giving
                                you
                                happines and comfort!
                            </p>
                            <button className={stylesComponents.button} onClick={handleAboutMeClick}>
                                About me
                            </button>

                        </div>

                    </div>

                </div>
                {isAboutMeVisible && <HomeAboutMe ref={aboutMeRef} />}

            </div>
        </React.Fragment>
    )
}

export default HomeWelcome;