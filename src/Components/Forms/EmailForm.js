import React, { useRef, useState } from 'react';
import stylesComponents from "../../styles/components.module.css";
import emailjs from '@emailjs/browser';

function EmailForm(props) {


    const form = useRef();

    // Состояние для полей формы
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });


    // Состояние для управления видимостью галочки
    const [showCheckmark, setShowCheckmark] = useState(false);



    // Обновление значений полей
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("Email is send")


        emailjs
            .sendForm('service_0ua3tch', 'template_0uztaob', form.current, {
                publicKey: 'h2Ar2ihfrFvdBoQl4',
            })
            .then(
                () => {
                    // Очистка формы: сбрасываем состояние до начальных значений
                    setFormData(
                        {
                            user_name: '',
                            user_email: '',
                            message: '',
                        }
                    );

                    setShowCheckmark(true);

                    // Скрываем галочку через 3 секунды
                    setTimeout(() => {
                        setShowCheckmark(false);
                    }, 3000);

                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );






    };

    return (
        <div>
            <form className={stylesComponents.form} ref={form} onSubmit={sendEmail}>
                <h3>{props.header}</h3>
                <input
                    type="text"
                    name="user_name"
                    placeholder='Please enter your name'
                    value={formData.user_name}
                    onChange={handleChange} />

                <input type="email" name="user_email" placeholder='Please enter your e-mail' value={formData.user_email} onChange={handleChange} />

                <textarea name="message" placeholder='Please enter your message here' value={formData.message} onChange={handleChange} />

                <input className={stylesComponents.button} type="submit" value="Send" />
                {showCheckmark && (
                    <span className={stylesComponents.success}>
                        Success!
                    </span>
                )}
            </form>
        </div>
    );
}

export default EmailForm;