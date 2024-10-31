import React, { forwardRef } from "react";
import stylesComponents from "../../styles/components.module.css";
import stylesGlobal from "../../styles/global.module.css";
import stylesPage from "../../styles/page.module.css";
import EventFlowersPic from "../../images/EventFlowers.JPG"


const EventFlowers = forwardRef((props, ref) => {
    return (
        <div ref={ref} className={stylesPage.eventSection__wrapper}>
            <div className={stylesPage.section}>
                <h2 className={stylesPage.section__header}>Event Flowers</h2>
                <div className={stylesPage.section__content}>
                    <p>
                        I create floral arrangements, accessories and decor for photoshoots, proposals, gender reveal parties and other celebrations. No matter the scale of the event I will help make it beautiful and memorable with stylish decorations and unique floral accessories.
                    </p>
                    <img className={stylesPage.section__pic} src={EventFlowersPic} alt="Event flowers picture" ></img>
                </div>

            </div>



        </div>
    );
});


export default EventFlowers;