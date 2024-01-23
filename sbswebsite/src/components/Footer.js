import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'white',
    textAlign: 'center',
    padding: '20px', // Adjust the padding as needed
  };

  const textStyle = {
    // Add any additional styling for the text (if needed)
  };

  const email = 'Sunnybrook.soccer@gmail.com';

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div style={footerStyle}>
      <h5 style={textStyle}>Questions? Email us at:</h5>
      <h5 style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }} onClick={handleEmailClick}>Sunnybrook.soccer@gmail.com</h5>
    </div>
  );
};

export default Footer;
