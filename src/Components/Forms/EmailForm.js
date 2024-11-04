import React, { useRef } from 'react';
import stylesComponents from "../../styles/components.module.css";
//import stylesGlobal from "../../styles/global.module.css";
//import stylesPage from "../../styles/page.module.css";
import emailjs from '@emailjs/browser';

function EmailForm(props) {

    /*
    // Управление состоянием для каждого поля формы
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // Обработчик изменения полей формы
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Обработчик отправки формы
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Форма отправлена:', formData);
        // Здесь можно добавить логику отправки данных на сервер
    };
    */

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_fngyc99', 'template_ebqkppi', form.current, {
                publicKey: 'kvVXM2JQriZpxXAqo',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

    };

    return (
        <div>


            {
                /* 
                <form className={stylesComponents.form} action='https://formsubmit.co/max22hal@gmail.com' method='POST'>
                <div>
                    <label>
                        <input
                            type="text"
                            name="name"
                            placeholder='Name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
    
                <div>
                    <label>
                        <input
                            type="email"
                            name="email"
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
    
                <div>
                    <label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder='Phone number'
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
    
                <div>
                    <label>
    
                        <textarea
                            name="message"
                            placeholder='Text message'
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
    
                <button type="submit" className={stylesComponents.button}>Send </button>
            </form>    
            */
            }
            {
                /*
                            <form action="https://formsubmit.co/d4547073fea030c5dd91519d5b2d070c" method="POST">
                                <input type="text" name="name" required></input>
                                <input type="email" name="email" required></input>
                                <button type="submit">Send</button>
                            </form>
                            */
            }

            <form className={stylesComponents.form} ref={form} onSubmit={sendEmail}>
                <h3>{props.header}</h3>
                <input type="text" name="user_name" placeholder='Please enter your name' />

                <input type="email" name="user_email" placeholder='Please enter your e-mail' />

                <textarea name="message" placeholder='Please enter your message here' />
                <input className={stylesComponents.button} type="submit" value="Send" />
            </form>
        </div>
    );
}

export default EmailForm;