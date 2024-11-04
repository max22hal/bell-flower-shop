import React, { forwardRef } from "react";

//import stylesComponents from "../../styles/components.module.css";
//import stylesGlobal from "../../styles/global.module.css";
import stylesPage from "../../styles/page.module.css";
import Instagram from "../../images/instagram-new-2016-seeklogo.png";
import Telegram from "../../images/telegram.svg";
import WhatsApp from "../../images/whatsapp.svg";
import EmailForm from "../Forms/EmailForm";

const Contacts = forwardRef((props, ref) => {
    return (
        <div ref={ref} className={stylesPage.contacts__wrapper}>
            <div className={stylesPage.section}>
                <div className={stylesPage.contacts}>
                    <div>
                        <h2>Contacts</h2>
                        <div className={stylesPage.contacts__logos}>
                            <a href="https://wa.me/79647671723" target="_blank" rel="noopener noreferrer" >
                                <img className={stylesPage.contacts__logo} src={WhatsApp} alt="Instagram logo" />
                            </a>
                            <a href="https://t.me/daria_daria_v" target="_blank" rel="noopener noreferrer">
                                <img className={stylesPage.contacts__logo} src={Telegram} alt="Telegram logo" ></img>
                            </a>
                            <a href="https://www.instagram.com/bell_flower_girl?igsh=NnE3eGczdjJ3OXUx" target="_blank" rel="noopener noreferrer" >
                                <img className={stylesPage.contacts__logo} src={Instagram} alt="Instagram logo" />
                            </a>
                        </div>
                        <p>d.ukolova.florist@gmail.com</p>
                        <p>06 13 67 82 74</p>
                        <p>KVK 94227292</p>
                        <p>NL23 BUNQ 2122 7456 14</p>
                    </div>
                    <EmailForm header="Contact me!" />
                </div>


            </div>

        </div>
    )
}
)

export default Contacts;