import React, { forwardRef } from "react";
import stylesPage from "../../styles/page.module.css";

const HomeAboutMe = forwardRef((props, ref) => {
    const aboutMeStyles = [stylesPage.home__welcome, stylesPage.home__aboutMe]
    return (
        <div className={aboutMeStyles.join(' ')} ref={ref}>
            <div className={stylesPage.home__text}>
                <p>
                    My love for weddings and beauty led me to the profession of a floral decorator. Since childhood, I have been captivated by flowers and how they can transform any space, whether it is a grand castle or a cozy home. For me, weddings are the perfect blend of aesthetics and romance, and flowers have always been the highlight of any celebration.
                </p>
                <p>
                    One of my proudest moments was when a renowned florist noticed my style and published my work as a reference. This gave me the confidence and inspiration to keep moving forward in my craft. Working in the Netherlands is also a source of pride for me. I am constantly learning to improve, and I have completed numerous courses that have helped me become a professional in this field.
                </p>
                <p>
                    As for challenges—they do not scare me. My life motto is, “It is better to do something than to do nothing.” Sure, there are occasional setbacks, but each one is a lesson that makes me stronger.
                </p>
                <p>
                    I create light, airy compositions that can highlight a bride's beauty or bring a vivid accent to the celebration table. At the same time, I believe floral design does not have to be overly expensive. The secret lies in the thoughtful selection of flowers, greenery, and balanced accents.
                </p>
                <p>
                    I am always open to communication and ready to help you!
                </p>
            </div>
        </div>
    )
});

export default HomeAboutMe;