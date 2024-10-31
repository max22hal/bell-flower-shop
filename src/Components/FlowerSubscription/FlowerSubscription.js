import React, { forwardRef, useState } from "react";
import stylesComponents from "../../styles/components.module.css";
import stylesGlobal from "../../styles/global.module.css";
import stylesPage from "../../styles/page.module.css";
import FlowerSubscriptionPic from "../../images/FlowerSubscription.JPEG"
import FlowerSubscriptionDetails from "./FlowerSubscriptionDetails";


const FlowerSubscription = forwardRef((props, ref) => {

    const [isFlwrSubsDetaisVisible, setIsFlwrSubsDetaisVisible] = useState(false);

    // Функция для изменения состояния (отображать/скрывать компонент)
    const toggleVisibility = () => {
        setIsFlwrSubsDetaisVisible(!isFlwrSubsDetaisVisible); // Инвертируем значение состояния
    };


    return (
        <div ref={ref} className={stylesPage.eventSection__wrapper}>
            <div className={stylesPage.section}>
                <h2 className={stylesPage.section__header}>Flower Subscription</h2>
                <div className={stylesPage.section__content}>
                    <div>
                        <p>
                            Enjoy fresh flowers every day with my flower subscription!
                        </p>
                        <p>
                            You will receive 4 stunning bouquets a month, delivered at a time that suits you.
                        </p>
                        <p>
                            Each arrangement is an opportunity to create a cozy and stylish atmosphere without spending time shopping.
                        </p>
                        <p>
                            We offer several plans, so you can choose the one that perfectly fits your decor and mood.
                        </p>
                        <p>
                            Fresh flowers delivered conveniently to you—bringing beauty, comfort, and joy to your life every day!
                        </p>
                        <button className={stylesComponents.button} onClick={toggleVisibility}>
                            More
                        </button>
                    </div>

                    <img className={stylesPage.section__pic} src={FlowerSubscriptionPic} alt="Flower subscription picture" ></img>

                </div>


            </div>


            {isFlwrSubsDetaisVisible && <FlowerSubscriptionDetails />}
        </div>
    );
});


export default FlowerSubscription;