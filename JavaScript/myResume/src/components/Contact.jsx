import ReadMoreButton from './ReadMoreButton';
import '../styles/contact.css';

function Contact() {
  return (
    <section id="leave-message-section">
      <h2>Leave a Message!</h2>
      <ReadMoreButton to="/contact" text="ClickClick for contact!" />

    </section>
  );
}

export default Contact;
