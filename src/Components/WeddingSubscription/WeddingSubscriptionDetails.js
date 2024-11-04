import React, { forwardRef } from "react";
import stylesPage from "../../styles/page.module.css";
import WedSubsBouquet_1_pic from "../../images/WedSubsBouquet_1.JPG"
import WedSubsBouquet_2_pic from "../../images/WedBouquet_2.JPEG";

const WeddingSubscriptionDetails = forwardRef((props, ref) => {
    return (
        <div className={stylesPage.section_more__wrapper} ref={ref}>
            <div className={stylesPage.section_more}>
                <p className={stylesPage.section_more__intro}>
                    Instead of traditonal flowers on your wedding day your guests come together to give you a more lasting and heartfelt gift - a contribution to a fund that will fill your home with fresh bouquets, reminding you of the joyfull moments of your day again and again long after the celebration has ended!
                </p>
                <div className={stylesPage.section_more__content}>
                    <div>
                        <h3>
                            1. SETTING UP THE WEDDING SUBSCRIPTION
                        </h3>
                        <p>
                            You open your personal deposit account with me.
                        </p>

                        <h3>
                            2. COLLECTING CONTRIBUTIONS FROM GUESTS
                        </h3>
                        <ul>
                            <li>
                                You can share the link to the deposit account with your guests or place it on your wedding website.
                            </li>
                            <li>
                                Guests make their financial contributions via the account page and each participant can donate any
                            </li>
                        </ul>

                        <h3>
                            3. CUSTOMIZING PREFERENCES
                        </h3>
                        <p>
                            You will set your preferences:
                        </p>
                        <ul>
                            <li>
                                Bouquet size (large, medium, or small arrangements).
                            </li>
                            <li>
                                Number of weeks for deliveries (depending on the total amount collected and the chosen size of the arrangements).
                            </li>
                            <li>
                                Delivery address.
                            </li>
                            <li>
                                Preferred delivery days and time (for example, every Saturday morning).
                            </li>
                        </ul>

                        <h3>
                            4. SUBSCRIPTION ACTIVATION AND FIRST DELIVERY
                        </h3>
                        <p>
                            The first delivery will be made on the date you specify after the wedding.
                        </p>
                    </div>

                    <div>
                        <img className={stylesPage.section_more__pic} src={WedSubsBouquet_1_pic} alt="Bouquet on a grey background"></img>
                    </div>
                </div>

                <div className={stylesPage.section_more__content}>
                    <div>
                        <img className={stylesPage.section_more__pic} src={WedSubsBouquet_2_pic} alt="Bouquet on a grey background"></img>
                    </div>
                    <div>
                        <h3>
                            5. THE FIRST BOUQUET DELIVERY
                        </h3>
                        <ul>
                            <li>
                                Your bouquet will be delivered with a personalized card, which may include a congratulatory message from the participating guests.
                            </li>
                            <li>
                                Care instructions for the flowers will be provided.
                            </li>
                            <li>
                                You will also receive a pair of floral scissors as a gift.
                            </li>
                        </ul>
                        <h3>
                            6. SUBSEQUENT DELIVETIES
                        </h3>
                        <ul>
                            <li>
                                Your floral arrangements will continue to be delivered according to the chosen schedule.
                            </li>
                            <li>
                                Each delivery may include different flowers depending on the season and preferences, along with a care guide and a congratulatory card.
                            </li>
                        </ul>
                        <h3>
                            7. FEEDBACK AND ADJUSTMENTS
                        </h3>
                        <ul>
                            <li>
                                You can leave feedback after each bouquet delivery.
                            </li>
                            <li>
                                You can also adjust the delivery frequency, preferences, or bouquet size as desired.
                            </li>
                        </ul>
                        <h3>
                            8. END OF SUBSCRIPTION
                        </h3>
                        <p>
                            When the subscription ends, you’ll have the option to extend it or explore other floral services.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default WeddingSubscriptionDetails;
