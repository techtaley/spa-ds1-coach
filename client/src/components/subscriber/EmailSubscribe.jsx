import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import axiosInstance from '../../../config';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import EmailSubscribeForm from './EmailSubscribeForm';

import './css/subscriber.css';

export default function EmailSubscribe() {
  return (
    //MailChimp API MailchimpSubscribe form to send formResponses
    <MailchimpSubscribe
      url={import.meta.env.VITE_API_URL}
      render={(props) => {
        //from MailchimpSubscribe component
        const { subscribe } = props || {};
        //const { subscribe, status, message } = props || {};

        return (
          <EmailSubscribeForm
            subscribe={subscribe}
            onValidated={(formData) => subscribe(formData)} 
          />
        );
      }}
    />
  );
}
