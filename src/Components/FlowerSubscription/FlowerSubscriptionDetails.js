import React, { forwardRef, useState } from "react";
import stylesComponents from "../../styles/components.module.css";
import stylesGlobal from "../../styles/global.module.css";
import stylesPage from "../../styles/page.module.css";
import Bouquet_S from "../../images/Bouquet_S.JPEG";
import Bouquet_M from "../../images/Bouquet_M.JPEG";
import Bouquet_L from "../../images/Bouquet_L.JPEG";


const FlowerSubscriptionDetails = (props) => {
    return (
        <div className={stylesPage.section_more__wrapper}>
            <div className={stylesPage.section_more}>
                <p className={stylesPage.section_more__intro}>
                    A flower subscription means four unique bouquets each month, delivered right to your door at your preferred time. Each bouquet is thoughtfully crafted to match the season and selected color palette, bringing a fresh burst of life into your home!
                </p>
                <div className={stylesPage.section_more__content}>
                    <div>
                        <h3 className={stylesPage.flowerSubs_header}>
                            Subscription Plans
                        </h3>
                        <div className={stylesPage.flowerSubs_content}>
                            <h4>
                                Plan S
                            </h4>
                            <p>
                                Four petite bouquets featuring 7-10 flower stems with touches of greenery—designed for a simple, elegant accent in your space.
                            </p>
                            <p>
                                <strong>Price: 135 EUR</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <img className={stylesPage.section_more__pic} src={Bouquet_S} alt="Bouquet on a grey background"></img>
                    </div>
                </div>
                <div className={stylesPage.section_more__content}>
                    <div>
                        <img className={stylesPage.section_more__pic} src={Bouquet_M} alt="Bouquet on a grey background"></img>
                    </div>
                    <div className={stylesPage.flowerSubs_content}>
                        <h4 >
                            Plan M
                        </h4>
                        <p>
                            Four medium-sized bouquets with 12-15 flower stems and greenery, including exotic flowers in some arrangements for a unique touch.
                        </p>
                        <p>
                            <strong>Price: 175 EUR</strong>
                        </p>

                    </div>
                </div>
                <div className={stylesPage.section_more__content}>
                    <div className={stylesPage.flowerSubs_content}>
                        <h4>
                            Plan L
                        </h4>
                        <p>
                            Four exclusive, designer bouquets with 15-20 flower stems and greenery, plus exotic flowers in some bouquets, creating a true floral art piece for your home.
                        </p>
                        <p>
                            <strong>Price: 200 EUR</strong>
                        </p>
                    </div>
                    <div>
                        <img className={stylesPage.section_more__pic} src={Bouquet_S} alt="Bouquet on a grey background"></img>
                    </div>
                </div>

                <h3>
                    Benefits
                </h3>
                <ul>
                    <li>
                        <strong>Complimentary pruners</strong> — with your first order, for easy flower care.
                    </li>
                    <li>
                        <strong>Custom delivery schedule</strong> — choose a convenient two-hour window, and we'll deliver your bouquets right on time.
                    </li>
                    <li>
                        <strong>Loyalty bonus</strong> — subscribe for six months or more, and receive a complimentary bouquet for any special occasion of your choice.
                    </li>
                </ul>
                <p>
                    A flower subscription brings fresh beauty and inspiration into everyday life, making your home feel more welcoming and each moment a little brighter. Treat yourself to flowers that bloom beyond the day!
                </p>
            </div>
        </div >
    )
}

export default FlowerSubscriptionDetails;
