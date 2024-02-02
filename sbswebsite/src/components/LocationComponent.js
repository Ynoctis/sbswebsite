import React from "react";
import Image1 from "../images/p16.png"
import Image2 from "../images/sbParkGoogle.png"

const LocationComponent = () => {

    const openParkAddress = () => {
        const parkLink = 'https://www.google.com/maps/place/Sunnybrook+Park+Sports+Fields/@43.7213163,-79.3619617,15.52z/data=!4m6!3m5!1s0x89d4cd17a92aad43:0x849aaebfc97ef9aa!8m2!3d43.7244446!4d-79.3553558!16s%2Fg%2F11df52dc89?authuser=0&entry=tts'
        window.open(parkLink, '_blank')
    }

    return (
        <div>
            <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column',}}>
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
            <div style={{ paddingTop: '2vh', paddingLeft: '1vh', paddingBottom: '2vh' }}>
                <h2 style={{ textDecoration: 'underline' }}>Location</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div style={{ width: '50%', textAlign: 'center' }}>
                    <h3>Entrance of the park is just north of Leslie and Eglington East. Follow road through part to sports fields.</h3>
                    <h4>
                        Google maps link: <span onClick={openParkAddress} style={{ textDecoration: 'underline', fontWeight: 'bold', color: 'blue', cursor: 'pointer' }}>Click Here</span>
                    </h4>

                </div>
                <div style={{ width: '50%', textAlign: 'center' }}>
                    <h3>
                        Sunnybrook park uses two or the three pitches. Our schedule uses EAST and WEST to describe which pitch to go to. (The City sometimes changes pitches mid-season). This way the most westerly pitch is always WEST on the schedule and the easterly one EAST.
                    </h3>
                </div>
            </div>
            <div style={{ display: 'flex', }}>
                <img
                    src={Image2}
                    alt="p15"
                    style={{ flex: 1, objectFit: 'contain' }}
                />
                <img
                    src={Image1}
                    alt="p16"
                    style={{ flex: 1, objectFit: 'contain' }}
                />
            </div>
        </div>
    );
};

export default LocationComponent;