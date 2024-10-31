import React, { forwardRef, useState, useRef } from "react";
import stylesComponents from "../../styles/components.module.css";
import stylesGlobal from "../../styles/global.module.css";
import stylesPage from "../../styles/page.module.css";
import WreathPic from "../../images/Wreath.JPEG";
import UpcomingWorkshop from "../WorkShops/UpcomingWorkshop";


const WorkShops = forwardRef((props, ref) => {
    const sectionWrapperClasses = [stylesPage.section__wrapper, stylesPage.wreath]

    const [isWorkShopDetaisVisible, setIsWorkShopDetaisVisible] = useState(false);

    // Функция для изменения состояния (отображать/скрывать компонент)
    const toggleVisibilityAndScroll = () => {
        setIsWorkShopDetaisVisible(!isWorkShopDetaisVisible); // Инвертируем значение состояния
        //scrollToSection();
    };

    /*
    const upcomingWorkshopRef = useRef();

    const scrollToSection = () => {
        upcomingWorkshopRef.current?.scrollIntoView({ behavior: "smooth" });
    };
*/

    return (
        <div ref={ref} className={sectionWrapperClasses.join(' ')}>
            <div className={stylesPage.section}>
                <h2 className={stylesPage.section__header}>Workshops</h2>
                <div className={stylesPage.section__content}>
                    <img className={stylesPage.section__pic} src={WreathPic} alt="Chrismas wreath" ></img>
                    <div>
                        <p>
                            Workshops are engaging events where you can learn to create beautiful things by hand in a friendly and creative atmosphere. Each workshop includes all necessary materials, as well as themed treats and drinks for your enjoyment.
                        </p>
                        <p>
                            The next workshop will focus on creating Christmas wreaths. Join us to immerse yourself in the festive spirit and make something unique for your home! Don't miss the opportunity to sign up!
                        </p>
                        <button className={stylesComponents.button} onClick={toggleVisibilityAndScroll}>
                            Upcoming workshop
                        </button>
                    </div>
                </div>

            </div>
            {isWorkShopDetaisVisible && <UpcomingWorkshop />}
        </div>
    );
});


export default WorkShops;