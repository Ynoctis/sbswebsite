import React from 'react';
import Image1 from '../images/p1.jpg';
import Image2 from '../images/p2.jpg';
import Image3 from '../images/p3mobile.jpeg';
import Image4 from '../images/p4.JPG';
import Image5 from '../images/p5.jpeg';
import Image6 from '../images/p6.jpg';
import Image7 from '../images/p7.jpg';
import Image8 from '../images/p8.JPG';
import Image9 from '../images/p9.JPG';
import Image10 from '../images/p10.jpeg';
import Image11 from '../images/p11.jpg';
import Image12 from '../images/p12.jpg';
import Image13 from '../images/p13.jpg';
import Image14 from '../images/p14.jpg';
import Image15 from '../images/p15.jpg';
import Image16 from '../images/p16.png';
import './PhotoComponent.css'


const PhotoComponent = () => {

    return (
        <div>
            <div className='overflowHidden'>
                <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
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
                <div className='hideInMobile positionRelative'>
                    <div >
                        <img
                            src={Image1}
                            alt="p1"
                            style={{ maxWidth: '50%', height: 'auto' }}
                        />
                        <img
                            src={Image2}
                            alt="p2"
                            style={{ maxWidth: '50%', height: 'auto' }}
                        />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img
                            src={Image3}
                            alt="p3"
                            style={{ flex: 1, objectFit: 'cover' }}
                        />
                        <img
                            src={Image4}
                            alt="p4"
                            style={{ flex: 1, objectFit: 'cover' }}
                        />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img
                            src={Image5}
                            alt="p5"
                            style={{ maxWidth: '40%', height: 'auto' }}
                        />
                        <img
                            src={Image6}
                            alt="p6"
                            style={{ flex: 1, objectFit: 'contain', maxWidth: '60%', height: 'auto' }}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            src={Image7}
                            alt="p7"
                        />
                        <img
                            src={Image8}
                            alt="p8"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </div>
                    <div>
                        <img
                            src={Image9}
                            alt="p9"
                            style={{ maxWidth: '50%', height: 'auto' }}
                        />
                        <img
                            src={Image10}
                            alt="p10"
                            style={{ maxWidth: '50%', height: 'auto' }}
                        />
                    </div>
                    <div>
                        <img
                            src={Image11}
                            alt="p11"
                            style={{ maxWidth: '50%', height: 'auto' }}
                        />
                        <img
                            src={Image12}
                            alt="p12"
                            style={{ maxWidth: '50%', height: 'auto' }}
                        />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img
                            src={Image13}
                            alt="p13"
                            style={{ flex: 1, objectFit: 'contain' }}
                        />
                        <img
                            src={Image14}
                            alt="p14"
                            style={{ flex: 1, objectFit: 'contain' }}
                        />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img
                            src={Image15}
                            alt="p15"
                            style={{ maxWidth: '50%', height: 'auto' }}
                        />
                        <img
                            src={Image16}
                            alt="p16"
                            style={{ flex: 1, objectFit: 'contain' }}
                        />
                    </div>
                </div>

            </div>
            <div className='hideInDesktop'>
                <img
                    src={Image1}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image2}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image3}
                    alt="p1"
                />
                <img
                    src={Image4}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image5}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image6}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image7}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image8}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image9}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image10}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image11}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image12}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image13}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image14}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image15}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <img
                    src={Image16}
                    alt="p1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            </div>
        </div>


        // mobile layout

    );
};

export default PhotoComponent;