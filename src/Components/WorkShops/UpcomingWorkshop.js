import React from "react";
//import stylesComponents from "../../styles/components.module.css";
//import stylesGlobal from "../../styles/global.module.css";
import stylesPage from "../../styles/page.module.css";
import RnGWreathPic from "../../images/Cristmas_wreath_red_and_gold.JPEG";
import WreathWithOranges from "../../images/Wreath_with_oranges.JPEG";
import EmailForm from "../Forms/EmailForm";

const UpcomingWorkshop = (props) => {

    const wrapperStyles = [stylesPage.section_more__wrapper, stylesPage.wreath_details];


    return (
        <div className={wrapperStyles.join(' ')}>
            <div className={stylesPage.section_more}>
                <p className={stylesPage.section_more__intro}>
                    We invite you to a cozy Christmas wreath workshop where you can create your very own festive wreath and embrace the holiday spirit! In a warm, decorated setting with Christmas music and twinkling lights, you will be surrounded by a creative atmosphere and like-minded people!
                </p>
                <div className={stylesPage.section_more__content}>
                    <div>
                        <img className={stylesPage.section_more__smallpic} src={WreathWithOranges} alt="Red and gold christmas wreath"></img>
                    </div>
                    <div>
                        <h3>
                            What to Expect:
                        </h3>
                        <ul>
                            <li>
                                All necessary materials are provided, so you can focus entirely on crafting your wreath.
                            </li>
                            <li>
                                Christmas music and decor that will set a festive, cozy mood.
                            </li>
                            <li>
                                Hot Christmas drinks and delicious snacks, included in the price.
                            </li>
                        </ul>
                        <h3>
                            Details:
                        </h3>

                        <ul>
                            <li>
                                <strong>Date & Time:</strong> December 8th, starting at 3:00 PM
                            </li>
                            <li>
                                <strong>Location:</strong> Utrecht
                            </li>
                            <li>
                                <strong>Cost:</strong> €50 (includes all materials, drinks, and snacks)
                            </li>

                        </ul>
                    </div>

                </div>
                <div className={stylesPage.section_more__content}>
                    <div>

                        <p>
                            Register in advance to reserve your spot! This workshop is a perfect opportunity to create not just a wreath, but a little Christmas magic for your home!
                        </p>
                        <EmailForm header="Send me a message to register!" />
                    </div>
                    <div>
                        <img className={stylesPage.section_more__pic} src={RnGWreathPic} alt="Christmas wreath with oranges"></img>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default UpcomingWorkshop;