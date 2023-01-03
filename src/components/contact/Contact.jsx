import React from 'react'
import emailjs from 'emailjs-com'
import './contact.css'
import { useRef } from 'react'
import swal from 'sweetalert'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();

      emailjs.
        sendForm(
			/*
				'service',
				'template',
				form.current,
				'apikey'
			*/
      )
      .then(
        (result) => {
        e.target.reset()
        swal('Dziękuje za wiadomość', 'Wiadomość została wysłana poprawnie.', 'success')
        //console.log(result.text);
      }, 
      (error) => {
        swal('Coś poszło nie tak', 'Spróbuj ponownie później', 'error');
        //console.log(error.text);
      });   
  };

  return (
    <section id='contact'>
      <h2>Napisz do mnie</h2>

      <div className='container contact__container'>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Imię i Nazwisko' required />
          <input type='text' name='email' placeholder='E-mail' required />
          <textarea name='message' rows='7' placeholder='Wiadomość' required></textarea>
          <button type='submit' className='btn btn-primary'>Wyślij</button>
        </form>
      </div>
    </section>
  )
}

export default Contact