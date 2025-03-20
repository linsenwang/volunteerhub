// src/App.js
import SectionContainer from '../components/SectionContainer';
import Form from '../components/Form';

function Contact() {
  return (
    <div>
      <SectionContainer title="Contact Us" marginTop={6}>
        <Form />
      </SectionContainer>
    </div>
  );
}

export default Contact;
