import React from 'react';
import Image from '../images/sbsPark.webp';
import Image2 from '../images/p17.webp';

const HomeComponent = () => {

    const containerStyle = {
        maxWidth: '100vw', // Set the maximum width of the container
        // margin: '0 auto', // Center the container if needed
        display: 'flex',  // Use flexbox for centering
        // alignItems: 'center', // Center vertically
        justifyContent: 'space-evenly',
    };

    const imageStyle = {
        // maxWidth: '100%', // Set the maximum width of the image
        height: 'auto',   // Maintain the aspect ratio of the image
        width: '45%',
        // margin: '0 auto', // Center the image horizontally
    };

    const openParkAddress = () => {
        const parkLink = 'https://www.google.com/maps/place/Sunnybrook+Park+Sports+Fields/@43.7213163,-79.3619617,15z/data=!4m6!3m5!1s0x89d4cd17a92aad43:0x849aaebfc97ef9aa!8m2!3d43.7244446!4d-79.3553558!16s%2Fg%2F11df52dc89?authuser=0&entry=ttu'
        window.open(parkLink, '_blank')
    }

    return (
        <div>
            <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingBottom: 10 }}>
                <div style={{ textAlign: 'center' }}>
                    <h1>Sunnybrook Soccer league</h1>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <h2>Established 1973</h2>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <h2>(Formerly St. Andrew Soccer Club)</h2>
                </div>
            </div>

            <div style={containerStyle}>
                {/* <img src="../../public/sbsPark.jpg" alt="SBS Park"/> */}
                <img
                    src={Image}
                    alt="sbsPark"
                    style={imageStyle}
                />
                <img
                    src={Image2}
                    alt="sbsTrophy"
                    style={imageStyle}
                />
            </div>
            <div style={{ paddingRight: '15vw', paddingLeft: '15vw', paddingTop: 10 }}>
                <h4>
                    Sunnybrook Soccer League is an outdoor community <span style={{ textDecoration: 'underline', fontWeight: 'bold' }}>soccer club for women and men aged 35 years and older</span> – (we accept goalies over 18 years old). Games are played on Sunday mornings from May through September at <span style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }} onClick={openParkAddress}>Sunnybrook Park Sports Fields</span> in Toronto.
                </h4>
                <h4>
                    The League has an “Everybody Welcome” motto and is noted for its social aspect.  Each season starts with existing members being allocated to a team. Most players therefore change teams every year and this way get to know many of the players in the league. All players ages and levels are taken into consideration to balance the teams as much as possible in terms of age and skill level.
                </h4>
                <h4>
                    New members are invited to join the league by emailing the league or by invitation. After playing several games for different teams during the early season, new members are placed on a team. We do this to ensure the teams remain balanced.
                </h4>
                <h4>
                    For more information, please contact us or apply for membership under register tab.
                </h4>
            </div>
        </div>

    );
};

export default HomeComponent;