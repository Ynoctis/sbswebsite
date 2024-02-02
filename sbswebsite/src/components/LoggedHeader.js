import React from 'react';
import './Header.css'; // Import your CSS file for styling
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const handleMainPage = () => {
        navigate("/");
    }

    const handleClick = () => {
        localStorage.removeItem('access_token');
        navigate("/login");
    }

    const buttonStyle = {
        color: 'white',
    }

    const handleNavMem = () => {
        navigate("/memberlist");
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

    // const handleNonMem = () => {
    //     navigate("/nonmember");
    // }

    return (
        <div className="header">
            <div className="main-title">
                <button className="btn" style={buttonStyle} onClick={handleMainPage} type="button"><h2>Sunnybrook Soccer - Over 35 League (goalies over 18)</h2></button>
                <button className='btn' style={buttonStyle} onClick={handleResgiter} type="button">Register</button>
                <button className='btn' style={buttonStyle} onClick={handlePhotos} type="button">Photos</button>
                <button className='btn' style={buttonStyle} onClick={handleHistory} type="button">History</button>
                <button className='btn' style={buttonStyle} onClick={handleLocation} type="button">Location</button>

            </div>
            <div className="right-section">
                {/* <button className="btn" onClick={handleNonMem} style={buttonStyle} type="button">Non Member Page</button> */}
                {/* <button className="btn" onClick={handleNavcsvtodoc} style={buttonStyle} type="button">Photo Converter</button> */}
                <button className="btn" onClick={handleNavMem} style={buttonStyle} type="button">User List</button>
                <button className="btn" onClick={handleClick} style={buttonStyle} type="button">Log Out</button>
            </div>
        </div>
    );
};

export default Header;