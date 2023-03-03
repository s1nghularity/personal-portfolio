import { useForm } from '@formspree/react';
import contact from '../assets/img/contact1.svg'
import 'animate.css'

export const ContactForm = () => {
  const [state, handleSubmit] = useForm('{xyyajnbb}');
  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }
  return (
    <div className='contact-container' id='contact'>
      <div className='work-together'>
        <h2 className='animate__wobble'>Let's work together</h2>
        <p>Have a project you'd like to discuss?</p>
        <p>Send me a message and I'll get back to you as soon as possible.</p>
        <img src={contact} alt='contact-img' />
      </div>
      <form onSubmit={handleSubmit} className='contact-form'>
        {' '}
        <label htmlFor='email'>Email</label>{' '}
        <input id='email' type='email' name='email' className='form-input' />{' '}
        <label htmlFor='message'>Message</label>{' '}
        <textarea id='message' name='message' className='form-input' />{' '}
        <button
          type='submit'
          disabled={state.submitting}
          className='submit-btn'
        >
          Sign up
        </button>{' '}
      </form>
    </div>
  );
};
