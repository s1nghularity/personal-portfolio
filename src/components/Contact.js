import React, {useState, useEffect} from 'react';
import { useForm, ValidationError  } from '@formspree/react';
import contact from '../assets/img/contact1.svg'
import 'animate.css'
import { Card, Modal, Button } from 'react-bootstrap';
import turtle from '../assets/img/turtle.svg'
import {TurtleSvg} from '../components/Modal.js';

export const ContactForm = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [state, handleSubmit] = useForm("xyyajnbb");
  
  useEffect(() => {
    if (state.succeeded) {
      setShowModal(true);
    }
  }, [state.succeeded]);

  const handleClose = () => setShowModal(false);

  return (
    <div className='contact-container' id='contact'>
      <div className='work-together'>
        <h2 className='animate__wobble'>Let's work together</h2>
        <p>Have a project you'd like to discuss?</p>
        <p>Send me a message and I'll get back to you as soon as possible.</p>
        <img src={contact} alt='contact-img' />
      </div>
      <Card className='contact-form'>
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      /> <br/><br/>
      <label htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Talk soon!
      </button>

      <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Thanks for reaching out.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TurtleSvg/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

    </form>
      </Card>
    </div>
  );
};
