import React from 'react';
import './Header.css'; // Import your CSS file for styling
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  }

  const handleMainPage = () => {
    navigate("/");
  }

  const handleResgiter = () => {
    navigate("/register");
  }

  const handlePhotos = () => {
    navigate("/photos");
  }

  const handleHistory = () => {
    navigate("/history");
  }

  const handleLocation = () => {
    navigate("/location");
  }

  const buttonStyle = {
    color: 'white',
  }

  return (
    <div className="header">
      <div className="main-title">
        {/* <h1>Sunnybrook Soccer Club</h1> */}
        <button className="btn" style={buttonStyle} onClick={handleMainPage} type="button"><h2>Sunnybrook Soccer - Over 35 League (goalies over 18)</h2></button>
        <button className='btn' style={buttonStyle} onClick={handleResgiter} type="button">Register</button>
        <button className='btn' style={buttonStyle} onClick={handlePhotos} type="button">Photos</button>
        <button className='btn' style={buttonStyle} onClick={handleHistory} type="button">History</button>
        <button className='btn' style={buttonStyle} onClick={handleLocation} type="button">Location</button>
      </div>
      <div className="right-section">
        {/* <span className="register">Register</span> */}
        <button className="btn" style={buttonStyle} onClick={handleClick} type="button">Admin Login</button>
        {/* <span className="admin-login">Admin Login</span> */}
      </div>
    </div>
  );
};

export default Header;