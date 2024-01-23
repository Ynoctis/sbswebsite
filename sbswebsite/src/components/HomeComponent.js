import React from 'react';
import Image from '../images/sbsPark.jpg'

const HomeComponent = () => {

    const containerStyle = {
        maxWidth: '100%', // Set the maximum width of the container
        margin: '0 auto', // Center the container if needed
    };

    const imageStyle = {
        maxWidth: '100%', // Set the maximum width of the image
        height: 'auto',   // Maintain the aspect ratio of the image
    };

    return (
        <div style={containerStyle}>
            {/* <img src="../../public/sbsPark.jpg" alt="SBS Park"/> */}
            <img
                src={Image}
                alt="sbsPark"
                style={imageStyle}
            />
        </div>
    );
};

export default HomeComponent;