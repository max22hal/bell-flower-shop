import React, { forwardRef } from "react";
//import stylesComponents from "../../styles/components.module.css";
//import stylesGlobal from "../../styles/global.module.css";
import stylesPage from "../../styles/page.module.css";
import WeddingFlowersPic from "../../images/WeddingFlowers.JPG"
//import WeddingFlowersDetails from "./WeddingFlowersDetails";


const WeddingFlowers = forwardRef((props, ref) => {

    /*
    const [isWeddingFlowersDetailsVisible, setIsWeddingFlowersDetailsVisible] = useState(false);

    // Функция для изменения состояния (отображать/скрывать компонент)
    const toggleVisibility = () => {
        setIsWeddingFlowersDetailsVisible(!isWeddingFlowersDetailsVisible); // Инвертируем значение состояния
    };
    */

    return (
        <div ref={ref} className={stylesPage.section__wrapper}>
            <div className={stylesPage.section}>
                <h2 className={stylesPage.section__header}>Wedding Flowers</h2>
                <div className={stylesPage.section__content}>
                    <img className={stylesPage.section__pic} src={WeddingFlowersPic} alt="Wedding flowers bouquet" ></img>
                    <div>
                        <p>
                            I specialize in creating stunning wedding decor that feels personal, sophisticated, and timeless.
                        </p>
                        <p>
                            Whether it's a cozy, intimate gathering or a grand celebration, I'll bring your vision to life with unique touches and flawless execution.
                        </p>

                        <p>
                            And the best part? We’ll make sure it all fits within your budget without compromising on beauty.
                        </p>
                        <p>
                            Let’s design the perfect backdrop for your love story together!
                        </p>
                        {/*<button className={stylesComponents.button} onClick={toggleVisibility}>
                            More
                        </button>*/}

                    </div>
                </div>
                {/* isWeddingFlowersDetailsVisible && < WeddingFlowersDetails /> */}
            </div>
        </div>
    );
});


export default WeddingFlowers;