import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_yia2g3e',
      'template_djbankz',
      form.current,
      '4PCqe4hMBBoyGauKI'
    )
    .then(() => {
      setSuccess(true);
      form.current.reset();
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      setSuccess(false);
    });
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-10 px-4 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-green-400 mb-6">Contact Me</h2>
      
      <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4 w-full max-w-md">
        <input type="text" name="name" placeholder="Your Name" required className="p-2 rounded bg-gray-800 border border-green-400 text-white" />
        <input type="email" name="email" placeholder="Your Email" required className="p-2 rounded bg-gray-800 border border-green-400 text-white" />
        <input type="text" name="title" placeholder="Subject" required className="p-2 rounded bg-gray-800 border border-green-400 text-white" />
        <textarea name="message" placeholder="Your Message" required rows="5" className="p-2 rounded bg-gray-800 border border-green-400 text-white" />
        <button type="submit" className="bg-green-400 text-black font-semibold py-2 px-4 rounded hover:bg-green-500 transition">Send</button>
      </form>

      {success && <p className="mt-4 text-green-400">Message sent successfully!</p>}
    </section>
  );
};

export default ContactMe;
