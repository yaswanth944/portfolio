import React from 'react';

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>
        You can contact me through the following means:
      </p>
      <ul>
        <li>Email: your.email@example.com</li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Your LinkedIn Profile</a></li>
        <li>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">Your GitHub Profile</a></li>
      </ul>
    </div>
  );
}

export default Contact;
