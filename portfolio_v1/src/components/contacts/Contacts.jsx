import { useRef } from "react";
import emailjs from "@emailjs/browser"

import "./contacts.css"

function Contacts() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_lpcqz5q', 'template_9jkie0w', form.current, 'VawljDfXWfX8_HT4v')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };

    return (
        <section id="contacts" className="contacts container">
            <h2 className="contacts__title">Contato</h2>
            <div className="contacts__container">
                <form ref={form} className="contacts__form" onSubmit={sendEmail}>
                    <label className="contacts__form__msg">Mensagem:</label>
                    <textarea className="contacts__text-area" name="message" id="message" cols="30" rows="10" placeholder="Digite sua mensagem..."></textarea>
                    <div className="contacts__form__info">
                        <label>Nome:</label>
                        <input type="text" name="user_name" className="contacts__user-info" placeholder="Digite seu nome..." required  />
                        <label>Email:</label>
                        <input type="email" name="user_email" className="contacts__user-info" placeholder="Digite seu email..." required  />
                        <button type="submit" value="Send" className="contacts__submit__btn button">Enviar Msg</button>
                    </div>
                </form>    
            </div>
            <div className="contacts__social">
                <a className="contacts__links" href="mailto:victorazzolini94@gmail.com"><i class="uil uil-envelope" target="_blank"></i>
                    <span className="contacts__links-info-title">Email</span>
                    <span className="contacts__links-info-subtitle">victorazzolini94@gmail.com</span>
                </a>
                <a className="contacts__links" href="https://api.whatsapp.com/send?phone=5519984106095" target="_blank">
                    <i class="uil uil-whatsapp"></i>
                    <span className="contacts__links-info-title">Telefone</span>
                    <span className="contacts__links-info-subtitle">+55 19 98410-6095</span>
                </a>
            </div>


        </section>
    )
}

export default Contacts