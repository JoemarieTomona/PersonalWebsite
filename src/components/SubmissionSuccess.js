// src/components/SubmissionSuccess.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function SubmissionSuccess() {
  const { state } = useLocation();
  const { name, email, message } = state || {};

  return (
    <div className="text-center">
      <h1>Thank you, {name}!</h1>
      <p>Your message has been sent successfully.</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong> {message}</p>
    </div>
  );
}

export default SubmissionSuccess;