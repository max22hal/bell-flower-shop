import React, { forwardRef, useState, useRef } from "react";
import stylesComponents from "../../styles/components.module.css";
import stylesPage from "../../styles/page.module.css";
import WreathPic from "../../images/Wreath.JPEG";
import UpcomingWorkshop from "../WorkShops/UpcomingWorkshop";


const WorkShops = forwardRef((props, ref) => {
    const sectionWrapperClasses = [stylesPage.section__wrapper, stylesPage.wreath]

    const [isWorkShopDetaisVisible, setIsWorkShopDetaisVisible] = useState(false);

    const upcEventRef = useRef(null);

    const handleUpcEventClick = () => {

        toggleVisibility() // Инвертируем значение состояния

        // Используем setTimeout, чтобы дождаться отображения элемента перед прокруткой
        setTimeout(() => {
            // Скроллим к элементу, если он существует
            upcEventRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

        }, 0);

    };

    // Функция для изменения состояния (отображать/скрывать компонент)
    const toggleVisibility = () => {
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
                        <button className={stylesComponents.button} onClick={handleUpcEventClick}>
                            Upcoming workshop
                        </button>
                    </div>
                </div>

            </div>
            {isWorkShopDetaisVisible && <UpcomingWorkshop ref={upcEventRef} />}
        </div>
    );
});


export default WorkShops;