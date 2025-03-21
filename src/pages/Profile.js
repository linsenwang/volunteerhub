// src/App.js
import SectionContainer from '../components/SectionContainer';
import ProfileForm from '../components/ProfileForm';

function Contact() {
  return (
    <div>
      <SectionContainer title="Contact Us" marginTop={6}>
        <ProfileForm />
      </SectionContainer>
    </div>
  );
}

export default Contact;
