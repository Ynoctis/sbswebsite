import React from 'react';
import Image from '../images/sbsLogo.jpg'

const Footer = () => {

  const textStyle = {
    // Add any additional styling for the text (if needed)
    textAlign: 'center'
  };

  const imageStyle = {
    maxWidth: '10%',  // Make the image width 100% of its container
    height: 'auto', // Maintain the aspect ratio
    alignItems: 'center'
  };

  const email = 'Sunnybrook.soccer@gmail.com';

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div style={{backgroundColor: 'white', padding: '20px', alignItems: 'center', margin: 'auto', display: 'flex', justifyContent: 'center', bottom: 0,}}>
      <img
        src={Image}
        alt="sbsLogo"
        style={imageStyle}
      />
      <div>
        <h5 style={textStyle}>Questions? Email us at:</h5>
        <h5 style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer', textAlign: 'center' }} onClick={handleEmailClick}>Sunnybrook.soccer@gmail.com</h5>
      </div>
    </div>
  );
};

export default Footer;
