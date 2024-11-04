import React, { forwardRef, useState, useRef } from "react";
import stylesComponents from "../../styles/components.module.css";
//import stylesGlobal from "../../styles/global.module.css";
import stylesPage from "../../styles/page.module.css";
import WeddingSubscriptionPic from "../../images/WeddingSubscription.JPG"
import WeddingSubscriptionDetails from "./WeddingSubscriptionDetails";

const WeddingSubscription = forwardRef((props, ref) => {

    const [isWedSubsDetaisVisible, setIsWedSubsDetaisVisible] = useState(false);

    const moreRef = useRef(null);

    const handleMoreClick = () => {

        setIsWedSubsDetaisVisible(!isWedSubsDetaisVisible); // Инвертируем значение состояния

        // Используем setTimeout, чтобы дождаться отображения элемента перед прокруткой
        setTimeout(() => {
            // Скроллим к элементу, если он существует
            moreRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

        }, 0);

    };

    return (
        <div ref={ref} className={stylesPage.section__wrapper}>
            <div className={stylesPage.section}>
                <h2 className={stylesPage.section__header}>Wedding Subscription</h2>
                <div className={stylesPage.section__content}>
                    <img className={stylesPage.section__pic} src={WeddingSubscriptionPic} alt="Wedding subscription bouquet" ></img>
                    <div>
                        <p>
                            A wedding subscription is the perfect way to extend the joy and magic of your special day for weeks to come.
                        </p>
                        <p>
                            Imagine receiving fresh bouquets with heartfelt messages from your guests, delivered to your home every week.
                        </p>

                        <p>
                            These aren’t just flowers—they’re a beautiful reminder of your wedding, keeping the love and happiness alive long after the celebration.
                        </p>
                        <p>
                            Each bouquet is unique, and delivery is arranged at your convenience.
                        </p>
                        <p>
                            It’s a wonderful way to relive the emotions of your big day, over and over again!
                        </p>
                        <button className={stylesComponents.button} onClick={handleMoreClick}>
                            More
                        </button>
                    </div>
                </div>

            </div>
            {isWedSubsDetaisVisible && <WeddingSubscriptionDetails ref={moreRef} />}
        </div>
    );
});


export default WeddingSubscription;