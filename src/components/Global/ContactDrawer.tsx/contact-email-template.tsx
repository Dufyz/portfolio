import * as React from "react";

type ContactEmailTemplateProps = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

export const ContactEmailTemplate: React.FC<
  Readonly<ContactEmailTemplateProps>
> = ({ name, subject, email, message }) => (
  <div>
    <h1>New message from your potfolio!</h1>
    <p>Sender name: {name}</p>
    <p>Sender email: {email}</p>
    <p>
      Date: {new Date().getDay()}/{new Date().getMonth()}/
      {new Date().getFullYear()}
    </p>
    <p>Subject: {subject}</p>
    <p>Message: {message}</p>
  </div>
);
