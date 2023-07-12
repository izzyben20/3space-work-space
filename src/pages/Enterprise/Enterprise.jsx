import { useRef, useState } from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import DiscoverCards from './components/DiscoverCards';
import EnterpriseForm from './components/EnterpriseForm';
import EnterpriseHero from './components/EnterpriseHero';
import EnterprisePlan from './components/EnterprisePlan';
import Box from '@mui/material/Box';
import emailjs from '@emailjs/browser';

const PUBLIC_ID = 'iVAAQPuVh35d2RUja';
const TEMPLATE_ID = 'template_blb20qx';
const SERVICE_ID = 'service_b8mp6bn';

const Enterprise = () => {
  useDocumentTitle('3Space - Enterprise');
  const form = useRef();
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    setIsSubmittingForm(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_ID).then(
      () => {
        setIsSubmittingForm(false);
        setSuccess(true);
        e.target.reset();
      },
      (err) => {
        setIsSubmittingForm(false);
      }
    );
  };

  return (
    <Box sx={{ mx: { xs: 2, sm: 2, md: 0 } }}>
      <EnterpriseHero />
      <EnterprisePlan />
      <DiscoverCards />
      <EnterpriseForm
        ref={form}
        isSubmittingForm={isSubmittingForm}
        handleForm={handleForm}
        success={success}
      />
    </Box>
  );
};

export default Enterprise;
