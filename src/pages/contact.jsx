import React, { useRef } from 'react';
import Recaptcha from 'react-google-recaptcha';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import H1 from '../components/typography/H1';
import {
  FormGroup,
  FormButton,
  Label,
  Input,
  Select,
  TextArea,
} from '../components/typography/Inputs';

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY;
if (typeof RECAPTCHA_KEY === 'undefined')
  throw new Error('Env var GATSBY_SITE_RECAPTCHA_KEY is undefined!');

const Contact = () => {
  const recaptchaRef = useRef();
  return (
    <Layout title="Contact">
      <SEO title="Contact" />
      <H1>Contact Jeremy</H1>
      <form
        className="flex flex-col"
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        action="/contact/success"
      >
        <input
          className="hidden"
          type="hidden"
          name="form-name"
          value="contact"
        />
        <input className="hidden" name="bot-field" />
        <FormGroup>
          <Label name="name">Name:</Label>
          <Input name="name" placeholder="Jane Doe" type="text" required />
        </FormGroup>
        <FormGroup>
          <Label name="email">Email:</Label>
          <Input name="email" placeholder="jane@doe.com" type="email" />
        </FormGroup>
        <FormGroup>
          <Label for="subject">Subject:</Label>
          <Select
            name="subject"
            options={['General Inquiry', 'Business', 'aoestats.io']}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="message">Message:</Label>
          <TextArea name="message" placeholder="Hello, Jeremy!" required />
        </FormGroup>
        <FormGroup>
          <Recaptcha ref={recaptchaRef} sitekey={RECAPTCHA_KEY} />
        </FormGroup>
        <FormGroup>
          <FormButton>Submit</FormButton>
        </FormGroup>
      </form>
    </Layout>
  );
};
export default Contact;
