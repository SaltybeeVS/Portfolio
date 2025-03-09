import React from 'react';
import Button from '../Button/Button.jsx';
import emailjs from 'emailjs-com';
import './Form.modules.css';

function Form({ fields, onSubmit, buttonText }) { // Recibir buttonText como prop
  const handleSubmit = function (e) {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log('Email sent successfully!', result.text);
          alert('Message sent! I\'ll contact you soon!');
          if (onSubmit) {
            onSubmit(e);
          }
        },
        (error) => {
          console.log('Failed to send email.', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      {fields.map(function (field, index) {
        return (
          <div key={index}>
            <label htmlFor={field.id} className="label">
              {field.label}
            </label>
            <input
              id={field.id}
              type={field.type}
              name={field.id}
              placeholder={field.placeholder}
              pattern={field.pattern}
              required={field.required}
            />
            {field.smallText && <small>{field.smallText}</small>}
          </div>
        );
      })}
      <Button isSubmit>{buttonText}</Button>
    </form>
  );
}

export default Form;